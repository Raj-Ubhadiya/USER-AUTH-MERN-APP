import React, { useState } from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [islogin, setIslogin] = useState(false);
  const [signupform, setSignupform] = useState(false);
  const handleSignupform = () => {
    setSignupform(!signupform);
  };

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("http://127.0.0.1:5151/api/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);
    if (data.status === "ok") {
      toast.success("login successfull!", { autoClose: 2000 });
      // window.location.href='/dashboard'
      setTimeout(() => {
        setIslogin(true || !islogin);
        setSignupform(true);

      }, 3000);
    } else {
      toast.error("Invalid Credential!", { autoClose: 2000 });
    }
  }
  return (
    <div className="loginForm" id="loginform">
      <h1>Login Form</h1>
      <form className="formContainer" onSubmit={loginUser}>
        <fieldset className="emailField">
          <legend>E-mail</legend>
          <input
            type="email"
            value={email}
            className="emailField"
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email"
            required
          />
        </fieldset>
        <br />
        <fieldset className="passwordField">
          <legend>Password</legend>
          <input
            type="password"
            value={password}
            className="passwordField"
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Password"
            required

          />{" "}
        </fieldset>
        <br />
        <button type="submit" value="login" className="loginButton">
          login
        </button>
        <p>
          you have not account?
          <span>
            <a href="registerform" onClick={() => handleSignupform(true)}>
              Sign-up
            </a>
          </span>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
