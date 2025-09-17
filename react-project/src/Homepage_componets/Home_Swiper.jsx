import React, { useContext } from "react";
// import { all_product } from "../../assets/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../index.css";
import { useNavigate } from "react-router-dom";
import Mycontext from "../contextfile/Mycontext";

function Home_Swiper() {
  const navigate = useNavigate();
  var { productList } = useContext(Mycontext);

  return (
    <>
      <div className="container">
        <center>
          <h1 style={{ color: "#A89C29" }}>Popular Porduct</h1>
        </center>

        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          breakpoints={{ 320: { slidesPerView: 1 }, 768: { slidesPerView: 3 } }}
          loop
        >
          {/* .filter((value)=>value.catagery==="shop"). */}
          {productList
            .filter((value) => value.category === "newarrival")
            .map((value) => (
              <SwiperSlide>
                <div className="card">
                  <div className="card-body">
                    <center>
                      <img
                        id="mapping-img"
                        onClick={() => navigate(`/shop/${value._id}`)}
                        src={value.url}
                        alt=""
                        height="300"
                        width="300"
                      />
                    </center>
                  </div>
                  <div className="card-footer">
                      <h6>
                        <span style={{ color: "#2A2AD3" }}>Name : </span>
                        {value.name}
                      </h6>
                      <h6>
                        <span style={{ color: "#2A2AD3" }}>Price : </span>
                        {value.price}
                      </h6>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <br /><br /><br /><br />
      </div>
    </>
  );
}

export default Home_Swiper;
