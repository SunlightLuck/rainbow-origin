import axios from "axios";
import { setAuthToken } from "./setAuthToken";

export const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_WEB3_API_PREFIX || "http://localhost:5002/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      setAuthToken(null);
    }
    return Promise.reject(err);
  }
);

// Api v1 Collection
// Get current user with auth token
export const getCurrentUser = async () => {
  try {
    const { data } = await api.get("/auth/me");

    return data;
  } catch (error) {
    console.error("Error in getting user info: ", error);
    return null;
  }
};

export const requestMessage = async (walletAddress: string) => {
  try {
    const { data } = await api.post("/auth/request-message", { walletAddress });

    return data.message;
  } catch (error) {
    console.error("Error in requesting a message: ", error);
    return null;
  }
};

export const verifySignature = async (
  walletAddress: string,
  signature: string
) => {
  try {
    const { data } = await api.post("/auth/verify-signature", {
      walletAddress,
      signature,
    });

    if (data.success) {
      return data.token;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error in verifying the signature: ", error);
    return null;
  }
};
