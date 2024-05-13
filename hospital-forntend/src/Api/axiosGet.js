// Api/axiosGet.js

import Axios from "axios";

const baseURL = "http://localhost:3001/api";

const axios = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getAPI = async (url, headers = {}) => {
  try {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));

    if (!accessToken) {
      throw new Error("Access token not found");
    }
    const response = await axios.get(url, {
      headers: {
        access_token: accessToken,
      },
    });

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
};

export default getAPI;
