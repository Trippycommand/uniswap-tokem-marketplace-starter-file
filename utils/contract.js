import { ethers } from "ethers"
import CustomDexABI from "../utils/CustomDex.json";
import CustomTokenABI from "../utils/CustomToken.json"


export const tokenContract = async (address) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { ethereum } = window;
    if (ethereum) {
        const signer = provider.getSigner();
        const contractReader = new ethers.Contract(
            address,
            CustomTokenABI.abi,
            signer
        );
        return contractReader;
    }
};
export const contract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { ethereum } = window;

    if (ethereum) {
        // await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const contractReader = await new ethers.Contract(
            process.env.NEXT_PUBLIC_CONTRACT,
            CustomDexABI.abi,
            signer
        );
        return contractReader;
    }
};
