import React, { useContext } from "react";
import New_arrival from "../Homepage_componets/New_arrivals";
import Home_Swiper from "../Homepage_componets/Home_Swiper";
import { product_section_card } from "../assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import "../index.css";
import Mycontext from "../contextfile/Mycontext";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  var { productList } = useContext(Mycontext);
  return (
    <>
      <div id="home">
        <div className="container">
          <div>
            <Swiper
              id="brandswpier"
              spaceBetween={10}
              modules={[Navigation, Autoplay, Pagination]}
              autoplay={{ delay: 2000 }}
              pagination={{ clickable: true }}
              breakpoints={{
                320: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 6 },
              }}
              loop
            >
              {product_section_card.map((value) => (
                <SwiperSlide>
                  <div id="home-swiper">
                    <center>
                      <img
                        src={value.img}
                        alt="card"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          if (value.id === "bags") {
                            navigate("/bags");
                          }
                          if (value.id === "shoes") {
                            navigate("/shoes");
                          }
                          if (value.id === "cycle") {
                            navigate("/cycle");
                          }
                          if (value.id === "hiking") {
                            navigate("/pants");
                          }
                          if (value.id === "rain") {
                            navigate("/shirts");
                          }
                          if (value.id === "sports") {
                            navigate("/outdoor");
                          }
                        }}
                      />{" "}
                      <br />
                      <p>{value.name}</p>
                    </center>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <br />
        </div>
        {/* <Home_Swiper /> */}

        {/* hero image */}
        <div>
          <Swiper
            spaceBetween={10}
            modules={[Navigation, Autoplay, Pagination]}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            loop
          >
            {productList
              .filter(
                (value) =>
                  value.category === "homehero1" && value.folder === "homepage"
              )
              .map((value, index) => {
                return (
                  <SwiperSlide>
                    <div id="shoes-banner" className="px-2" key={index}>
                      <img src={value.url} alt="image" /> <br />
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
        <br />
        <br />

        {/* hero card */}
        <div className="container">
          <div>
            <Swiper
              id="brandswpier"
              spaceBetween={10}
              modules={[Navigation, Autoplay, Pagination]}
              autoplay={{ delay: 2000 }}
              pagination={{ clickable: true }}
              breakpoints={{
                320: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 7 },
              }}
              loop
            >
              {productList
                .filter(
                  (value) =>
                    value.category === "homecard1" &&
                    value.folder === "homepage"
                )
                .map((value) => (
                  <SwiperSlide>
                    <div id="home-swiper">
                      <center>
                        <img
                          src={value.url}
                          alt="card"
                          style={{ cursor: "pointer" }}
                        />
                        <br />
                        <p>{value.name}</p>
                      </center>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <br />
        </div>

        <New_arrival />


        {/* hero image */}
        <div>
          <Swiper
            spaceBetween={10}
            modules={[Navigation, Autoplay, Pagination]}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            loop
          >
            {productList
              .filter(
                (value) =>
                  value.category === "homehero2" && value.folder === "homepage"
              )
              .map((value, index) => {
                return (
                  <SwiperSlide>
                    <div id="shoes-banner" className="px-2" key={index}>
                      <img src={value.url} alt="image" /> <br />
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
        <br />
        <br />
        

        {/* tent,kid cycle,bar,rainjacket place */}
        <br />
        <div className="container ">
        <h3>Steal Deals: Too Good to Miss!</h3><br />
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
                .filter((value) => value.category === "steal_deal_card")
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
                          onClick={() => navigate(`/product/${value._id}`)}
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
      </div>
    </>
  );
}

export default Home;
