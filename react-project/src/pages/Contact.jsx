import React from 'react'
import "../index.css"

function Contact() {
  return (
    <>
    <div id="contact-content" className="container">
        <center>
          <h1 style={{color:"blue"}}>Contact Us</h1>
        </center>
        <br />
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 my-2 ">
            <div className="card border-0">
              <center>
                <i
                  className="fa-solid fa-location-dot fa-4x pt-3"
                ></i>
              </center>
              <div className="card-body">
                <center>
                  <h3 style={{ color: "blue" }}>Address</h3>
                  <p>
                    PO Box 16122 Collins Street West Victoria 8007 Australia
                  </p>
                </center>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-2 ">
            <div className="card border-0">
              <center>
                <i
                  className="fa-solid fa-phone fa-4x pt-3"
                ></i>
              </center>
              <div className="card-body">
                <center>
                  <h3 style={{ color: "blue" }}>Phone</h3>
                  <p>
                    Open a chat or give us call at <br />
                    +61 3 8376 6284
                  </p>
                </center>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-2 ">
            <div className="card border-0">
              <center>
                <i
                  className="fa-solid fa-envelope fa-4x pt-3"
                ></i>
              </center>
              <div className="card-body">
                <center>
                  <h3 style={{ color: "blue" }}>Mail</h3>
                  <p>
                    Sent mail to <br />
                    support@maxara.com
                  </p>
                </center>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 my-2 ">
            <div className="card border-0">
              <center>
                <i
                  className="fa-solid fa-globe fa-4x pt-3"
                ></i>
              </center>
              <div className="card-body">
                <center>
                  <h3 style={{ color: "blue" }}>Live connection</h3>
                  <p>
                    Live chat service <br />
                    https://www.livechat.com
                  </p>
                </center>
              </div>
            </div>
          </div>
        </div>
        {/* map location */}

        <div className="row">
            <h2>Get in Touch</h2>
          <div className="col-lg-6 col-sm-12 d-flex flex-column ">
              <input className="py-3 my-2" type="text" placeholder="Name" />
              <input className="py-3 my-2" type="email" placeholder="email" />
              <input className="py-3 my-2" type="text" placeholder="subject" />
              <input className="py-3 my-2" type="text" placeholder="Your Message" /><br />
              <button className="btn btn-dark">Send Message </button>
          </div>
          <div className="col-lg-6 col-sm-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.696701121622!2d144.9438463867357!3d-37.820572599710616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5a3ff30273%3A0x55700729bcaebb85!2s16122%20Collins%20St%2C%20West%20Melbourne%20VIC%203008%2C%20Australia!5e0!3m2!1sen!2sin!4v1733587516525!5m2!1sen!2sin"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact