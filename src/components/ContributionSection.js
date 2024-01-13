import React, { useState, useEffect, useCallback } from 'react';

import Web3 from 'web3';
const web3 = new Web3();

const ContributionSection = ({ contract, accounts }) => {
  const [contributionAmount, setContributionAmount] = useState('1');
  const [totalAmountRaised, setTotalAmountRaised] = useState(0);

  // Función para obtener y actualizar la información del contrato
  const updateContractInformation = useCallback(async () => {
    try {
      // Llamar a los métodos del contrato para obtener información actualizada
      const totalRaised = await contract.methods.totalAmountRaised().call();
      setTotalAmountRaised(web3.utils.fromWei(totalRaised, 'ether'));
    } catch (error) {
      console.error('Error updating contract information:', error);
    }
  }, [contract]);

  // UseEffect para llamar a la función de actualización después de cada contribución
  useEffect(() => {
    updateContractInformation();
  }, [contract, updateContractInformation]); // Se ejecutará cada vez que el contrato cambie

  const handleContribution = async () => {
    try {
      await contract.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(contributionAmount, 'ether'),
      });

      // Después de la contribución, llamar a la función de actualización
      updateContractInformation();

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

      {/* Mostrar información actualizada del contrato */}
      <div>
        <h3>Fundraising Information</h3>
        <p>Total Amount Raised: {totalAmountRaised} ETH</p>
      </div>
    </div>
  );
};

export default ContributionSection;
