
import logger from "../middleware/loggerMiddleware";

const API_BASE = "http://localhost:5000";

export const createShortURL = async (data) => {
  logger("Creating short URL...", data);

  try {
    const res = await fetch(`${API_BASE}/shorturls`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    logger("Short URL created successfully", result);
    return result;
  } catch (error) {
    logger("Error creating short URL", error);
    throw error;
  }
};

export const getURLStats = async (shortcode) => {
  logger("Fetching stats for shortcode", { shortcode });

  try {
    const res = await fetch(`${API_BASE}/shorturls/${shortcode}/stats`);
    const result = await res.json();
    logger("Stats fetched successfully", result);
    return result;
  } catch (error) {
    logger("Error fetching stats", error);
    throw error;
  }
};
