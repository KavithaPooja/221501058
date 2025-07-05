import React, { useState } from 'react';
import '../App.css';

const UrlInputForm = ({ onSubmit }) => {
  const [url, setUrl] = useState('');
  const [validity, setValidity] = useState(30);
  const [shortcode, setShortcode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ url, validity, shortcode });
    setUrl('');
    setValidity(30);
    setShortcode('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>URL to Shorten:</label>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        placeholder="https://example.com"
      />

      <label>Validity (minutes):</label>
      <input
        type="number"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
        min="1"
      />

      <label>Custom Shortcode (optional):</label>
      <input
        type="text"
        value={shortcode}
        onChange={(e) => setShortcode(e.target.value)}
        placeholder="e.g. mycode123"
      />

      <button type="submit">Shorten</button>
    </form>
  );
};

export default UrlInputForm;
