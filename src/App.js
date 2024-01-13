import React, { useState } from 'react';
import Web3Connector from './components/Web3Connector';
import CrowdfundingContract from './components/CrowdfundingContract';
import FundraisingInfo from './components/FundraisingInfo';
import ContributeForm from './components/ContributeForm';

function App() {
    const [web3, setWeb3] = useState(null);
    const [contract, setContract] = useState(null);

    return (
        <div className="App">
            <Web3Connector setWeb3={setWeb3} setContract={setContract} />
            {web3 && <CrowdfundingContract web3={web3} setContract={setContract} />}
            {contract && <FundraisingInfo contract={contract} />}
            {contract && <ContributeForm contract={contract} />}
        </div>
    );
}

export default App;
