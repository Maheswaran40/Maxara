import React, { useContext } from "react";
import maxara_logo from "../assets/images/maxara_logo.png";
import Mycontext from "../contextfile/Mycontext";

function Singup() {
  var {
    setUsername,
    setEmail,
    setPassword,
    userformFun,
    username,
    email,
    password,
  } = useContext(Mycontext);
  return (
    <>
      <div id="form-div">
        <div
          style={{
            height: "100%",
            width: "50%",
          }}
          className="form-sub-div1"
        >
                    <img src={maxara_logo} alt=""  />
        </div>
        {/* form div */}
        <div className="signup-page">
          <div className="signup-card">
            <h3 className="text-center">Let's go!</h3>
            <form className="form mt-4" onSubmit={userformFun}>
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="E-mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="submit" className="btn-submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Singup;
