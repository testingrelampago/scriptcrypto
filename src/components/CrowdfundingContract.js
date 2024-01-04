import React, { useEffect, useState } from 'react';

const CrowdfundingContract = ({ web3, setContract }) => {
    const [contract, setContract] = useState(null);

    useEffect(() => {
        const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your smart contract address
        const abi = [/* Paste your contract ABI here */];
        const crowdfundingContract = new web3.eth.Contract(abi, contractAddress);
        setContract(crowdfundingContract);
    }, [web3, setContract]);

    return <div></div>;
};

export default CrowdfundingContract;
