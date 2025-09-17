import React, { useContext } from "react";
import Mycontext from "../contextfile/Mycontext";
import designer1 from "../assets/images/fashon-designer.webp"
import designer2 from "../assets/images/fashon-designer-2.jpg"
import designer3 from "../assets/images/fashon-designer-3.jpg"
import designer4 from "../assets/images/fashon-designer-4.webp"
function About() {
  var { aboutFun, storyFun, connectFun, missionFun, activeTab } =
    useContext(Mycontext);
  return (
    <>
      <div id="about">
        <div
          className="bg-dark d-flex position-relative justify-content-center align-items-center"
          style={{ height: "200px" }}
        >
          <h1 className="container text-white text-center">
            Discover the Spirit of Sportswear : Where Every Fabric Fuels Performance and Every Outfit Defines Your Game.
          </h1>
        </div>
        <br />
        <div className="container ">
          <div className="row" id="about-button-div">
            <div className="col-lg-3 col-md-6 col-sm -6">
            <button className="border-0 bg-white" onClick={aboutFun} style={{color:activeTab.type ==="about" ? "#E52020":"gray"}}>
              About Maxara
            </button>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
            <button className="border-0 bg-white " onClick={storyFun}  style={{color:activeTab.type ==="story" ?"#E52020":"gray"}}  >
              Our Story
            </button>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
            <button className="border-0 bg-white " onClick={missionFun}  style={{color:activeTab.type === "mission" ?"#E52020":"gray"}}>
              Our Mission
            </button>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
            <button className="border-0 bg-white " onClick={connectFun}  style={{color:activeTab.type==="connection" ? "#E52020ed":"gray"}}>
              Connect with Us
            </button>
            </div>
          </div>
          <hr />
          <div id="about-content-div" className="row">
            {activeTab.img ? (
              <div className="col-lg-6">
                <img
                  src={activeTab.img}
                  alt=""
                  height="350"
                  width="100%"
                  style={{ margin: "10px" }}
                />{/* if content has img this style apply with ternery operator*/} 
              </div>
            ) : null}
            <div className={activeTab.img ? "col-lg-6 col-sm-12" : "col-lg-12"}>
              <div
                style={
                  !activeTab.img ? undefined:{ width: "100%", height: "400px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" } 
                }
              >
                
                {activeTab.type === "about" ? (
                  <h1>{activeTab.title}</h1>
                ) : (
                  <p>{activeTab.title}</p>
                )}
                {activeTab.desc ? <p>{activeTab.desc}</p> : null}
              </div>
            </div>
            <div className="container">
              <div className="container px-3">
                {activeTab.heading ? <h1>{activeTab.heading}</h1>: null}
                {activeTab.conlist ? <div className="container"><ul>
                  <li>{activeTab.conlist.li1}</li>
                  <li>{activeTab.conlist.li2}</li>
                  <li>{activeTab.conlist.li3}</li>
                </ul></div>:null}
              <p>{activeTab.p1}</p>
            <p>{activeTab.p2}</p>
              </div>
            </div>
          </div>
        </div>
        {/* team imgage */}
        <div className="container">
          <h1 style={{textAlign:"center"}}>Meet Our Team</h1>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12"><img className="my-4" src={designer1} alt="" height="300" width="100%" /><center><h4>Emily Watson</h4><span>Cheif Excicutive Designer</span></center></div>
            <div className="col-lg-3 col-md-6 col-sm-12"><img className="my-4" src={designer2} alt="" height="300" width="100%"/><center><h4>Ishu Sendrela</h4><span>Production Manager</span></center></div>
            <div className="col-lg-3 col-md-6 col-sm-12"><img className="my-4" src={designer3} alt="" height="300" width="100%" /><center><h4>Jhon Barath</h4><span>Senior Designer</span></center></div>
            <div className="col-lg-3 col-md-6 col-sm-12"><img className="my-4" src={designer4} alt="" height="300" width="100%"/><center><h4>Sophia Leone</h4><span>Human Resources</span></center></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
