import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import './AdminStyles.css';
import apiList from '../../services/apiList';
import SideNavbar from './SideNavbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AddCategory = () => {
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [serviceId, setServiceId] = useState();
  const [loader, setLoader] = useState(true);

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("category", category);
    formData.append("image", image);
    // console.log(category)
    // console.log(image)
    try {
      const res = await axios.post(
        `${apiList.addingCategories}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      // console.log(res);
      if (res.data.success === true) {
        toast.success(res.data.message);
        getCategoryData();
      }
      setCategory("");
      setImage("");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const getCategoryData = async (e) => {
    try {
      const res = await axios.get(`${apiList.gettingCategories}`);

      // console.log(res.data)
      if (res.data.success === true) {
        setLoader(false);
        setCategoryData(res.data.categories);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  // getting single category with id
  const editCategory = async (_id) => {
    // console.log(_id)
    try {
      setServiceId(_id);
      const res = await axios.get(
        `${apiList.gettingCategoriesId}/${_id}`
      );
      // console.log(res)
      setCategory(res.data.category);
      setImage(res.data.image);
    } catch (error) {
      console.log(error);
    }
  };

  // editing category
  const saveCategory = async (serviceId, data) => {
    try {
      // console.log(serviceId, data)
      const res = await axios.put(
        `${apiList.editingCategories}/${serviceId}`,
        data
      );
      // console.log(res.data)
      if (res.data.success === true) {
        toast.success(res.data.message);
        getCategoryData();
      }
      setCategory("");
      setImage("");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  // delete category
  const deleteCategory = async (_id) => {
    try {
      const res = await axios.delete(
        `${apiList.deletingCategories}/${_id}`
      );
      // console.log(res)
      if (res.data.success === true) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  // console.log(categoryData)

  return (
    <Box sx={{ display: "flex" }}>
      <SideNavbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div className="row">
          <div className="col-10 col-md-12">
            <h1 className="text-center category_heading">Add category</h1>
            <form
              onSubmit={submitHandler}
              className="mt-3 d-flex flex-column align-items-center justify-content-center"
            >
              <div className=" w-50 my-3 category_input_container">
                <TextField
                  fullWidth
                  label="Enter category"
                  variant="outlined"
                  id="category"
                  className="inputs_style"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className=" inputs_style w-50 my-3">
                <TextField
                  fullWidth
                  variant="outlined"
                  id="image"
                  accept="image/*"
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              <div className="w-100 text-center">
                <button type="submit" className="w-50 addcategory_submit_btn">
                  Submit
                </button>
              </div>
            </form>
            {/* displaying categories */}
            <div>
              {loader ? (
                <div className="d-flex justify-content-center align-items-center mt-5">
                  <div
                    className="spinner-border spinner-border-xl "
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                // table
                <div className=" table-responsive">
                  <h1 className="my-3 text-center my-3 category_heading">
                    Registered Categories
                  </h1>
                  <table className=" table table-bordered table-hover">
                    <thead>
                      <tr className=" table_heading text-center">
                        <th scope="col">S.no</th>
                        <th scope="col">Category</th>
                        <th className="" scope="col">
                          Image
                        </th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categoryData.map((item, index) => {
                        const { _id, category, image } = item;
                        return (
                          <tr className="table_body text-center" key={_id}>
                            <td>{index + 1}</td>
                            <td>{category}</td>
                            <td>
                              <img
                                className=" category_image"
                                src={`${apiList.getCategoryImage}/${image}`}
                              />
                            </td>
                            <td>
                              <div className=" d-flex justify-content-center align-items-center">
                                <button
                                  onClick={() => editCategory(_id)}
                                  className=" services_and_category_edit_btn mx-3"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editModal"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => deleteCategory(_id)}
                                  className=" services_and_category_delete_btn"
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
            {/* edit modal */}
            <div className="edit_model">
              <div className="modal model_style" id="editModal">
                <div className="modal-dialog modal-lg modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Find Dubai Services</h4>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>
                    {/* model body */}
                    <div className="modal-body">
                      <h4 className="my-2">Edit category</h4>
                      <form
                        className=" d-flex flex-column justify-content-center align-items-center"
                        onSubmit={(e) => e.preventDefault()}
                      >
                        <div className=" inputs_style w-50 my-3">
                          <TextField
                            fullWidth
                            label="Enter category"
                            variant="outlined"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          />
                        </div>

                        <div className=" inputs_style w-50 my-3">
                          <TextField
                            fullWidth
                            variant="outlined"
                            id="image"
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                          />
                        </div>
                        <div className="input-container text-center pt-2">
                          <button
                            className="services_modal_save_btn"
                            data-bs-dismiss="modal"
                            onClick={() =>
                              saveCategory(serviceId, {
                                category,
                                image,
                              })
                            }
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="modal-footer">
                      <button
                        type="button"
                        className="services_modal_close_btn"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default AddCategory;

