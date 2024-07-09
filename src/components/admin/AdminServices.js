import React, {useEffect, useState} from 'react';
import SideNavbar from './SideNavbar';
import { CiSearch } from "react-icons/ci";
import apiList from '../../services/apiList';
import { useMainContext} from "../context/mainContext";
import './AdminStyles.css';
import Addservice from './Addservice';
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import AddCategory from './AddCategory';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AdminServices = () => {
  const {
    isLoading,
    services,
    searchServices,
    saveOnEdit,
    deleteService,
    decrementPage,
    incrementPage,
    getPageNumber,
    page,
    totalPages,
  } = useMainContext();
  // console.log(isLoading)
  const [searchValue, setSearchValue] = useState("");
  const [serviceId, setServiceId] = useState();
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  const checkValidUser = () => {
    const admin = Cookies.get("admin_jwt");
    // console.log(admin)
    if (admin === "false" || admin === undefined) {
      toast.error("Unauthorized user");
      navigate("/login");
    }
  };
  useEffect(() => {
    checkValidUser();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
    searchServices(e.target.value);
  };

  const editService = async (_id) => {
    // console.log(_id)
    try {
      setServiceId(_id);
      const res = await axios.get(
        `${apiList.gettingServiceId}/${_id}`
      );
      setName(res.data.name);
      setEmail(res.data.email);
      setPhoneNumber(res.data.phoneNumber);
      setCategory(res.data.category);
      setDescription(res.data.description);
      setLocation(res.data.location);
      setImage(res.data.image);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(totalPages)

  let pagesArray = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesArray.push(i);
  }
  // console.log(pagesArray)

  return (
    <Box sx={{ display: "flex" }}>
      <SideNavbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div className=" row">
          <div className=" col-10 col-md-12">
            {/* search box*/}
            <div className="mt-5">
              <div className="search_container">
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="search_input"
                  placeholder="Search services"
                  value={searchValue}
                  onChange={onChangeSearchInput}
                />
                <button
                  className="search_btn"
                  onClick={() => searchServices(searchValue)}
                >
                  <CiSearch className="search_icon" />
                </button>
              </div>
            </div>
            {/* adding service */}
            <Addservice />
            {/* displaying services */}
            {isLoading ? (
              <div className="d-flex justify-content-center align-items-center">
                <div
                  className="spinner-border spinner-border-xl "
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div>
                {services.length < 1 ? (
                  <div className=" d-flex justify-content-center align-items-center">
                    <h1>No results found</h1>
                  </div>
                ) : (
                  <div className=" table-responsive">
                    <table className=" table table-bordered table-hover">
                      <thead>
                        <tr className=" table_heading text-center">
                          <th scope="col">S.no</th>
                          <th scope="col">Name</th>
                          <th scope="col">Category</th>
                          <th className="mobile_col" scope="col">
                            Mobile
                          </th>
                          <th className="location_col" scope="col">
                            Location
                          </th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {services.map((service, index) => {
                          const { _id, name, category, phoneNumber, location } =
                            service;
                          return (
                            <tr className="table_body text-center" key={_id}>
                              <td>{index + 1}</td>
                              <td>{name}</td>
                              <td>{category}</td>
                              <td className="">{phoneNumber}</td>
                              <td>{location}</td>
                              <td>
                                <div className=" d-flex">
                                  <button
                                    onClick={() => editService(_id)}
                                    className="services_and_category_edit_btn mx-3"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editModal"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    onClick={() => deleteService(_id)}
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
            )}
            {/* edit modal */}

            <div className="my_model">
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
                      <h3 className="my-3">Add Service</h3>
                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className=" material_container">
                          <div className=" d-flex w-100">
                            <div className=" inputs_style w-50">
                              <TextField
                                fullWidth
                                label="Enter service name"
                                variant="outlined"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                            <div className=" inputs_style w-50 mx-2">
                              <TextField
                                fullWidth
                                label="Enter Email"
                                variant="outlined"
                                id="enail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className=" d-flex w-100 mt-3">
                            <div className=" inputs_style w-50">
                              <TextField
                                fullWidth
                                label="Enter Mobile number"
                                variant="outlined"
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                              />
                            </div>
                            <div className=" inputs_style w-50 mx-2">
                              <TextField
                                fullWidth
                                label="Enter category"
                                variant="outlined"
                                id="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className=" d-flex w-100 mt-3">
                            <div className=" inputs_style w-100">
                              <TextField
                                fullWidth
                                label="Enter Service Description"
                                variant="outlined"
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className=" d-flex w-100 mt-3">
                            <div className=" inputs_style w-50">
                              <TextField
                                fullWidth
                                label="Enter Location"
                                variant="outlined"
                                id="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                              />
                            </div>
                            <div className=" inputs_style w-50 mx-2">
                              <TextField
                                fullWidth
                                variant="outlined"
                                id="image"
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="input-container text-center pt-2">
                          <button
                            className="services_modal_save_btn"
                            data-bs-dismiss="modal"
                            onClick={() =>
                              saveOnEdit(serviceId, {
                                name,
                                email,
                                phoneNumber,
                                category,
                                description,
                                location,
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
            {/* pagination */}
            <nav className=" d-flex justify-content-center mx-3 mt-5" aria-label="Page navigation example">
              <ul className="pagination">
                {page !== 1 && (
                  <li className="page-item">
                    <button onClick={decrementPage} className="page-link">
                      Previous
                    </button>
                  </li>
                )}
                {pagesArray.map((eachPage) => (
                  <li
                    className={`page-item ${page === eachPage ? "active" : ""}`}
                    key={eachPage}
                  >
                    <button
                      onClick={() => getPageNumber(eachPage)}
                      className="page-link"
                    >
                      {eachPage}
                    </button>
                  </li>
                ))}
                <li className="page-item">
                  <button onClick={incrementPage} className="page-link">
                    Next
                  </button>
                </li>
              </ul>
            </nav>            
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default AdminServices;

