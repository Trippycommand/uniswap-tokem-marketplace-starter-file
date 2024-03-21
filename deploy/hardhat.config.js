require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */


// task ("account","Prints the list of account",async(taskArgs,hre)=>{
//   const accounts = await hre.ethers.getSigners();
//   for(const account of accounts){
//     console.log(account.address)
//   }
// })


// module.exports = {
//   solidity="0.8.0",

// }






// const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc.ankr.com/polygon_mumbai";
// const NEXT_PUBLIC_PRIVATE_KEY = "dd4da520435a7f5a9d9865c4616a7fda1f84c2ebb193c0c530c5b4aef15c9075";
// module.exports = {
//   solidity: "0.8.0",
//   defaultNetwork: "matic",
//   networks: {
//     hardhat: {},
//     polygon_mumbai: {
//       url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
//       accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
//     },
//   },
// };

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const NEXT_PUBLIC_SEPOLIAETH_RPC =
  // "https://sepolia.infura.io/v3/443972dc6bec43d6942b131a89244806" 
  `https://eth-sepolia.g.alchemy.com/v2/7DJ4nBslp-trlbKbdSqF-1rJppAcSk6e`;

const NEXT_PUBLIC_PRIVATE_KEY =
  "dd4da520435a7f5a9d9865c4616a7fda1f84c2ebb193c0c530c5b4aef15c9075";

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "sepolia",
  etherscan: {
    apiKey: "226DIXVPZQ9QEXDQA59BQDK2E5NS39YE6F"
  },
  networks: {
    hardhat: {},
    sepolia: {
      url: NEXT_PUBLIC_SEPOLIAETH_RPC, // 
      // accounts: [NEXT_PUBLIC_PRIVATE_KEY],
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
  namedAccounts: {
    deployer: {
      default: 0, // Index of the account in the `accounts` array
    },
  },
  // Define JSON-RPC provider for the Sepolia chain
  jsonRpc: {
    url: NEXT_PUBLIC_SEPOLIAETH_RPC,
    chainId: 1, // Specify the chain ID for the Sepolia chain
  },
};

// const NEXT_PUBLIC_SEPOLIAETH_RPC = "https://rpc.ankr.com/eth_goerli/e8c97460c9b1d45adbc2137543dcc3e7743333f2bf13426b6157e3cb3c72e012";
// const NEXT_PUBLIC_PRIVATE_KEY = "dd4da520435a7f5a9d9865c4616a7fda1f84c2ebb193c0c530c5b4aef15c9075";

// module.exports = {
//   solidity: "0.8.0",
//   networks: {
//     hardhat: {}, // Default Hardhat network configuration
//     sepolia: { // Define Sepolia network configuration
//       url: NEXT_PUBLIC_SEPOLIAETH_RPC,
//       accounts: [NEXT_PUBLIC_PRIVATE_KEY], // No need to prepend '0x' here
//     },
//   },
//   namedAccounts: {
//     deployer: {
//       default: 0, // Index of the account in the `accounts` array
//     },
//   },
//   // Define JSON-RPC provider for the Sepolia chain
//   jsonRpc: {
//     url: NEXT_PUBLIC_SEPOLIAETH_RPC,
//     chainId: 1, // Specify the chain ID for the Sepolia chain
//   },
// };

// const NEXT_PUBLIC_GOERLIETH_RPC = "https://goerli.infura.io/v3/YOUR_INFURA_PROJECT_ID";
// const NEXT_PUBLIC_PRIVATE_KEY = "dd4da520435a7f5a9d9865c4616a7fda1f84c2ebb193c0c530c5b4aef15c9075";

// module.exports = {
//   solidity: "0.8.0",
//   networks: {
//     hardhat: {}, // Default Hardhat network configuration
//     goerli: { // Define Goerli network configuration
//       url: NEXT_PUBLIC_GOERLIETH_RPC,
//       accounts: [NEXT_PUBLIC_PRIVATE_KEY], // No need to prepend '0x' here
//     },
//   },
//   namedAccounts: {
//     deployer: {
//       default: 0, // Index of the account in the `accounts` array
//     },
//   },
//   // Define JSON-RPC provider for the Goerli chain
//   jsonRpc: {
//     url: NEXT_PUBLIC_GOERLIETH_RPC,
//     chainId: 5, // Specify the chain ID for the Goerli chain
//   },
// };

