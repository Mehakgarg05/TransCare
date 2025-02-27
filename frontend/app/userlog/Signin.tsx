"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";  
import { signIn } from "../api";  

const Signin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const router = useRouter();  // ✅ Initialize router

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("Signing in..."); // Show loading message

    try {
      const result = await signIn(form);
      console.log("API Response:", result); // ✅ Debug API response

      if (result.error) {
        setMessage(result.error);
      } else {
        setMessage(`Welcome, ${result.user.name}!`);
        localStorage.setItem("token", result.token);
        
        console.log("Redirecting to homepage..."); // ✅ Debug redirect
        router.push("/"); // Redirect to homepage
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Sign In</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Signin;
