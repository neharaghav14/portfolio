// src/services/About.js
const API_URL = "http://10.186.142.190:5000/about"; // tumhara IPv4

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
