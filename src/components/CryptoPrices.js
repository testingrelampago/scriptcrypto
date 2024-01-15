import React, { useState, useEffect } from 'react';

const CryptoPrices = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [dogecoinPrice, setDogecoinPrice] = useState(null);

  useEffect(() => {
    // Function to fetch real-time cryptocurrency prices
    const fetchCryptoPrices = async () => {
      try {
        // Fetch Bitcoin price
        const bitcoinResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const bitcoinData = await bitcoinResponse.json();
        setBitcoinPrice(bitcoinData.bitcoin.usd);

        // Fetch Dogecoin price
        const dogecoinResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd');
        const dogecoinData = await dogecoinResponse.json();
        setDogecoinPrice(dogecoinData.dogecoin.usd);
      } catch (error) {
        console.error('Error fetching cryptocurrency prices:', error);
      }
    };

    // Fetch prices initially
    fetchCryptoPrices();

    // Set up interval to fetch prices every 5 minutes (adjust as needed)
    const intervalId = setInterval(fetchCryptoPrices, 5 * 60 * 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mt-5">
        <div className="jumbotron">
            <h2 className="display-4">Crypto Prices</h2>
            <p className="lead">(We are using the free version of api.coingecko.com :) wait and reload the web to get the prices)</p>
            <p className="lead">Bitcoin Price: {bitcoinPrice ? `$${bitcoinPrice}` : 'Loading...'}</p>
            <p className="lead">Dogecoin Price: {dogecoinPrice ? `$${dogecoinPrice}` : 'Loading...'}</p>
        </div>
    </div>
  );
};

export default CryptoPrices;
