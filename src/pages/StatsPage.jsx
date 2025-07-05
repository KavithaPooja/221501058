import React, { useEffect, useState } from "react";

const StatsPage = () => {
  const [stats, setStats] = useState([]);
//I Used Dummy Data to simulate the stats page
  useEffect(() => {
    const dummyStats = [
      {
        shortLink: "http://localhost:8000/abc12",
        originalUrl: "https://google.com",
        clicks: 5,
        expiry: "2025-12-31T23:59:59.000Z",
      },
      {
        shortLink: "http://localhost:8000/xyz34",
        originalUrl: "https://github.com",
        clicks: 2,
        expiry: "2025-11-01T12:00:00.000Z",
      },
    ];

    // It will simulate delay
    setTimeout(() => {
      setStats(dummyStats);
    }, 500);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📊 URL Statistics</h2>
      {stats.length === 0 ? (
        <p>No stats to show. Try shortening a URL first.</p>
      ) : (
        <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Short URL</th>
              <th>Original URL</th>
              <th>Clicks</th>
              <th>Expiry</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((item, index) => (
              <tr key={index}>
                <td><a href={item.shortLink} target="_blank" rel="noreferrer">{item.shortLink}</a></td>
                <td>{item.originalUrl}</td>
                <td>{item.clicks}</td>
                <td>{new Date(item.expiry).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StatsPage;
