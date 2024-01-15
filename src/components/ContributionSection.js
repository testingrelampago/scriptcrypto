import React, { useState, useEffect, useCallback } from 'react';
import Web3 from 'web3';
import contractConfig from './../contractConfig';

const ContributionSection = () => {
  const [contract, setContract] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    const connectToWeb3 = async () => {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
          const accs = await window.ethereum.request({ method: 'eth_requestAccounts' });

          console.log('Connected to Ethereum :)');
          console.log('User Account (Address):', accs[0]);

          setAccounts(accs);
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
  }, []);

  const [contributionAmount, setContributionAmount] = useState('1');
  const [totalAmountRaised, setTotalAmountRaised] = useState(0);

  // Función para obtener y actualizar la información del contrato
  const updateContractInformation = useCallback(async () => {
    try {
      // Llamar a los métodos del contrato para obtener información actualizada
      if (contract) {
        const totalRaised = await contract.methods.totalAmountRaised().call();
        setTotalAmountRaised(web3.utils.fromWei(totalRaised, 'ether'));
      }
    } catch (error) {
      console.error('Error updating contract information:', error);
    }
  }, [contract, web3]);

  // UseEffect for calling to the function after the contribution
  useEffect(() => {
    updateContractInformation();
  }, [contract, updateContractInformation]);

  const handleContribution = async () => {
    try {
      if (contract) {
        
        console.log('Selected Account:', accounts[0]);

        await contract.methods.contribute().send({
          from: accounts[0],
          value: web3.utils.toWei(contributionAmount, 'ether'),
        });

        updateContractInformation();
      }
    } catch (error) {
      console.error('Error contributing to the smart contract:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Contribution Section</h2>
      <label>
        Amount (ETH):
        <input
          type="number"
          value={contributionAmount}
          onChange={(e) => setContributionAmount(e.target.value)}
        />
      </label>
      <button onClick={handleContribution}>Contribute</button>

      {/* Mostrar información actualizada del contrato */}
      <div>
        <h3>Fundraising Information</h3>
        <p>Total Amount Raised: {totalAmountRaised} ETH</p>
      </div>
    </div>
  );
};

export default ContributionSection;
