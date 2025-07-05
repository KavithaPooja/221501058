import React from 'react';
import UrlInputForm from '../components/UrlInputForm';
import '../App.css';

const ShortenerPage = () => {
  const handleShorten = (data) => {
    console.log('Shortening data:', data);
  };

  return (
    <div className="container">
      <h2>URL Shortener</h2>
      <UrlInputForm onSubmit={handleShorten} />
    </div>
  );
};

export default ShortenerPage;
