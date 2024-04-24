// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import './CustomToken.sol';
import './ExternalApiCaller.sol';

contract CryptoScoutDex {
    // Eth Value:
    uint256 ethValue = 100000000000000;

    // Custom Tokens:
    string[] public tokens = [
        'Ethereum',
        'Tether USDt',
        'USDC',
        'Shiba Inu',
        'BNB',
        'TRON',
        'Uniswap',
        'Polygon'
    ];
    mapping(string => ERC20) public tokenInstanceMap;

    // Transaction History:
    uint256 public _historyIndex;
    struct History {
        uint256 historyId;
        string tokenA;
        string tokenB;
        uint256 inputValue;
        uint256 outputValue;
        address userAddress;
    }
    mapping(uint256 => History) private historys;

    // Events:
    event debuggingLog(string message);
    event debuggingAddress(address message);

    // External API Caller:
    ExternalApiCaller public apiCaller;

    // ----------------------------------------------------------

    // Initialize Custom Tokens:
    constructor() {
        apiCaller = new ExternalApiCaller();
        for (uint256 i = 0; i < tokens.length; i++) {
            CustomToken token = new CustomToken(tokens[i], tokens[i]);
            tokenInstanceMap[tokens[i]] = token;
        }
    }

    // ----------------------------------------------------------

    function getName(
        string memory tokenName
    ) public view returns (string memory) {
        return tokenInstanceMap[tokenName].name();
    }

    function getTokenAddress(
        string memory tokenName
    ) public view returns (address) {
        return address(tokenInstanceMap[tokenName]);
    }

    function getTotalSupply(
        string memory tokenName
    ) public view returns (uint256) {
        return tokenInstanceMap[tokenName].totalSupply();
    }

    function getBalance(
        string memory tokenName,
        address _address
    ) public view returns (uint256) {
        return tokenInstanceMap[tokenName].balanceOf(_address);
    }

    function getEthBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getAllHistory() public view returns (History[] memory) {
        uint256 itemCount = _historyIndex;
        uint256 currentIndex = 0;

        History[] memory items = new History[](itemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            uint256 currrenId = i + 1;
            History storage currentItem = historys[currrenId];
            items[currentIndex] = currentItem;
            currentIndex += 1;
        }

        return items;
    }

    // ----------------------------------------------------------

    function swapEthToToken(string memory tokenName) public payable {
        uint256 inputValue = msg.value;
        uint256 outputValue = (inputValue / ethValue) * 10 ** 18; //covert to 18 decimal place
        require(tokenInstanceMap[tokenName].transfer(msg.sender, outputValue));

        string memory etherToken = 'Ether';

        _transactionHistory(tokenName, etherToken, inputValue, outputValue);
        // return outputValue;
    }

    function swapTokenToEth(string memory tokenName, uint256 _amount) public {
        uint256 exactAmount = _amount / 10 ** 18;
        uint256 ethToBeTransferred = exactAmount * ethValue;
        require(
            address(this).balance >= ethToBeTransferred,
            'Dex is running low on balance.'
        );

        payable(msg.sender).transfer(ethToBeTransferred);
        require(
            tokenInstanceMap[tokenName].transferFrom(
                msg.sender,
                address(this),
                _amount
            )
        );
        string memory etherToken = 'Ether';
        _transactionHistory(
            tokenName,
            etherToken,
            exactAmount,
            ethToBeTransferred
        );
        // return ethToBeTransferred;
    }

    function swapTokenToToken() public {
        // string memory srcTokenName,
        // string memory destTokenName,
        // uint256 srcAmount
        emit debuggingLog('Calling Request');
        apiCaller.requestTokenInrPrice(
            'bitcoin',
            this.swapTokenToToken_callback
        );

        // TODO: INSERT COINGECKO TOKEN ID

        // uint256 destAmount = srcAmount;
        // require(
        //     tokenInstanceMap[srcTokenName].transferFrom(
        //         msg.sender,
        //         address(this),
        //         srcAmount
        //     )
        // );
        // require(
        //     tokenInstanceMap[destTokenName].transfer(msg.sender, destAmount)
        // );

        // _transactionHistory(srcTokenName, destTokenName, srcAmount, destAmount);
    }

    function swapTokenToToken_callback(string memory tokenValue) external {
        emit debuggingLog('Hello World');
        emit debuggingLog(tokenValue);
    }

    // ----------------------------------------------------------

    function _transactionHistory(
        string memory tokenName,
        string memory etherToken,
        uint256 inputValue,
        uint256 outputValue
    ) internal {
        _historyIndex++;
        uint256 _historyId = _historyIndex;
        History storage history = historys[_historyId];
        history.historyId = _historyId;
        history.userAddress = msg.sender;
        history.tokenA = tokenName;
        history.tokenB = etherToken;
        history.inputValue = inputValue;
        history.outputValue = outputValue;
    }
}
