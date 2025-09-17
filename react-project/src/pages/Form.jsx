import React, { useContext } from "react";
import Mycontext from "../contextfile/Mycontext";
import { Link } from "react-router-dom";
import maxara_logo from "../assets/images/maxara_logo.png";


function Form() {
  var{setLoginName,
    setLoginPassword,getUser,loginName,loginPassword}=useContext(Mycontext)
  // const navigate=useNavigate()
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
        <div className="login-wrapper">
          <div className="login-card">
            {/* Left Section - Form */}
            <div className="login-form">
              <h2 className="title">Welcome Back</h2>
              <p className="subtitle">Login to continue shopping with MAXARA</p>

              <form onSubmit={getUser}>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input"
                  value={loginName}
                  onChange={(e)=>setLoginName(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="form-input"
                  value={loginPassword}
                  onChange={(e)=>setLoginPassword(e.target.value)}

                />
                <button type="submit" className="btn-primary">
                  Login
                </button>
              </form>

              <p className="signup-text">
                No account?{" "}
                <Link to="/singup" className="signup-link">
                  Create one
                </Link>
              </p>
              <div className="login-benefits">
              <h3>It’s better when you’re signed Up</h3>
              <ul>
                <li>🎯 Exclusive Deals & Offers</li>
                <li>⚡ Faster Checkout & Easy Returns</li>
                <li>🏆 Rewards & Personalized Experience</li>
              </ul>
            </div>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
