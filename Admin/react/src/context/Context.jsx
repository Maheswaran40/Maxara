import React, { useEffect, useState } from "react";
import Mycontext from "./Mycontext";
import axios from "axios";

function Context({ children }) {
  const url = "https://maxara-backend.onrender.com";
  // form usestaes start

  // main form usestate
  const [image, setImage] = useState(""); // base64 url
  const [preview, setPreview] = useState("");
  const [folder, setFolder] = useState("single-upload"); // default folder
  const [filename, setFilename] = useState(""); // extracted from file
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");

  // preview function start

  const imgpreview = (e) => {
    const file = e.target.files[0]; //targeting img through files
    if (file) {
      setFilename(file.name); // use original filename
      const reader = new FileReader(); //filereader for read the img file
      reader.onloadend = () => {
        setImage(reader.result);
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // preview function end

  // submit function start
  var [data, setData] = useState({});
  const submitFun = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        folder,
        filename,
        name,
        price,
        category,
        desc,
        url: image, // base64 image string goes here
      };
      console.log(formData);
      setData(formData);
      await axios.post(`${url}/add`, formData);
      alert("data added successfully");
      setPreview("");
      setName("");
      setPrice("");
      setCategory("");
      setDesc("");
      setFilename("");
    } catch (err) {
      `${err.name}${err.message}`;
    }
  };
  // submit function end

  // update form start
  var [updateImage, setupdateImage] = useState("");
  var [updatePreview, setupdatePreview] = useState("");
  var [updateName, setupdateName] = useState("");
  var [updatePrice, setupdatePrice] = useState("");
  var [updateCategory, setupdateCategory] = useState("");
  var [updateDesc, setupdateDesc] = useState("");
  var [updateProductId, setupdateProductId] = useState("");
  var [updateFilename, setupdateFilename] = useState("");
  var [updateFolder, setupdateFolder] = useState("");

  // populate update form
  const updateFun = (productID) => {
    const product = productList.find((a) => a._id === productID);
    console.log("update button clicked data", product);

    setupdateName(product.name);
    setupdatePrice(product.price);
    setupdateCategory(product.category);
    setupdateDesc(product.desc);
    setupdateImage(product.url);
    setupdatePreview(product.url);
    setupdateProductId(product._id);
    setupdateFilename(product.filename);
    setupdateFolder(product.folder);
  };

  // preview for update image
  const updateImgpreview = (e) => {
    const file = e.target.files[0]; //targeting img through files
    if (file) {
      setupdateFilename(file.name);
      const reader = new FileReader(); //filereader for read the img file
      reader.onloadend = () => {
        setupdateImage(reader.result);
        setupdatePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // submit updated product
  const updateSubmitfun = async (e) => {
    e.preventDefault();
    try {
      const updateform = {
        folder: updateFolder,
        filename: updateFilename,
        name: updateName,
        category: updateCategory,
        price: updatePrice,
        desc: updateDesc,
        url: updateImage,
      };
      console.log("Update ID:", updateProductId, updateform);

      const updateProduct = await axios.put(
        `${url}/update/${updateProductId}`,
        updateform
      );
      console.log(updateProduct.data);
      setupdateName("");
      setupdatePrice("");
      setupdateCategory("");
      setupdateDesc("");
      setupdateImage("");
      setupdatePreview("");
      setupdateProductId("");
      setupdateFilename("");
      setupdateFolder("");

      alert("data updated");
    } catch (err) {
      `${err.name}${err.message}`;
    }
  };
  // update form end

  // view product fun start
  var [productList, setList] = useState([]);
  const viewFun = async () => {
    try {
      const databaseData = await axios.get(`${url}/list`);
      setList(databaseData.data);
      console.log("Products from DB:", databaseData.data);
    } catch (err) {
      `${err.name}${err.message}`;
    }
  };

  useEffect(() => {
    viewFun();
  }, []);

  // delete function start
  const deleteFun = async (productID) => {
    try {
      await axios.delete(`${url}/delete/${productID}`);
      alert("data deleted");
    } catch (err) {
      `${err.name}${err.message}`;
    }
  };

  // delete function end

  // view product fun end

  // user data get method start
  //
  var [usergetData, setUsergetdata] = useState([]);
  const viewuserData = async () => {
    try {
      const databaseData = await axios.get(`${url}/getUser`);
      setUsergetdata(databaseData.data);
      console.log(databaseData.data);
    } catch (err) {
      `fetching user data error : ${err.name}${err.message}`;
    }
  };

  useEffect(() => {
    viewuserData();
  }, []);
  // user data get method end

  // form usestaes end
  const MYcontextValue = {
    name,
    setName,
    price,
    setPrice,
    category,
    setCategory,
    desc,
    setDesc,
    image,
    setImage,
    preview,
    setPreview,
    imgpreview,
    folder,
    setFolder,
    filename,
    setFilename,
    submitFun,
    data,
    setData,

    // product
    productList,
    setList,
    viewFun,
    deleteFun,

    // update
    updateImage,
    setupdateImage,
    updatePreview,
    setupdatePreview,
    updatePrice,
    setupdatePrice,
    updateCategory,
    setupdateCategory,
    updateDesc,
    setupdateDesc,
    updateName,
    setupdateName,
    updateSubmitfun,
    updateFun,
    updateImgpreview,
    updateFilename,
    updateFolder,

    // user
    viewuserData,
    usergetData,
  };
  return (
    <Mycontext.Provider value={MYcontextValue}>{children}</Mycontext.Provider>
  );
}

export default Context;
