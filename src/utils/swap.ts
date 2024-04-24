import { CreateContract } from './contract'
import { parseErrorMsg, toWei } from './utils'

export async function swapEthToToken(tokenName: string, amount: number) {
  try {
    let tx = {
      value: toWei(amount),
      gasLimit: 5000000,
    }
    const contract = await CreateContract()
    console.log({ tx, tokenName })
    const data = await contract.swapEthToToken(tokenName, tx)
    // TODO: Convert this to events
    const receipt = await data.wait()
    return receipt
  } catch (e) {
    return parseErrorMsg(e)
  }
}

export async function swapTokenToEth(tokenName: string, amount: number) {
  try {
    const contract = await CreateContract()
    const data = await contract.swapTokenToEth(tokenName, toWei(amount))
    // TODO: Convert this to events
    const receipt = await data.wait()
    return receipt
  } catch (e) {
    return parseErrorMsg(e)
  }
}

export async function swapTokenToToken(
  srcToken: string,
  destToken: string,
  amount: number,
) {
  try {
    const contract = await CreateContract()
    const data = await contract.swapTokenToToken(
      srcToken,
      destToken,
      toWei(amount),
    )
    // TODO: Convert this to events
    const receipt = await data.wait()
    return receipt
  } catch (e) {
    return parseErrorMsg(e)
  }
}
