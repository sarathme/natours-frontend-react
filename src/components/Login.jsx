import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

function Login() {
  const [email, setEmail] = useState("admin@natours.io");
  const [password, setPassword] = useState("pass1234");
  const { login, isLoggingIn } = useLogin();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    console.log("here");
    login(
      { email, password },
      {
        onSuccess: (data) => {
          localStorage.setItem(data.token);
          navigate(-1);
        },
      }
    );

    setEmail("");
    setPassword("");

    // console.log(res.data);
  }

  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
        <form className="form form--login" onSubmit={handleSubmit}>
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email address
            </label>
            <input
              className="form__input"
              id="email"
              type="email"
              placeholder="you@example.com"
              required="required"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoggingIn}
            />
          </div>
          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="password">
              Password
            </label>
            <input
              className="form__input"
              id="password"
              type="password"
              placeholder="••••••••"
              required="required"
              minLength="8"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoggingIn}
            />
          </div>
          <div className="form__group">
            <button className="btn btn--green" disabled={isLoggingIn}>
              {isLoggingIn ? "..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
