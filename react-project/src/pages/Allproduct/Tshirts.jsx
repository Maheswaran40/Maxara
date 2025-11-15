import React, { useContext, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Mycontext from "../../contextfile/Mycontext";
import { useNavigate } from "react-router-dom";
import Filter from "../../assets/images/filter.png";
import exchange from "../../assets/images/exchange.png";

function Tshirts() {
      const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);
  var { productList, cartFun, rangevalue, setRangevalue, likeFun, list } =
    useContext(Mycontext);
  return (
    <>
    <div>
        {/* ************ shoe card ************ */}
        <Swiper
          spaceBetween={10}
          modules={[Navigation, Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            320: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          loop
        >
          {productList
            .filter((value) => value.category === "bag_card")
            .map((value, index) => {
              return (
                <SwiperSlide>
                  <div id="home-swiper" className="px-2" key={index}>
                    <center>
                      <img src={value.url} alt="image" /> 
                    </center>
                    <br />
                    <br />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <br />
      <br />
      {/* ************ product hero image ************ */}
      <div>
        <Swiper
          spaceBetween={10}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          loop
        >
          {productList
            .filter((value) => value.folder === "tshirts_header" && value.category ==="banner")
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
            value={rangevalue}
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
        <div id="shoe-sub-1" >
          <div id="filter-price">
            <h4>Price</h4>
            <span className="bg-white p-1 border rounded-3">{rangevalue}</span>
          </div>
          <input
            type="range"
            id="range"
            min={100}
            max={3000}
            value={rangevalue}
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
        <div id="shoe-sub-2"  className="container row">
          {productList
            .filter(
              (value) =>
                value.folder === "tshirts" &&
                (value.category === "shop" || value.category === "newarrival")  && value.price<=rangevalue
            ).length>0 ? (
              productList
            .filter(
              (value) =>
                value.folder === "tshirts" &&
                (value.category === "shop" || value.category === "newarrival")  && value.price<=rangevalue
            )
            
            .map((value, index) => {
              // Find hover image for this product (same name but with category = "hover")
              const hoverImage = productList.find(
                (img) =>
                  img.folder === "tshirts" &&
                  img.category === "hover" &&
                  img.name.replace(" hover", "") === value.name
              );
              return (
                <div className="col-lg-3 col-6 shoe-card" style={{height:"300px"}} key={index}>
                  <div
                    id="shoe-card"
                    className="card my-lg-2 my-1"
                    height="200px"
                     style={{cursor:"pointer"}}
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
                        <b style={{ fontSize: "15px" }}>{`₹ ${value.price}`}</b>
                        <div
                          style={{
                            marginLeft:"5px",
                            width: "70px",
                            justifyContent: "space-between",
                            display: "flex",
                          }}
                        >   <b>
                            <span style={{ textDecoration: "line-through" }}>₹{value.dashprice}
                            </span>
                          </b>&nbsp;&nbsp;
                          <span  style={
                                  parseInt(value.offer) >= 35
                                    ? { backgroundColor: "red", color: "white" }
                                    : { backgroundColor: "yellow" }
                                }>{value.offer}&nbsp;off</span>
                       
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
            })):<h3 className='d-flex justify-content-center pt-5'>no products available in this price range</h3>}
        </div>
        <br />
      </div>
      <br />
      <h1 style={{ textAlign: "center", color: "blue", padding: "0 10px" }}>
        Unbeatable Deals by Price
      </h1>
      <br />
      <div className="container">
        {/* pricetag */}
        <div className="row ">
          {productList
            .filter((value) => value.folder === "pricetag")
            .sort((a, b) => {
              const numA = parseInt(a.filename.match(/\d+/)?.[0] || 0);
              const numB = parseInt(b.filename.match(/\d+/)?.[0] || 0);
              return numA - numB; // ascending
            })
            .map((value, index) => {
              return (
                <div
                  key={index}
                  className="col-lg-3 col-md-4 col-6 d-flex justify-content-center pricetag"
                >
                  <img
                    src={value.url}
                    alt=""
                    style={{
                      width: "200px",
                      height: "200px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      const discountNum = parseInt(
                        value.filename.match(/\d+/)?.[0] || 0
                      );
                      console.log("Clicked discount:", discountNum);
                      setSelectedId(discountNum);
                    }}
                  />
                </div>
              );
            })}
        </div>

        {/* PRODUCTS ROW */}
        <div className="row mt-4 px-2">
          {!selectedId ? null : <h2>Product Under ₹ {selectedId}</h2>}
          {selectedId
            ? (() => {
                const filtered = productList.filter((item) => {
                  if (item.folder !== "tshirts") return false;
                  if (
                    !(
                      item.category === "shop" || item.category === "newarrival"
                    )
                  )
                    return false;

                  if (selectedId === 499) {
                    return item.price <= 499;
                  } else if (selectedId === 999) {
                    return item.price > 499 && item.price <= 999;
                  } else if (selectedId === 1499) {
                    return item.price > 999 && item.price <= 1499;
                  } else if (selectedId === 1999) {
                    return item.price > 1499 && item.price <= 1999;
                  } else {
                    return item.price <= selectedId;
                  }
                });

                if (filtered.length === 0) {
                  return (
                    <center>
                      <h4>no available products in ₹{selectedId}</h4>
                    </center>
                  );
                }

                return filtered.map((value, index) => {
                  const hoverImage = productList.find(
                    (img) =>
                      img.folder === "tshirts" &&
                      img.category === "hover" &&
                      img.name.replace(" hover", "") === value.name
                  );

                  return (
                    <div
                      className="col-lg-3 col-md-4 col-6 shoe-card"
                      key={index}
                    >
                      <div
                        id="shoe-card"
                        className="card my-lg-2 my-1"
                        height="200px"
                      >
                        <div className="card-body d-flex align-items-center justify-content-center shoe-img-wrapper" style={{cursor:"pointer"}}>
                          <img
                            src={value.url}
                            alt="images"
                            className="shoe-img front"
                            onClick={() => navigate(`/shop/${value._id}`)}
                          />
                          <img
                            src={hoverImage?.url || value.url}
                            alt={`${value.name} hover`}
                            className="shoe-img back"
                            onClick={() => navigate(`/shop/${value._id}`)}
                          />
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
                        </div>
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
                                width: "80px",
                                justifyContent: "space-between",
                                display: "flex",
                              }}
                            >
                              <b>
                                <span
                                  style={{ textDecoration: "line-through" }}
                                >
                                  ₹{value.dashprice.toLocaleString("en-IN")}
                                </span>
                              </b>&nbsp;
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
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                });
              })()
            : null}
        </div>
      </div>
    
    
    </>
  )
}

export default Tshirts