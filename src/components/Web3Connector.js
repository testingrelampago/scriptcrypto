import React, { useEffect } from 'react';
import Web3 from 'web3';

const Web3Connector = ({ setWeb3 }) => {
    useEffect(() => {
        const connectToWeb3 = async () => {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                try {
                    await window.ethereum.enable();
                    console.log('Connected to Ethereum');
                    setWeb3(window.web3);
                } catch (error) {
                    console.error('Error connecting to Ethereum:', error);
                }
            } else {
                console.error('MetaMask not detected!');
            }
        };

        connectToWeb3();
    }, [setWeb3]);

    return <div></div>;
};

export default Web3Connector;
