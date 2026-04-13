import React, { useState } from "react";

function Login({ setLoggedIn }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if(email === "student@gmail.com" && password === "1234"){
        setLoggedIn(true);
    } else {
        alert("Invalid credentials");
    }
  };

  return (
    <div className="login">

      <div className="loginCard">
        <h2>Smart Study Planner</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p>Email: student@gmail.com</p>
        <p>Password: 1234</p>

      </div>

    </div>
  );
}

export default Login;