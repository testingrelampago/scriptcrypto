import React, { useState } from 'react';

const ContributeForm = ({ contract }) => {
    const [contributionAmount, setContributionAmount] = useState('');

    const contribute = async () => {
        try {
            const accounts = await window.web3.eth.getAccounts();
            const result = await contract.methods.contribute().send({
                from: accounts[0],
                value: window.web3.utils.toWei(contributionAmount, 'ether')
            });

            console.log('Contribution successful. Transaction Hash:', result.transactionHash);
        } catch (error) {
            console.error('Error contributing to fundraising:', error);
        }
    };

    return (
        <div>
            <h2>Contribute to Fundraising</h2>
            <div>
                <label htmlFor="contribution-amount">Contribution Amount (ETH):</label>
                <input
                    type="number"
                    id="contribution-amount"
                    value={contributionAmount}
                    onChange={(e) => setContributionAmount(e.target.value)}
                    step="0.01"
                    min="0"
                    required
                />
            </div>
            <button onClick={contribute}>Contribute</button>
        </div>
    );
};

export default ContributeForm;
