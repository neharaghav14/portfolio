// src/services/About.js
const API_URL = "http://localhost:5000/about";

export const getAboutData = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching About data:", error);
    return null;
  }
};
