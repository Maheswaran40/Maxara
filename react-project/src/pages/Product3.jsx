import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { all_product } from "../assets/Image";
import Mycontext from "../contextfile/Mycontext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Filter from "../assets/images/filter.png";
import exchange from "../assets/images/exchange.png";

function Product() {
  const navigate = useNavigate();
  var {
    likeFun,
    cartFun,
    rangevalue,
    setRangevalue,
    productList,
    list,
    pro3selectedId,
  } = useContext(Mycontext);

  const bundleMapping = {
    199: ["travel_bag_1a.avif","tshirt_2a.avif","tshirt_1.avif","bottle_1.avif"],
    399: ["batminton_package.avif","football_3.avif"],
    799: ["shoe_1a_black.avif","addidas_track_pant_1a.avif","cyling_jersey_2a.avif","tennis_shoe_1a.avif"],
    999: ["batminton_shoe_1a.avif","addidas_track_pant_1a.avif","tennis_pants_2a.avif","bottle_1.avif"],
  };
  console.log("pro3selectedId is:", pro3selectedId);

  const allowedIds = bundleMapping[pro3selectedId] || [];
  console.log("Allowed IDs:", allowedIds);

 if (!pro3selectedId) {
  return <h2>Loading product...</h2>;
}

  return (
    <>
      {/* ************ product hero card ************ */}

      <h1 style={{ textAlign: "center", color: "blue" }}>Available products</h1>
      {/* filter tab */}
      <div id="filter-content-div">
        <div className="filter-content1">
          <h4>
            Filters&nbsp; <img src={Filter} alt="" width="20" height="20" />
          </h4>
        </div>
        <div className="filter-content2">
          <span>
            <img src={exchange} alt="" width="20" height="20" />
            &nbsp;<b>SORT BY</b>
          </span>
          <div class="dropdown">
            <button
              class="btn"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
            >
              Most Relavent
            </button>
            <ul class="dropdown-menu px-2 relavent-ul">
              <li>price : Low to High</li>
              <li>price : High to Low</li>
              <li>Rating</li>
              <li>Popular</li>
              <li>Highest Discount</li>
            </ul>
          </div>
        </div>
      </div>
      {/* shoe product */}
      <div className="small-screen-filter-div">
        {/* Price filter */}
        <div id="price">
          <div className="d-flex justify-content-between">
            <h4>Price</h4>
            <span className="bg-white p-1 border rounded-3">{rangevalue}</span>
          </div>
          <input
            type="range"
            id="range"
            min={100}
            max={3000}
            onChange={(e) => setRangevalue(Number(e.target.value))}
          />
        </div>

        {/* Gender dropdown */}
        <div className="accordion " id="Gender">
          <div className="accordion-item " style={{ width: "200px" }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
              >
                Gender
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse">
              <div className="accordion-body">
                <div className="range-div">
                  <ul>
                    <li>
                      <input type="checkbox" />
                      <span>Men (122)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>Women (80)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>Boys (15)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>Girls(38)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>Baby boys (17)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>Baby girls (17)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*brand  */}
        <div className="accordion ">
          <div className="accordion-item " style={{ width: "200px" }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#brand"
              >
                Brand
              </button>
            </h2>
            <div id="brand" className="accordion-collapse collapse">
              <div className="accordion-body">
                <div className="range-div">
                  <ul>
                    <li>
                      <input type="checkbox" />
                      <span>Adidas(40)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>Kalenji (20)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>Maxara (75)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>Dynafit(38)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>NewFeel (17)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>Tarmak (17)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* colors */}
        <div className="accordion ">
          <div className="accordion-item " style={{ width: "200px" }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#Colors"
              >
                Colors
              </button>
            </h2>
            <div id="Colors" className="accordion-collapse collapse">
              <div className="accordion-body">
                <div className="range-div">
                  <ul>
                    <li>
                      <input type="checkbox" />
                      <i className="fa-solid fa-circle" id="i-white"></i>
                      <span>White(40)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <i className="fa-solid fa-circle" id="i-red"></i>
                      <span>Red (20)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <i className="fa-solid fa-circle" id="i-blue"></i>
                      <span>Blue (75)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <i className="fa-solid fa-circle" id="i-gray"></i>
                      <span>Gray(38)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <i className="fa-solid fa-circle" id="i-brown"></i>
                      <span>Brown (17)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <i className="fa-solid fa-circle" id="i-green"></i>
                      <span>Green (17)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <i className="fa-solid fa-circle"></i>
                      <span>Black (32)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sports */}
        <div className="accordion ">
          <div className="accordion-item " style={{ width: "200px" }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#Sports"
              >
                Sports
              </button>
            </h2>
            <div id="Sports" className="accordion-collapse collapse">
              <div className="accordion-body">
                <div className="range-div">
                  <ul>
                    <li>
                      <input type="checkbox" />
                      <span>Running(56)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>Jogging (34)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>Multisport (35)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>Walking(13)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>Gymnastics (27)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>BasketBall (9)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Discount */}
        <div className="accordion ">
          <div className="accordion-item " style={{ width: "240px" }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#Discount"
              >
                Discount
              </button>
            </h2>
            <div id="Discount" className="accordion-collapse collapse">
              <div className="accordion-body">
                <div className="range-div">
                  <ul>
                    <li>
                      <input type="checkbox" />
                      <span>10% and below (126)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>10% and above (6)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>20% and above (36)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>30% and above (15)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>40% and above (10)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>50% and above (1)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>60% and above (1)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>70% and above (5)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Rating  */}
        <div className="accordion ">
          <div className="accordion-item " style={{ width: "250px" }}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#Rating"
              >
                Rating
              </button>
            </h2>
            <div id="Rating" className="accordion-collapse collapse">
              <div className="accordion-body">
                <div className="range-div">
                  <ul>
                    <li>
                      <input type="checkbox" />
                      <span>Above &#11088;&#11088;&#11088;&#11088;(81)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>Above &#11088;&#11088;&#11088;(0)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>Above &#11088;&#11088;(0)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>Above &#11088;(0)</span>
                    </li>
                    <li>
                      <input type="checkbox" />
                      <span>No Rating (119)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* product filters div */}
      <div className="border" id="shoe-main">
        <div id="shoe-sub-1">
          <div id="filter-price">
            <h4>Price</h4>
            <span className="bg-white p-1 border rounded-3">{rangevalue}</span>
          </div>
          <input
            type="range"
            id="range"
            min={100}
            max={3000}
            onChange={(e) => setRangevalue(Number(e.target.value))}
          />
          <br />
          <div className="range-div">
            <h4>Gender</h4>
            <ul>
              <li>
                <input type="checkbox" />
                <span>Men (122)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>Women (80)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>Boys (15)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>Girls(38)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>Baby boys (17)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>Baby girls (17)</span>
              </li>
            </ul>
          </div>
          {/* brand */}
          <div className="range-div">
            <h4>Brand</h4>
            <ul>
              <li>
                <input type="checkbox" />
                <span>Adidas(40)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>Kalenji (20)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>Maxara (75)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>Dynafit(38)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>NewFeel (17)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>Tarmak (17)</span>
              </li>
            </ul>
          </div>
          {/* colours */}
          <div className="colors-div">
            <h4>Colors</h4>
            <ul>
              <li>
                <input type="checkbox" />
                <i className="fa-solid fa-circle" id="i-white"></i>
                <span>White(40)</span>
              </li>
              <li>
                <input type="checkbox" />
                <i className="fa-solid fa-circle" id="i-red"></i>
                <span>Red (20)</span>
              </li>
              <li>
                <input type="checkbox" />
                <i className="fa-solid fa-circle" id="i-blue"></i>
                <span>Blue (75)</span>
              </li>
              <li>
                <input type="checkbox" />
                <i className="fa-solid fa-circle" id="i-gray"></i>
                <span>Gray(38)</span>
              </li>
              <li>
                <input type="checkbox" />
                <i className="fa-solid fa-circle" id="i-brown"></i>
                <span>Brown (17)</span>
              </li>
              <li>
                <input type="checkbox" />
                <i className="fa-solid fa-circle" id="i-green"></i>
                <span>Green (17)</span>
              </li>
              <li>
                <input type="checkbox" />
                <i className="fa-solid fa-circle"></i>
                <span>Black (32)</span>
              </li>
            </ul>
          </div>
          {/* sports */}
          <div className="range-div">
            <h4>Sports</h4>
            <ul>
              <li>
                <input type="checkbox" />
                <span>Running(56)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>Jogging (34)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>Multisport (35)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>Walking(13)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>Gymnastics (27)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>BasketBall (9)</span>
              </li>
            </ul>
          </div>
          {/* Discount */}
          <div className="discount-div">
            <h4>Discount</h4>
            <ul>
              <li>
                <input type="checkbox" />
                <span>10% and below (126)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>10% and above (6)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>20% and above (36)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>30% and above (15)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>40% and above (10)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>50% and above (1)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>60% and above (1)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>70% and above (5)</span>
              </li>
            </ul>
          </div>
          {/* Rating */}
          <div className="discount-div">
            <h4>Discount</h4>
            <ul>
              <li>
                <input type="checkbox" />
                <span>Above &#11088;&#11088;&#11088;&#11088;(81)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>Above &#11088;&#11088;&#11088;(0)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>Above &#11088;&#11088;(0)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>Above &#11088;(0)</span>
              </li>
              <li>
                <input type="checkbox" />
                <span>No Rating (119)</span>
              </li>
            </ul>
          </div>
        </div>
        {/* product div */}
        {pro3selectedId ? (
          <div id="shoe-sub-2" className="container row">
            {productList
              .filter((value) =>
               allowedIds.includes(value.filename)
              )
              .map((value, index) => {
                // Find hover image for this product (same name but with category = "hover")
                const hoverImage = productList.find(
                  (img) =>
                    img.category === "hover" &&
                    img.name.replace(" hover", "") === value.name
                );

                return (
                  <div className="col-lg-3 col-6 shoe-card" key={index}>
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
                          <span
                            id="shoe-card-footer-p"
                            style={{ color: "blue" }}
                          >
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
                              marginLeft: "10px",
                              width: "70px",
                              justifyContent: "space-between",
                              display: "flex",
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
                              {value.offer}off
                            </span>
                          </div>
                        </div>
                        <button
                          id="shoe-cart-button"
                          onClick={() => cartFun(value._id)}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : null}
        <br />
      </div>
    </>
  );
}

export default Product;
