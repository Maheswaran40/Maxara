import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Mycontext from "../contextfile/Mycontext";
import GlareHover from "../GlareHover";

function New_arrivals() {
  const navigate = useNavigate();
  var { likeFun, list, cartFun, productList, pro3setSelectedId } = useContext(Mycontext);

  return (
    <>
      <div className="container">
        {/* container start */}
        <h3>New Arrivals</h3>
        <br />

        <div className="row">
          {/* new alrivals mapping start*/}
          {productList
            .filter((value) => value.category === "newarrival")
            .map((value, index) => {
              // Find hover image for this product (same name but with category = "hover")
              const hoverImage = productList.find(
                (img) =>
                  img.category === "hover" &&
                  img.name.replace(" hover", "") === value.name
              );
              return (
                <div
                  className="col-lg-3 col-6 shoe-card"
                  style={{ height: "300px", cursor: "pointer" }}
                  key={index}
                >
                  <div
                    id="shoe-card"
                    className="card my-lg-2 my-1"
                    height="200px"
                    style={{ cursor: "pointer" }}
                  >
                    {/* like icon */}
                    <div className="card-nav-icon">
                      <span
                        onClick={() => likeFun(value._id)}
                        style={
                          list.some((item) => item._id === value._id)
                            ? { color: "white", backgroundColor: "#E52020" }
                            : { color: "blue" }
                        }
                      >
                        <i className="fa-regular fa-heart"></i>
                      </span>
                    </div>
                    {/* card body */}
                    <div className="card-body d-flex align-items-center justify-content-center shoe-img-wrapper">
                      <img
                        src={value.url}
                        alt="images"
                        className="shoe-img front"
                        onClick={() => navigate(`/shop/${value._id}`)}
                      />
                      {/* Hover image */}
                      <img
                        src={hoverImage?.url || value.url} // fallback to main image
                        alt={`${value.name} hover`}
                        className="shoe-img back"
                        onClick={() => navigate(`/shop/${value._id}`)}
                      />
                    </div>
                    {/* card footer */}
                    <div
                      className="card-footer d-flex justify-content-start flex-column"
                      id="shoe-card-main-footer"
                    >
                      <div id="shoe-card-footer">
                        <span id="shoe-card-footer-p" style={{ color: "blue" }}>
                          Name :
                        </span>
                        {value.name}
                      </div>
                      <div
                        style={{
                          fontSize: "small",
                          display: "flex",
                          alignItems: "center",
                          width: "150px",
                        }}
                      >
                        <span style={{ color: "blue" }}></span>
                        <b
                          style={{ fontSize: "15px" }}
                        >{`₹ ${value.price.toLocaleString("en-IN")}`}</b>
                        <div
                          style={{
                            width: "80px",
                            justifyContent: "space-between",
                            display: "flex",
                            marginLeft: "10px",
                          }}
                        >
                          <b>
                            <span style={{ textDecoration: "line-through" }}>
                              ₹{value.dashprice.toLocaleString("en-IN")}
                            </span>
                          </b>
                          <span
                            style={
                              parseInt(value.offer) >= 35
                                ? { backgroundColor: "red", color: "white" }
                                : { backgroundColor: "yellow" }
                            }
                          >
                            {value.offer}&nbsp;off
                          </span>
                        </div>
                      </div>

                      <button
                        id="shoe-cart-button"
                        onClick={() => cartFun(value._id)}
                      >
                        <div style={{ height: "25px", position: "relative" }}>
                          <GlareHover
                            glareColor="#2a2ad3"
                            glareOpacity={0.8}
                            glareAngle={-30}
                            glareSize={300}
                            transitionDuration={800}
                            playOnce={false}
                          >
                            Add to cart
                          </GlareHover>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {/* new alrivals mapping end*/}
        <br />
        <br />

        {/* top brands swiper start */}
        <div>
            <h3>Popular Brands</h3>
        </div>
        <br />
        <div>
          <Swiper
            id="brandswpier"
            spaceBetween={10}
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 2000 }}
            breakpoints={{
              320: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 8 },
            }}
            loop
          >
            {productList.filter((value)=> value.folder==="brandlogo").map((value) => (
              <SwiperSlide>
                <div>
                  <img 
                  id="brandlogo"
                    src={value.url}
                    alt="iamge"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* top brands swiper end */}
      </div>
      {/* container end*/}
      <br />
      <br />

      {/* budget sport shopping */}

      <br />
      <div className="container ">
      <h3>Budget Sport Shopping</h3><br />
        <div style={{ overflow: "hidden", width: "100%" }}>
          <Swiper
            id="brandswpier"
            spaceBetween={10}
            modules={[Navigation, Autoplay, Pagination]}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            loop
          >
            {productList
              .filter(
                (value) =>
                  value.category === "budget sport shopping" &&
                  value.folder === "homepage"
              ) .sort((a, b) => {
              const numA = parseInt(a.name.match(/\d+/)?.[0] || 0);
              const numB = parseInt(b.name.match(/\d+/)?.[0] || 0);
              return numA - numB; // ascending
            })
              .map((value) => (
                <SwiperSlide>
                  <div>
                    <center>
                      <img
                        src={value.url}
                        alt="card"
                        style={{
                          height: "300px",
                          width: "250px",
                          cursor: "pointer",
                        }}
                         onClick={() => {
                      const discountNum = parseInt(
                        value.name.match(/\d+/)?.[0] || 0
                      );
                      console.log("Clicked discount:", discountNum);
                      pro3setSelectedId(discountNum);
                      navigate(`/product3/${discountNum}`);
                      
                    }}
                      />
                      <br />
                      <br />
                      <br />
                    </center>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <br />
      </div>
    </>
  );
}

export default New_arrivals;
