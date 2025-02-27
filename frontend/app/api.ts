import axios from "axios";

// Use environment variable for API base URL
const API = axios.create({ 
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/auth"
});

export const signUp = async (userData: { name: string; email: string; password: string }) => {
  try {
    const response = await API.post("/signup", userData);
    return response.data;
  } catch (error: any) {
    return { error: error.response?.data?.message || "Signup failed" };
  }
};

export const signIn = async (userData: { email: string; password: string }) => {
  try {
    const response = await API.post("/signin", userData);
    return response.data;
  } catch (error: any) {
    return { error: error.response?.data?.message || "Login failed" };
  }
};
