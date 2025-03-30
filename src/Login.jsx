import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passWord, setpassWord] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:7777/login",
        {
          email,
          passWord,
        },
        { withCredentials: true }
      );

      dispatch(addUser(res.data));
      return navigate("/"); // Redirect to the home page after successful login
    } catch (error) {
      console.log("Login failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center my-10">
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email ID</legend>
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">passWord</legend>
              <input
                type="passWord" // Use "passWord" instead of "text"
                className="input"
                value={passWord}
                onChange={(e) => setpassWord(e.target.value)}
              />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
