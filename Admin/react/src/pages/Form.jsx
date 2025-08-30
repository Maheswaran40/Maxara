import React, { useContext } from "react";
import Mycontext from "../context/Mycontext";
import uploadimg from "../assets/upload_img.jpg";
import { Link } from "react-router-dom";

function Form() {
  var {
    name,
    price,
    category,
    desc,
    setName,
    setPrice,
    setCategory,
    setDesc,
    submitFun,
    imgpreview,
    preview,
    viewFun,
    productList,
    deleteFun,
    updateFun,
    updateSubmitfun,
    updateImgpreview,
    updatePreview,
    updatePrice,
    setupdatePrice,
    updateCategory,
    setupdateCategory,
    updateDesc,
    setupdateDesc,
    updateName,
    setupdateName,
    viewuserData,
    // newly added 👇
    folder,
    setFolder,
    filename,
    setFilename,
    updateFolder,
    setupdateFolder,
    updateFilename,
    setupdateFilename,
  } = useContext(Mycontext);

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between mt-3">
          <h2>Maxara</h2>
          <div>
            <button
              onClick={viewFun}
              className="btn btn-primary m-2"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas"
            >
              view product
            </button>
            <Link to="/getUser">
              <button
                onClick={viewuserData}
                className="btn btn-primary m-2"
              >
                view User details
              </button>
            </Link>
          </div>
        </div>

        {/* view Product canvas */}
        <div
          className="offcanvas offcanvas-top"
          id="offcanvas"
          style={{ height: "700px", overflow: "scroll" }}
        >
          <div className="offcanvas-head d-flex justify-content-between px-3 mt-3">
            <h1>Product Details</h1>
            <button
              className="btn btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="container">
              <table className="table border-primary table-bordered text-center p-5 mt-2">
                <thead>
                  <tr>
                    <td>Product image</td>
                    <td>Product folder</td>
                    <td>Product filename</td>
                    <td>Product Name</td>
                    <td>Product Price</td>
                    <td>Product category</td>
                    <td>Product Description</td>
                    <td>Action</td>
                    <td>close</td>
                  </tr>
                </thead>
                <tbody>
                  {productList.length !== 0 ? (
                    productList.map((value, index) => {
                      return (
                        <tr align="center" valign="middle" key={index}>
                          <td>
                            <img
                              src={value.url}
                              alt=""
                              height="120"
                              width="120"
                            />
                          </td>
                          <td>{value.folder}</td>
                          <td>{value.filename}</td>
                          <td>{value.name}</td>
                          <td>{value.price}</td>
                          <td>{value.category}</td>
                          <td>{value.desc}</td>
                          <td>
                            <button
                              className="btn btn-success"
                              data-bs-toggle="modal"
                              data-bs-target="#updateModal"
                              onClick={() => updateFun(value._id)}
                            >
                              Update
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn btn-close"
                              onClick={() => deleteFun(value._id)}
                            ></button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="7">No products found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* update modal */}
        <div className="modal" id="updateModal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-between">
                <h2>Update Here</h2>
                <button
                  className="btn btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <form action="" onSubmit={updateSubmitfun}>
                  <label htmlFor="">Upload Product image</label>
                  <input
                    type="file"
                    hidden
                    id="updateimage"
                    onChange={updateImgpreview}
                  />
                  <br />
                  <label htmlFor="updateimage">
                    <img
                      src={updatePreview ? updatePreview : uploadimg}
                      alt="upload img"
                      height="120"
                      width="120"
                    />
                  </label>
                  <br />

                  {/* new fields */}
                  <label>Folder</label>
                  <input
                    type="text"
                    className="form-control"
                    value={updateFolder}
                    onChange={(e) => setupdateFolder(e.target.value)}
                    required
                  />
                  <br />
                  <label>Filename</label>
                  <input
                    type="text"
                    className="form-control"
                    value={updateFilename}
                    onChange={(e) => setupdateFilename(e.target.value)}
                    required
                  />
                  <br />

                  <label>Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={updateName}
                    onChange={(e) => setupdateName(e.target.value)}
                    required
                  />
                  <br />

                  <label>Product price</label>
                  <input
                    type="text"
                    className="form-control"
                    value={updatePrice}
                    onChange={(e) => setupdatePrice(e.target.value)}
                    required
                  />
                  <br />

                  <label>Product category</label>
                  <select
                    className="form-control"
                    value={updateCategory}
                    onChange={(e) => setupdateCategory(e.target.value)}
                    required
                  >
                    <option hidden>choose</option>
                    <option>shop</option>
                    <option>new arrival</option>
                  </select>
                  <br />

                  <label>Product description</label>
                  <input
                    type="text"
                    className="form-control"
                    value={updateDesc}
                    onChange={(e) => setupdateDesc(e.target.value)}
                    required
                  />
                  <br />
                  <input type="submit" className="btn btn-success" />
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* add product form */}
        <form action="" className="form" onSubmit={submitFun}>
          <label>Upload Product image</label>
          <input type="file" hidden id="image" onChange={imgpreview} />
          <br />
          <label htmlFor="image">
            <img
              src={preview ? preview : uploadimg}
              alt="not"
              height="120"
              width="120"
            />
          </label>
          <br />

          {/* new fields */}
          <label>Folder</label>
          <select
            type="text"
            className="form-control"
            required
            value={folder}
            onChange={(e) => setFolder(e.target.value)}
          >
            <option hidden>choose</option>
            <option>shop</option>
            <option>newarrival</option>
            <option>hover</option>
          </select>
          <br />
          <label>Filename</label>
          <input
            type="text"
            className="form-control"
            required
            value={filename}
            onChange={(e) => setFilename(e.target.value)}
          />
          <br />

          <label>Product Name</label>
          <input
            type="text"
            className="form-control"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <label>Product price</label>
          <input
            type="text"
            className="form-control"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />

          <label>Product category</label>
          <select
            className="form-control"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option hidden>choose</option>
            <option>shop</option>
            <option>new arrival</option>
          </select>
          <br />

          <label>Product description</label>
          <input
            type="text"
            className="form-control"
            required
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <br />
          <input type="submit" className="btn btn-success" />
        </form>
      </div>
    </>
  );
}

export default Form;
