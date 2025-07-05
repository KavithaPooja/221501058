import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const RedirectPage = () => {
  const { shortcode } = useParams();

  useEffect(() => {
    window.location.href = `http://localhost:5000/${shortcode}`;
  }, [shortcode]);

  return <p>Redirecting...</p>;
};

export default RedirectPage;
