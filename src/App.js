import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ContributionSection from './components/ContributionSection';
import HomeSection from './components/HomeSection';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navigation Menu */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contribute">Contribute</Link>
            </li>
          </ul>
        </nav>

        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/contribute" element={<ContributionSection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
