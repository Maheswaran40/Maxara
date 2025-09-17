import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <br />

      <br />
      <br />
      <br />
      <br />
      <div id="footer">
        <div className="container px-4">
          <div className="row d-flex justify-content-between ">
            <div className="col-lg-2 col-md-4 col-sm-6 footer-sub-content-div">
              <div>
                <h1>Maxara</h1>
                <p id="footer-p">
                  <h4>The Greates Market...</h4>
                  Whether you're a trendsetter, a minimalist, or an adventurer
                  at heart, Maxara has something for everyone. Our diverse range
                  of styles caters to various personas.
                </p>
              </div>
            </div>
            {/* About us */}
            <div className="col-lg-2 col-md-4 col-sm-6 footer-sub-content-div">
              <div>
                <h3>
                  {" "}
                  <Link id="Link" to={"/about"} style={{ color: "black" }}>
                    About
                  </Link>
                </h3>
                <ul>
                  <li className="dropdown-item px-0">Our Story</li>
                  <li className="dropdown-item px-0">Missions & Values</li>
                  <li className="dropdown-item px-0">Mean and Team</li>
                  <li className="dropdown-item px-0">
                    Sustainability and Efforts
                  </li>
                  <li className="dropdown-item px-0">Brand Partnership</li>
                  <li className="dropdown-item px-0">
                    <Link id="Link" to={"/faq"} style={{ color: "black" }}>
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/*Accessibility */}

            <div className="col-lg-2 col-md-4 col-sm-6 footer-sub-content-div">
              <div>
                <h3>Accessibility</h3>
                <ul>
                  <li className="dropdown-item px-0">
                    Accessibility Statement
                  </li>
                  <li className="dropdown-item px-0">Site & Map</li>
                  <li className="dropdown-item px-0">
                    Web Accessibility Option
                  </li>
                  <li className="dropdown-item px-0">ADA Complaiance</li>
                  <li className="dropdown-item px-0">Privacy policy</li>
                </ul>
              </div>
            </div>
            {/* Community */}
            <div className="col-lg-2 col-md-4 col-sm-6 footer-sub-content-div">
              <div>
                <h3>Join Our Community</h3>
                <ul>
                  <li className="dropdown-item px-0">Vip Membership</li>
                  <li className="dropdown-item px-0">Loyality Program</li>
                  <li className="dropdown-item px-0">Customer Review</li>
                  <li className="dropdown-item px-0">Job Opening</li>
                  <li className="dropdown-item px-0">Style Forums</li>
                </ul>
              </div>
            </div>
            {/* signup */}
            <div className="col-lg-2 col-md-4 col-sm-6 footer-sub-content-div">
              <div>
                <h2>Let's Get In Touch</h2>
                <p>SignUp for our newsletter and receive 10% off your</p>
                <button id="footer-eamil-button" className="btn">
                  Enter your E-mail
                </button>
              </div>
            </div>
          </div>
          {/* copy rights */}
        </div>
      </div>
      <hr style={{ margin: "0px 0px 10px 0px " }} />
      <div className="container">&copy; 2025 Maxara All rights recived</div>
    </>
  );
}

export default Footer;
