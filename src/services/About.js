const API_URL = "http://localhost:5000/about";

export const getAboutData = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error("Error fetching About data:", error);
    return null;
  }
};
