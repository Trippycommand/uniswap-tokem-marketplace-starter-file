import { CreateContract } from './contract'
import { parseErrorMsg, toWei } from './utils'

export async function swapEthToToken(tokenName: string, amount: number) {
  try {
    let tx = { value: toWei(amount) }
    const contract = await CreateContract()
    const data = await contract.swapEthToToken(tokenName, tx)
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

    const receipt = await data.wait()
    return receipt
  } catch (e) {
    return parseErrorMsg(e)
  }
}
