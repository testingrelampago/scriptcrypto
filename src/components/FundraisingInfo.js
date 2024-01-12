import React, { useEffect, useState } from 'react';

const FundraisingInfo = ({ contract }) => {
    const [totalAmountRaised, setTotalAmountRaised] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Get total amount raised
                const totalRaised = await contract.methods.totalAmountRaised().call();
                setTotalAmountRaised(totalRaised);
            } catch (error) {
                console.error('Error fetching fundraising data from the smart contract:', error);
            }
        };

        if (contract) {
            fetchData();
        }
    }, [contract]);

    return (
        <div>
            <h2>Fundraising Information</h2>
            <p>Total Amount Raised: {totalAmountRaised} ETH</p>
        </div>
    );
};

export default FundraisingInfo;
