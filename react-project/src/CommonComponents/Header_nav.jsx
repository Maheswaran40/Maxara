import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import Mycontext from "../contextfile/Mycontext";
import { Offcanvas } from "react-bootstrap";
import maxara_logo from "../assets/images/maxara_logo.png";
import shoe from "../assets/images/shoes.png";
import pants from "../assets/images/jeans.png";
import shirts from "../assets/images/cloth.png";
import tshirts from "../assets/images/tshirt.png";
import cycle from "../assets/images/bicycle.png";
import sports from "../assets/images/game.png";
import bags from "../assets/images/school-bag.png";
import caps from "../assets/images/cap.png";
import jersey from "../assets/images/soccer-jersey.png";

function Header_nav() {
  const navigate = useNavigate();
  var {
    searchFun,
    seacrhInput,
    filteredItems,
    searchdata,
    setData,
    list,
    deleteFun,
    cartlist,
    deleteCart,
    price,
    quanI,
    quand,
  } = useContext(Mycontext);

  // search fun start
  var [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setData("");
  };

  const closeOffcanvas = () => {
    setShow(false);
  };
  // search fun start

  return (
    <>
      <div id="title" className="row">
        {/* navbar canvas*/}
        <div id="navbar">
          <div className="d-flex justify-content-around align-items-center">
            <button
              data-bs-toggle="offcanvas"
              data-bs-target="#canvas"
              className="btn px-0 border-0"
              id="navicon-button"
            >
              <h4>
                <i className="fa-solid d-flex fa-bars navicon"></i>
              </h4>
            </button>
          </div>
          <div className="col-6 d-flex justify-content-around align-items-center px-0">
            <p className="p-0 m-0">All sports</p>
          </div>
        </div>
        {/* logo */}
        <div id="logo">
          <img
            src={maxara_logo}
            alt=""
            style={{ height: "90px", width: "90px" }}
          />
        </div>

        {/* search bar */}
        <div id="nav-list">
          <span
            data-bs-toggle="offcanvas"
            data-bs-target="#search-modal"
            onClick={() => setShow(true)}
          >
            <button
              className="d-flex align-items-center justify-content-start py-2 ps-3"
              id="searchbutton"
            >
              <i className="fa-solid fa-magnifying-glass nav-icon pe-2"></i>
              <span className="typing-container">Search</span>
            </button>
          </span>
        </div>

        {/* icons */}
        <div id="icons" className="d-flex justify-content-around nav-icons">
          <span>
            <Link className="Link" to={"/home"}>
              <h5 className="p-0 m-0">
                <i
                  class="fa-solid fa-house"
                  style={{
                    color: location.pathname === "/home" ? "blue" : "black",
                  }}
                ></i>
              </h5>
            </Link>
            <p>Home</p>
          </span>
          <span
            data-bs-toggle="offcanvas"
            data-bs-target="#like-canvas"
            className="position-relative"
          >
            <h5 className="p-0 m-0">
              <i
                className="fa-regular fa-heart nav-icon "
                style={list.length > 0 ? { color: "red" } : null}
              ></i>
            </h5>
            {list.length > 0 ? (
              <span
                className="position-absolute p-0 m-0 start-100 translate-middle badge  bg-danger"
                style={{
                  height: "20px",
                  width: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  top: "10px",
                  borderRadius: "50px",
                }}
              >
                <span className="p-0">{list.length}</span>
              </span>
            ) : null}
            <p id="p">Wishlist</p>
          </span>
          <span data-bs-toggle="offcanvas" data-bs-target="#cart-canvas">
            <h5 className="p-0 m-0">
              {" "}
              <i
                className="fa-solid fa-cart-shopping nav-icon"
                style={cartlist.length > 0 ? { color: "green" } : null}
              ></i>
            </h5>
            <p>cart</p>
          </span>
        </div>
      </div>

      {/* search canvas */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="top"
        id="search-modal"
        style={{ height: "500px" }}
      >
        <Offcanvas.Header>
          <Offcanvas.Title>Search</Offcanvas.Title>
          <button className="btn btn-close" onClick={closeOffcanvas}></button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form action="" className="input-group" onSubmit={searchFun}>
            <input
              type="text"
              placeholder="Search"
              className="form-control"
              onChange={seacrhInput}
            />
            <input
              type="submit"
              className=" btn"
              style={{ backgroundColor: "blue", color: "white" }}
            />
          </form>
          <br />
          {!searchdata ? (
            <div id="search-choose" className="">
              <div>
                <h3>TRENDING SEARCHES</h3>
              </div>
              <div>
                <button
                  className="btn border-1 border-dark"
                  onClick={closeOffcanvas}
                >
                  <Link id="Link" to={"/shoes"}>
                    shoes
                  </Link>
                </button>
                <button
                  className="btn border-1 border-dark"
                  onClick={closeOffcanvas}
                >
                  <Link id="Link" to={"/caps"}>
                    caps
                  </Link>
                </button>
                <button
                  className="btn border-1 border-dark"
                  onClick={closeOffcanvas}
                >
                  <Link id="Link" to={"/bags"}>
                    Bags
                  </Link>
                </button>
                <button
                  className="btn border-1 border-dark"
                  onClick={closeOffcanvas}
                >
                  <Link id="Link" to={"/sleeves"}>
                    sleeves
                  </Link>
                </button>
                <button
                  className="btn border-1 border-dark"
                  onClick={closeOffcanvas}
                >
                  <Link id="Link" to={"/tshirts"}>
                    Tshirts
                  </Link>
                </button>
                <button
                  className="btn border-1 border-dark"
                  onClick={closeOffcanvas}
                >
                  {" "}
                  <Link id="Link" to={"/pants"}>
                    Pants
                  </Link>
                </button>
              </div>
            </div>
          ) : null}
          <br />
          {searchdata ? (
            <div className="row">
              {searchdata && filteredItems.length !== 0 ? (
                filteredItems.map((value, index) => (
                  <div
                    key={index}
                    onClick={closeOffcanvas}
                    className="col-lg-3 col-md-6 col-sm-12 justify-content-center d-flex"
                  >
                    {/* card start */}
                    <div
                      className="card my-2"
                      id="mapping-card"
                      style={{ width: "200px", height: "200px" }}
                    >
                      {/* card body */}
                      <div className="card-body d-flex align-items-center justify-content-center shoe-img-wrapper">
                        <img
                          src={value.url}
                          alt="images"
                          className="shoe-img front"
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
                          ></span>
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
                              {value.offer}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* card end */}
                  </div>
                ))
              ) : (
                <div>
                  <br />
                  <br />
                  <br />
                  <center>
                    <p>No matches found.</p>
                  </center>
                </div>
              )}
            </div>
          ) : (
            <div>
              <br />
              <br />
              <br />
              <center>
                <p>No matches found.</p>
              </center>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
      {/* search off canvas */}
      <div className="offcanvas offcanvas-start w-lg-25 w-sm-25" id="canvas">
        {/* canvas header */}
        <div className="offcanvas-header d-flex justify-content-between p-3">
          <h3 className="m-0">All Sports</h3>
          <button
            className="btn btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <hr style={{ margin: "0" }} />
        {/* canvas body */}
        <div className="offcanvas-body" id="nav-canvas">
          <Link id="allsport" to={"/shoes"}>
            <li className="dropdown-item p-0 " data-bs-dismiss="offcanvas">
              shoes
              <img src={shoe} alt="" width={"25px"} height={"20px"} />
            </li>
          </Link>
          <Link id="allsport" to={"/caps"}>
            <li className="dropdown-item p-0 " data-bs-dismiss="offcanvas">
              caps
              <img src={caps} alt="" width={"25px"} height={"20px"} />
            </li>
          </Link>
          <Link id="allsport" to={"/bags"}>
            <li className="dropdown-item p-0 " data-bs-dismiss="offcanvas">
              Bags
              <img src={bags} alt="" width={"25px"} height={"20px"} />
            </li>
          </Link>
          <Link id="allsport" to={"/sleeves"}>
            <li className="dropdown-item p-0 " data-bs-dismiss="offcanvas">
              jersey
              <img src={jersey} alt="" width={"25px"} height={"20px"} />
            </li>
          </Link>
          <Link id="allsport" to={"/tshirts"}>
            <li className="dropdown-item p-0 " data-bs-dismiss="offcanvas">
              Tshirts
              <img src={tshirts} alt="" width={"25px"} height={"20px"} />
            </li>
          </Link>
          <Link id="allsport" to={"/cycle"}>
            <li className="dropdown-item p-0 " data-bs-dismiss="offcanvas">
              Cycle and Accescries
              <img src={cycle} alt="" width={"25px"} height={"20px"} />
            </li>
          </Link>
          <Link id="allsport" to={"/pants"}>
            <li className="dropdown-item p-0 " data-bs-dismiss="offcanvas">
              Pants
              <img src={pants} alt="" width={"25px"} height={"20px"} />
            </li>
          </Link>
          <Link id="allsport" to={"/shirts"}>
            <li className="dropdown-item p-0 " data-bs-dismiss="offcanvas">
              Shirts
              <img src={shirts} alt="" width={"25px"} height={"20px"} />
            </li>
          </Link>
          <Link id="allsport" to={"/outdoor"}>
            <li className="dropdown-item p-0 " data-bs-dismiss="offcanvas">
              Outdoor Games Product
              <img src={sports} alt="" width={"25px"} height={"20px"} />
            </li>
          </Link>
        </div>
        <Link
          id="allsport"
          style={{ color: "black", fontWeight: "bolder" }}
          to={"/contact"}
        >
          <h2
            className="dropdown-item p-3 position-absolute"
            style={{
              bottom: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "2px solid black",
              borderBottom: "2px solid black",
            }}
            data-bs-dismiss="offcanvas"
          >
            Contact
            <i className="fa-solid fa-phone nav-icon me-5"></i>
          </h2>
        </Link>
      </div>

      {/* *****************icons react bootstrap offcanvas start***************** */}

      {/* user canvas */}
      {/* <div className="offcanvas offcanvas-end " id="user-canvas">
        <div className="offcanvas-header">
          <h1>Users</h1>
          <button
            className="btn btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">hi</div>
      </div> */}

      {/* like model */}
      <div
        className="offcanvas offcanvas-top"
        id="like-canvas"
        style={{ height: "500px" }}
      >
        <div className="offcanvas-header">
          <h1>Liked Product List</h1>
          <button
            className="btn btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body container">
          {list.map((value, index) => (
            <div key={index} className="wishlist-card">
              <div className="wishlist-img" onClick={() => navigate(`/shop/${value._id}`)} data-bs-dismiss="offcanvas">
                <img src={value.url} alt={value.name} />
              </div>
              <div className="wishlist-info">
                <h4>{value.name}</h4>
                <p className="price">₹{value.price.toLocaleString("en-IN")}</p>
              </div>
              <div>
                <button
                  onClick={() => deleteFun(index)}
                  className="wishlist-remove"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* cart canvas */}
      <div
        className="offcanvas offcanvas-top"
        id="cart-canvas"
        style={{ height: "500px" }}
      >
        <div className="offcanvas-header">
          <h1>Cart List</h1>
          <button
            className="btn btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body container">
          <h3 style={{ textAlign: "end" }}>Total Price : ₹{price}</h3>
          <br />

          {cartlist.map((value, index) => (
            <div key={index} className="cart-card">
              {/* Product Image */}
              <div className="cart-img" data-bs-dismiss="offcanvas">
                <img src={value.url} alt={value.name} onClick={() => navigate(`/shop/${value._id}`)}/>
              </div>

              {/* Product Info */}
              <div className="cart-info">
                <h4>{value.name}</h4>
                <p className="price">₹{value.price.toLocaleString("en-IN")}</p>
                <div className="quantity">
                  <button className="qty-btn" onClick={() => quand(value._id)}>
                    -
                  </button>
                  <span>{value.quantity}</span>
                  <button className="qty-btn" onClick={() => quanI(value._id)}>
                    +
                  </button>
                </div>
              </div>

              {/* Remove */}
              <div>
                <button
                  onClick={() => deleteCart(index)}
                  className="cart-remove"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* <table className="container table border-primary table-bordered text-center p-5 mt-2">
            <thead>
              <tr>
                <td>Product Name</td>
                <td>Product</td>
                <td>Price</td>
                <td>Qyantity</td>
                <td>Action</td>
                <td>remove</td>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table> */}
      </div>
      {/* icons  react bootstrap offcanvas start */}

      <br />
      {/* title end*/}
    </>
  );
}

export default Header_nav;
