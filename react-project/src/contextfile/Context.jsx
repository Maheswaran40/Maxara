import React, { useState, useEffect } from "react";
import Mycontext from "./Mycontext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import fashonboys from "../assets/images/fashon-boys-lineup.jpg";

function Context({ children }) {
  const navigate = useNavigate();

  // about page function start
  const [activeTab, setActiveTab] = useState({
    title: "", //we send into object , so we create empty object in "activeTab" and get by calling "activeTab.values"
    p1: "",
    p2: "",
    conlist: "",
  });

  const aboutFun = () => {
    setActiveTab({
      title: "Unveiling Your Unique Fashion Journey",
      img: fashonboys,
      desc: "Welcome to Maxara, where fashion meets individuality, and style is more than just clothing – it's a statement. Our passion for fashion drives us to curate a collection that celebrates diversity, embraces trends, and empowers you to express yourself through clothing.",
      type: "about",
    });
  };

  const storyFun = () => {
    setActiveTab({
      title:
        "In the heart of [Your City], a dream was woven into the fabric of reality – the dream of creating a clothing haven that resonates with style enthusiasts, trendsetters, and those who seek to express themselves through fashion. Welcome to [Your Store Name], where every stitch tells a story. ",
      type: "story",
    });
  };

  const missionFun = () => {
    setActiveTab({
      title:
        "At [Your Store Name], we are driven by a singular mission: to empower individuals through the art of fashion. We believe that clothing is not just a means of covering the body but a powerful tool for self-expression, confidence, and individuality.",
      p1: "1.Curate Exceptional Style: We are committed to curating a diverse and exceptional collection of clothing that transcends the boundaries of fashion. Our mission is to offer a carefully selected range of garments that reflect the latest trends, timeless classics, and unique pieces that resonate with our customers.",
      p2: "2.Quality Craftsmanship: We prioritize quality craftsmanship in every stitch and detail. Our dedication to superior craftsmanship ensures that each garment is not just a piece of clothing but a work of art, designed to stand the test of time.",
      type: "mission",
    });
  };

  const connectFun = () => {
    setActiveTab({
      heading: "Affilate Program",
      type: "connection",
      conlist: {
        li1: "Build your own online sporting goods store!",
        li2: "If you have a web site, you can make money selling sporting goods products. It’s easy and it’s free to join.",
        li3: "Click here to join now and earn commissions of up to 6%",
      },
    });
  };

  // **************************************** PRODUCTS FETCH ****************************************
  const url = "https://maxara-backend.onrender.com";
  const viewFun = async () => {
    try {
      const databaseData = await axios.get(`${url}/list`);
      setProductList(databaseData.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    viewFun();
  }, []);

  // **************************************** SEARCH ****************************************
  const [searchdata, setData] = useState("");
  const searchFun = (e) => {
    e.preventDefault();
    console.log(searchdata);
  };
  const seacrhInput = (e) => {
    const input = e.target.value.toLowerCase();
    setData(input);
    console.log(input);
  };

  const [productList, setProductList] = useState([]);
  const filteredItems = searchdata
    ? productList.filter((value) => {
        if (value.category === "shop" || value.category === "newarrival")
          return value.name?.toLowerCase().includes(searchdata);
      })
    : [];
  console.log("searchdata:", searchdata);
  console.log("filteredItems:", filteredItems);

  // **************************************** LIKE ****************************************
  const [liketab, setLiketab] = useState({});
  const [list, setList] = useState([]);
  const likeFun = (conid) => {
    const product = productList.find((value) => value._id === conid) || {};
    setLiketab(product);
    if (!list.some((item) => item._id === product._id)) {
      setList([...list, product]);
      toast.success("Added to wishlist ❤️");
    } else {
      toast.info("Already in wishlist 😉");
    }
  };
  const deleteFun = (index) => setList(list.filter((_, i) => i !== index));

  // **************************************** CART ****************************************
  const [cartTab, setcartTab] = useState({});
  const [cartlist, setCartlist] = useState([]);
  const [price, setPrice] = useState(0);

  const cartFun = (cartid) => {
    const cartProduct = productList.find((value) => value._id === cartid) || {};
    setcartTab(cartProduct);

    if (!cartlist.some((item) => item._id === cartProduct._id)) {
      const newItem = { ...cartProduct, quantity: 1 };
      const updatedCartlist = [...cartlist, newItem];
      setCartlist(updatedCartlist);

      const total = updatedCartlist.reduce((sum, item) => {
        const cleanPrice = Number(
          String(item.price).replace(/[^0-9.]/g, "") || 0
        );
        return sum + cleanPrice * item.quantity;
      }, 0);
      setPrice(total);

      toast.success("Added to cart");
    } else {
      toast.info("Product already in cart");
    }
  };

  const deleteCart = (index) => {
    const updatedCartlist = cartlist.filter((_, i) => i !== index);
    setCartlist(updatedCartlist);

    const total = updatedCartlist.reduce((sum, item) => {
      const cleanPrice = Number(
        String(item.price).replace(/[^0-9.]/g, "") || 0
      );
      return sum + cleanPrice * item.quantity;
    }, 0);
    setPrice(total);
  };

  const quanI = (id) => {
    const updatedCart = cartlist.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartlist(updatedCart);

    const total = updatedCart.reduce((sum, item) => {
      const cleanPrice = Number(
        String(item.price).replace(/[^0-9.]/g, "") || 0
      );
      return sum + cleanPrice * item.quantity;
    }, 0);
    setPrice(total);
  };

  const quand = (id) => {
    const updatedCart = cartlist.map((item) =>
      item._id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartlist(updatedCart);

    const total = updatedCart.reduce((sum, item) => {
      const cleanPrice = Number(
        String(item.price).replace(/[^0-9.]/g, "") || 0
      );
      return sum + cleanPrice * item.quantity;
    }, 0);
    setPrice(total);
  };

  const [rangevalue, setRangevalue] = useState(1500);

  // **************************************** USER FORM ****************************************
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userformFun = async (e) => {
    e.preventDefault();
    try {
      const formData = { username, email, password };
      await axios.post(
        "https://maxara-backend.onrender.com/userData",
        formData
      );
      toast.success("Your data registered successfully...");
      setUsername("");
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (err) {
       // ✅ Handle duplicate error cleanly
    if (err.response?.status === 400 && err.response?.data?.message) {
      toast.error(err.response.data.message); // shows "Email already exists"
    } else {
      toast.error("Email already exist");
    }
      console.log("Form posting error:", err);
    }
  };
  // user data get method
  var [userData, setUserData] = useState([]);
  var [loginName, setLoginName] = useState("");
  var [loginPassword, setLoginPassword] = useState("");
  const getUser = async (e) => {
    e.preventDefault();
    try {
      const databaseData = await axios.get(`${url}/getUser`);
       const users = databaseData.data;
       const foundUser = users.find((u) => u.email === loginName && u.password === loginPassword);

        if (foundUser) {
      console.log("✅ Login successful", foundUser);

      setUserData(foundUser);
      // navigate to home (uncomment if you imported useNavigate in Form)
       localStorage.setItem("isLoggedIn", "true");  // 🔥 must be string
      navigate("/home");
    } else {
      alert("❌ Invalid Email or Password");
    }
      setUserData(databaseData.data);
      console.log(databaseData.data);
      console.log(loginName);
      console.log(loginPassword);
      
    } catch (err) {
      console.log(err);
    }
  };

  // 👇 add this back, near your other states
  const [pro3selectedId, pro3setSelectedId] = useState(null);

  // **************************************** CONTEXT VALUE ****************************************
  const mycontextValue = {
    searchFun,
    seacrhInput,
    filteredItems,
    setData,
    searchdata,
    likeFun,
    liketab,
    list,
    deleteFun,
    cartFun,
    cartlist,
    deleteCart,
    price,
    quanI,
    quand,
    productList,
    cartTab,
    userformFun,
    setUsername,
    setEmail,
    setPassword,
    username,
    email,
    password,
    rangevalue,
    setRangevalue,
    pro3selectedId,
    pro3setSelectedId,
    activeTab,
    aboutFun,
    storyFun,
    missionFun,
    connectFun,
    userData,
    getUser,
    setLoginName,
    setLoginPassword,loginName,loginPassword
  };

  return (
    <Mycontext.Provider value={mycontextValue}>{children}</Mycontext.Provider>
  );
}

export default Context;
