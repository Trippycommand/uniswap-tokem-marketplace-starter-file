import {ethers} from 'ethers'

export function toWei(amount , decimal = 18){
    const toWei = ethers.utils.parseUnits(amount,decimal)
    return toWei.toString()
}

export function toEth(amount,decimal = 18){
    const toEth = ehters.utils.formatUnits(amount,decimal)
    return toEth.toString()
}