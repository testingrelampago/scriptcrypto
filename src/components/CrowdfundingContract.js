import React, { useEffect, useState } from 'react';

const CrowdfundingContract = ({ web3, contract }) => {
    const [owner, setOwner] = useState('');
    const [totalAmountRaised, setTotalAmountRaised] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Get owner address
                const contractOwner = await contract.methods.owner().call();
                setOwner(contractOwner);

                // Get total amount raised
                const totalRaised = await contract.methods.totalAmountRaised().call();
                setTotalAmountRaised(totalRaised);
            } catch (error) {
                console.error('Error fetching data from the smart contract:', error);
            }
        };

        if (web3 && contract) {
            fetchData();
        }
    }, [web3, contract]);

    return (
        <div>
            <h2>Smart Contract Information</h2>
            <p>Owner: {owner}</p>
            <p>Total Amount Raised: {totalAmountRaised} ETH</p>
        </div>
    );
};

export default CrowdfundingContract;
