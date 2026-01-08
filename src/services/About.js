const API_URL = process.env.REACT_APP_API_URL;

export const getAboutData = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch about data");
  }

  return response.json();
};
