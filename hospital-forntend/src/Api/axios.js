// Utils/Api.js
import Axios from "axios";
// import { useNavigate } from "react-router-dom";

const baseURL = "http://localhost:3001/api";

const axios = Axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

async function postAPI(url, payload, headers = {}) {
  try {
    const response = await axios.post(url, payload, { headers });

    if ((response.status = 200)) {
      return {
        message: response.data.message,
        hasError: response.data.hasError,
        data: response.data,
      };
    }
  } catch (error) {
    console.error("Error during Api request:", error);

    throw error;
  }
}

export const isAuthenticated = () => {
  const userInfo = localStorage.getItem("userInfo");
  return userInfo !== null;
};

export const handleUnauthorized = (navigate) => {
  navigate("/login");
};

export default postAPI;
