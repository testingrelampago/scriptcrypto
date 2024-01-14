import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContributionSection from './ContributionSection';
import contractConfig from './../contractConfig'; // Importa el archivo de configuración

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

          const crowdfundingContract = new window.web3.eth.Contract(
            contractConfig.contractAbi,
            contractConfig.contractAddress
          );

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
