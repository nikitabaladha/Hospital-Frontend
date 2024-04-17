// Api / axiosGet.js;

import Axios from "axios";

const baseURL = "http://localhost:3001/api";

const axios = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

async function getAPI(url, headers = {}) {
  try {
    const response = await axios.get(url, { headers });

    if (response.status === 200) {
      return {
        message: response.data.message,
        hasError: response.data.hasError,
        data: response.data,
      };
    }
  } catch (error) {
    console.error("Error during API request:", error);
    throw error;
  }
}

export default getAPI;
