import React, { useEffect, useState } from 'react';

const FundraisingInfo = ({ contract }) => {
    const [totalAmountRaised, setTotalAmountRaised] = useState(0);

    useEffect(() => {
        if (contract) {
            contract.methods.getTotalAmountRaised().call()
                .then(result => {
                    setTotalAmountRaised(result);
                })
                .catch(error => {
                    console.error('Error getting total amount raised:', error);
                });
        }
    }, [contract]);

    return (
        <div>
            <h2>Fundraising Information</h2>
            <p>Total Amount Raised: <span className="font-weight-bold">{totalAmountRaised} ETH</span></p>
        </div>
    );
};

export default FundraisingInfo;
