import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";
// import { useHistory } from "react-router-dom";

function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [create, setCreate] = useState(false);
  // const history = useHistory();

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://127.0.0.1:5151/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await response.json();
    // console.log(data);
    if (data.status === "ok") {
      toast.success("login successfull!", { autoClose: 2000 });
      // history.pushState;
      setTimeout(() => {
        setCreate(true);
        console.log(create);

        console.log(data);
      }, 3000);
    }
  }

  return (
    <div className="registerForm" id="registerform">
      <h1>Register Form</h1>
      <form className="formContainer" onSubmit={registerUser}>
        <fieldset>
          <legend>Name</legend>
          <input
            type="text"
            value={name}
            className="inputFeild"
            onChange={(e) => setname(e.target.value)}
            placeholder="Name"
          />
        </fieldset>
        <br />
        <fieldset>
          <legend>E-mail</legend>
          <input
            type="email"
            value={email}
            className="inputFeild"
            onChange={(e) => setemail(e.target.value)}
            placeholder="Email"
          />
        </fieldset>
        <br />
        <fieldset>
          <legend>Password</legend>
          <input
            type="password"
            value={password}
            className="inputFeild"
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Password"
          />
        </fieldset>
        <br />
        <div className="buttons">
          <button type="submit" value="register" className="registerSubmitbtn">
            Register
          </button>
          <a href="/">Login</a>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Register;
