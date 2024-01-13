import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContributionSection from './ContributionSection';

import Web3 from 'web3';

const Web3Connector = ({ setWeb3, setContract }) => {
  useEffect(() => {
    const connectToWeb3 = async () => {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

          console.log('Connected to Ethereum :)');
          console.log('User Account (Address):', accounts[0]);

          setWeb3(window.web3);

          const contractAddress = '0x831f4b4116859eFe6Bd83284bf10D8e7D1220c9f';
          const contractAbi = [
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [],
                "name": "contribute",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalAmountRaised",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
            // ... (Añade otros métodos según sea necesario)
        ];

          const crowdfundingContract = new window.web3.eth.Contract(contractAbi, contractAddress);
          setContract(crowdfundingContract);
        } catch (error) {
          console.error('Error connecting to Ethereum:', error);
        }
      } else {
        console.error('MetaMask not detected!');
      }
    };

    connectToWeb3();
  }, [setWeb3, setContract]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contribute">Contribute</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Home Section</h2>} />
          <Route path="/contribute" element={<ContributionSection />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Web3Connector;
