# ScriptCrypto - Fund Me DApp

This project is a decentralized application (DApp) for crowdfunding using Ethereum blockchain with React.

## Project Structure

- **public/index.html**: HTML file for the main user interface.
- **src/components/Web3Connector.js**: React component for connecting to Ethereum using web3.js.
- **src/components/CrowdfundingContract.js**: React component for interacting with the smart contract.
- **src/components/FundraisingInfo.js**: React component for displaying fundraising information.
- **src/components/ContributeForm.js**: React component for contributing to the fundraising campaign.
- **src/App.js**: Main React component.
- **src/index.js**: Entry point for React app.
- **README.md**: Documentation file.

## Getting Started

1. Set up Node.js and npm.
2. Create a new React app using Create React App.
3. Install web3.js and Bootstrap.
4. Set up MetaMask, create an Ethereum wallet, and connect to the Sepolia Testnet.
5. Get test Ether from the Sepolia Testnet faucet.
6. Connect to the Ethereum network in Web3Connector.js.
7. Interact with your deployed Solidity smart contract in CrowdfundingContract.js.
8. Display fundraising information and add a contribution form using FundraisingInfo.js and ContributeForm.js.
9. Enhance the UI using Bootstrap.

## Smart Contract Deployment

1. Create a new Solidity file (e.g., Crowdfunding.sol).
2. Write the crowdfunding smart contract code.
3. Deploy the smart contract using Remix or other tools on the Sepolia Testnet.
4. Get the deployed smart contract address and ABI.
5. Update CrowdfundingContract.js in your React app with the contract address and ABI.

## Installing

```bash
# Step 1: Set Up Development Environment
npm init -y

# Step 2: Create React App
npx create-react-app scriptcrypto-react
cd scriptcrypto-react

# Step 3: Install Dependencies
npm install web3 bootstrap
