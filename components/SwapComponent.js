import React, { useEffect, useState, useRef } from "react";
import {
  hasValidAllowance,
  increaseAllowance,
  swapEthToToken,
  swapTokenToEth,
  swapTokenToToken,
} from "../utils/context";
import { CogIcon, ArrowSmDownIcon } from "@heroicons/react/outline";
import SwapField from "./SwapField";
import TransactionStatus from "./TransactionStatus";
import toast, { Toaster } from "react-hot-toast";
import { COIN_4, DEFAULT_VALUE, ETH } from "../utils/saleToken";
import { toEth, toWei } from "../utils/utils";
import { useAccount } from "wagmi";

const SwapComponent = () => {
  const [srcToken, setSrcToken] = useState(COIN_4);
  const [destToken, setDestToken] = useState(DEFAULT_VALUE);
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const inputValueRef = useRef();
  const outputValueRef = useRef();
  const isReversed = useRef(false);
  const Increase_ALLOWANCE = "Increase allowance";
  const ENTER_AMOUNT = "Enter an amount";
  const CONNECT_WALLET = "Connect wallet";
  const SWAP = "Swap";

  const srcTokenObj = {
    id: "srcToken",
    value: inputValue,
    setValue: setInputValue,
    defaultValue: srcToken,
    ignoreValue: destToken,
    setToken: setSrcToken,
  };

  const destTokenObj = {
    id: "destToken",
    value: outputValue,
    setValue: setOutputValue,
    defaultValue: destToken,
    ignoreValue: srcToken,
    setToken: setDestToken,
  };

  const [srcTokenComp, setSrcTokenComp] = useState();
  const [destTokenComp, setDestTokenComp] = useState();
  const [swapBtnText, setSwapBtnText] = useState(ENTER_AMOUNT);
  const [txPending, setTxPending] = useState(false);
  const { address } = useAccount();

  useEffect(() => {
    if (!address) setSwapBtnText(CONNECT_WALLET);
    else if (!inputValue || !outputValue) setSwapBtnText(ENTER_AMOUNT);
    else setSwapBtnText(SWAP);
  }, [inputValue, outputValue, address]);

  useEffect(() => {
    if (
      document.activeElement !== outputValueRef.current &&
      document.activeElement.ariaLabel !== "srcToken" &&
      !isReversed.current
    )
      populateOutputValue(inputValue);
    setSrcTokenComp(<SwapField obj={srcTokenObj} ref={inputValueRef} />);
    if (inputValue?.length === 0) setOutputValue("");
  }, [inputValue, destToken]);

  useEffect(() => {
    if (
      document.activeElement !== inputValueRef.current &&
      document.activeElement.ariaLabel !== "destToken" &&
      !isReversed.current
    )
      populateInputValue(outputValue);
    setDestTokenComp(<SwapField obj={destTokenObj} ref={outputValueRef} />);
    if (outputValue?.length === 0) setInputValue("");

    if (isReversed.current) isReversed.current = false;
  }, [outputValue, srcToken]);

  return (
    <div className="border-[1px] rounded-l border-[#644be0] w-[100%] p-4 px-6 rounded-xl bg-violet-800">
      <div className="flex items-center justify-between py-4 px-1">
        <p>Swap</p>
        <CogIcon className="h-6" />
      </div>
      <div className="relative bg-[#010203] p-4 py-6 rounded-xl mb-2 border-[2px] border-transparent hover:border-zinc-600">
        {srcTokenComp}
        <ArrowSmDownIcon
          className="absolute left-1/2 -translate-x-1/2 -bottom-6 h-10 p-1 bg-[#212429] border-4 border-zinc-900 text-zinc-300 rounded-xl cursor-pointer hover:scale-110"
          onClick={handleReverseExchange}
        />
      </div>

      <div className="bg-[#050a12]  p-4 py-6 rounded-xl mt-2 border-[2px] border-transparent hover:border-zinc-600">
        {destTokenComp}
      </div>

      <button
        className={getSwapBtnClassName()}
        onClick={() => {
          if (swapBtnText === Increase_ALLOWANCE) handleIncreaseAllowance();
          else if (swapBtnText === SWAP) handleSwap();
        }}
      >
        {swapBtnText}
      </button>

      {txPending && <TransactionStatus />}

      <Toaster />
    </div>
  );

  async function handleSwap() {
    if (srcToken === ETH && destToken !== ETH) {
      performSwap();
    } else {
      setTxPending(true);
      const result = await hasValidAllowance(address, srcToken, inputValue);
      setTxPending(false);

      if (result) performSwap();
      else handleInsufficientAllowance();
    }
  }

  async function handleIncreaseAllowance() {
    setTxPending(true);
    await increaseAllowance(srcToken, inputValue);
    setTxPending(false);

    setSwapBtnText(SWAP);
  }

  function handleReverseExchange(e) {
    isReversed.current = true;
    setInputValue(outputValue);
    setOutputValue(inputValue);
    setSrcToken(destToken);
    setDestToken(srcToken);
  }

  function getSwapBtnClassName() {
    let className = "p-4 w-full my-2 rounded-xl";
    className +=
      swapBtnText === ENTER_AMOUNT || swapBtnText === CONNECT_WALLET
        ? "text-zinc-400 bg-zinc-800 pointer-events-none rounded-xl mt-2 border-[2px] border-transparent "
        : "bg-blue-700";
    className += swapBtnText === Increase_ALLOWANCE ? "bg-yellow-600" : "";
    return className;
  }

  function populateOutputValue() {
    if (
      destToken === DEFAULT_VALUE ||
      srcToken === DEFAULT_VALUE ||
      !inputValue
    )
      return;

    try {
      if (srcToken !== ETH && destToken !== ETH) setOutputValue(inputValue);
      else if (srcToken === ETH && destToken !== ETH) {
        const outValue = toEth(toWei(inputValue), 14);
        setOutputValue(outValue);
      } else if (srcToken !== ETH && destToken === ETH) {
        const outValue = toEth(toWei(inputValue), 14);
        setOutputValue(outValue);
      }
    } catch (error) {
      setOutputValue("0");
    }
  }

  function populateInputValue() {
    if (
      destToken === DEFAULT_VALUE ||
      srcToken === DEFAULT_VALUE ||
      !outputValue
    )
      return;

    try {
      // TODO - FETCH COINS -> VALUES -> CONVERT VALUE
      if (srcToken !== ETH && destToken !== ETH) { 
        setInputValue(outputValue);
      }
      else if (srcToken === ETH && destToken !== ETH) {
        const outValue = toEth(toWei(outputValue), 14);
        setInputValue(outValue);
      } else if (srcToken !== ETH && destToken === ETH) {
        const outValue = toEth(toWei(outputValue), 14);
        setInputValue(outValue);
      }
    } catch (error) {
      setInputValue("0");
    }
  }

  async function performSwap() {
    setTxPending(true);
    let receipt;
    if (srcToken === ETH && destToken !== ETH)
      receipt = await swapEthToToken(destToken, inputValue);
    else if (srcToken !== ETH && destToken === ETH)
      receipt = await swapTokenToEth(srcToken, inputValue);
    else receipt = await swapTokenToToken(srcToken, destToken, inputValue);

    setTxPending(false);
    if (receipt && !receipt.hasOwnProperty("TransactionHash"))
      notifyError(receipt);
    else notifySuccess();
  }

  function handleInsufficientAllowance() {
    notifyError("Insufficient Allowance. Click 'Increase Allowance'.");

    setSwapBtnText(Increase_ALLOWANCE);
  }

  function notifyError(msg) {
    toast.error(msg, { duration: 6000 });
  }

  function notifySuccess() {
    toast.success("Transaction completed");
  }
};

export default SwapComponent;
