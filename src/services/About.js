// src/services/About.js - CRA compatible

const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/about";

export const getAboutData = async () => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000); // 12 sec


    const response = await fetch(API_URL, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching About data:", error);

    // ✅ FALLBACK DATA (frontend never crashes)
    return {
      name: "Neha Raghav",
      role: "Software Developer",
      location: "New Delhi",
      description: "Passionate about building modern web applications."
    };
  }
};
