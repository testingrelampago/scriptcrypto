import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContributionSection from './ContributionSection';

import Web3 from 'web3';
const web3 = new Web3();

const Web3Connector = ({ setWeb3, setContract }) => {
  useEffect(() => {
    const connectToWeb3 = async () => {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          const accounts = await window.web3.eth.getAccounts();

          console.log('Connected to Ethereum');
          console.log('User Account:', accounts[0]);

          setWeb3(window.web3);

          const contractAddress = '0x46cD9652AdF68f1d5025eB988649419F8a60D237';
          const contractAbi = [/* ... */];

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
