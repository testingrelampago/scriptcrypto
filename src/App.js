import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContributionSection from './components/ContributionSection';
import FundraisingInfo from './components/FundraisingInfo';
import ContributeForm from './components/ContributeForm';
import HomeSection from './components/HomeSection';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/contribute" element={<ContributionSection />} />
          <Route path="/fundraising-info" element={<FundraisingInfo />} />
          <Route path="/contribute-form" element={<ContributeForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
