# ScriptCrypto - Fund Me DApp

This project is a decentralized application (DApp) for crowdfunding using Ethereum blockchain with React.

## Project Structure

- **public/index.html**: HTML file for the main user interface.
- **src/components/CrowdfundingContract.js**: React component for interacting with the smart contract.
- **src/App.js**: Main React component.
- **src/index.js**: Entry point for React app.
- **README.md**: Documentation file.

## Getting Started

1. Set up Node.js and npm.
2. Create a new React app using Create React App.
3. Install web3.js and Bootstrap.
4. Set up MetaMask, create an Ethereum wallet, and connect to the Sepolia Testnet. (Or the Testnet that you like)
5. Get test Ether from the Sepolia Testnet faucet.
6. Connect to the Ethereum network.
7. Interact with your deployed Solidity smart contract.
8. Display fundraising information.
9. Enhance the UI using Bootstrap.

## Smart Contract Deployment

1. Create a new Solidity file.
2. Write the crowdfunding smart contract code.
3. Deploy the smart contract using Remix or other tools on the Sepolia Testnet.
4. Get the deployed smart contract address and ABI.
5. Update React app with the contract address and ABI.

## Installing / Commands

```bash
# Command 1: Set Up Development Environment
npm init -y

# Command 2: Create React App
npx create-react-app scriptcrypto-react
cd scriptcrypto-react

# Command 3: Install Dependencies
npm install web3 bootstrap

# Command 4: When you make npm start, if you have an error, use this command (in Windows):
$env:NODE_OPTIONS = "--openssl-legacy-provider"

# Command 4: To start the server
npm start
