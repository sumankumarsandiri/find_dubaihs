import React, {useEffect, useState} from 'react';
import axios from "axios";
import TextField from '@mui/material/TextField';
import { toast } from "react-toastify";
import { useMainContext } from '../context/mainContext';

const Addservice = () => {
  const { addService } = useMainContext();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  const submitHandler = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("location",location);
    formData.append("image", image);
    // console.log(name)
    // console.log(formData)
    
    if (name === "") {
      toast.error("Please enter service name");
    } else if (email === "") {
      toast.error("Please enter Email");
    } else if (phoneNumber === "") {
      toast.error("Please enter your mobile number");
    } else if (category === "") {
      toast.error("Please enter category");
    } else if (description === "") {
      toast.error("Please add description");
    } else if (location === "") {
      toast.error("Please add location");
    }else if (image === "") {
      toast.error("Please add image");
    } else {
      try {
        addService(formData);
        setName("");
        setEmail("");
        setPhoneNumber("");
        setCategory("");
        setDescription("");
        setLocation("");
        setImage("");
      } catch (error) {
        console.log(error)
      }
    }
    
}

  return (
    <>
      <div className=" my-3 mx-3">
        <button
          type="button"
          className="add_service_btn"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
        >
          + Add Services
        </button>
      </div>
      <div className="my_model">
        <div className="modal model_style" id="myModal">
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
                <h3 className='my-3'>Add Service</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className=" material_container">
                    <div className=' d-flex flex-column flex-md-row w-100'>
                      <div className=" inputs_style w-100 w-md-50 my-3 my-md-0">
                        <TextField
                          fullWidth
                          label="Enter service name"
                          variant="outlined"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className=" inputs_style w-100 w-md-50 mx-0 mx-md-3 ">
                        <TextField
                          fullWidth
                          type='email'
                          label="Enter Email"
                          variant="outlined"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className=' d-flex flex-column flex-md-row w-100 mt-2'>
                      <div className=" inputs_style w-100 w-md-50 my-3 my-md-0">
                        <TextField
                          fullWidth
                          label="Enter Mobile number"
                          variant="outlined"
                          id="phoneNumber"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                      <div className=" inputs_style w-100 w-md-50 my-3 my-md-0 mx-0 mx-md-3">
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
                      <div className="mt-3 inputs_style w-100">
                        <TextField
                          fullWidth
                          label="Enter Service Description"
                          variant="outlined"
                          id="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                    <div className=' d-flex flex-column flex-md-row w-100 mt-3'>
                      <div className="inputs_style w-100 w-md-50 my-3 my-md-0 ">
                        <TextField
                          fullWidth
                          label="Enter Location"
                          variant="outlined"
                          id="location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </div>
                      <div className=" inputs_style w-100 w-md-50 my-3 my-md-0 mx-0 mx-md-3">
                        <TextField
                          fullWidth
                          variant="outlined"
                          id="image"
                          type='file'
                          onChange={(e) => setImage(e.target.files[0])}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-container text-center pt-2">
                    <button
                      className="services_modal_save_btn"
                      data-bs-dismiss="modal"
                      onClick={submitHandler}
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
    </>
  );
}

export default Addservice
