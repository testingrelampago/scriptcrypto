import React, { useState } from 'react';

import Web3 from 'web3';
const web3 = new Web3();

const ContributionSection = ({ contract, accounts }) => {
  const [contributionAmount, setContributionAmount] = useState('1');

  const handleContribution = async () => {
    try {
      await contract.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(contributionAmount, 'ether'),
      });

      // Update contract information after contribution
      // Fetch and display the updated contract information
    } catch (error) {
      console.error('Error contributing to the smart contract:', error);
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default ContributionSection;
