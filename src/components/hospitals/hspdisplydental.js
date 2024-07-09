import React from 'react'
import './hspdisplydental.css';


    import dental from "../../assets/images/dental.jpg";
    import {
      PersonCircle,
      Share,
      Signpost,
      Star,
      StarFill,
      StarHalf,
      Stars,
      SuitHeartFill,
    } from "react-bootstrap-icons";
    
    import { Tabs } from "antd";
    import { useEffect, useState } from "react";
    import axios from "axios";
    const { TabPane } = Tabs;
    function Hspdisplydental() {
      const [bookItem, setbookItem] = useState({
        firstname: "",
        lastname: "",
        address: "",
        phonenumber: "",
        selectyouritem: "",
      });
    
      const handleChange = (e) => {
        setbookItem({ ...bookItem, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:8000/api/bookItem", bookItem);
          alert("Details saved");
          // Optionally, you can add a success message or redirect the user
        } catch (error) {
          console.error("Error submitting review:", error);
          // Handle error
        }
      };
      useEffect(() => {}, []);
    return (
      <div>
      <img src={dental} className="hosdisplay_1"></img>
      <div className="hosdisplay_container ">
        <h4>
          cardiology Hospital
          {/* <span className='rainbow_hospital_ratings'>4.2<StarFill style={{ fontSize: '10px' }}></StarFill></span> */}
          <span className="hosdisplay_ratings" style={{ color: "#40E0D0" }}>
            <StarFill></StarFill>
            <StarFill></StarFill>
            <StarFill></StarFill>
            <StarFill></StarFill>
            <StarHalf></StarHalf>{" "}
          </span>
        </h4>
        <h6 style={{ color: "GrayText" }}>
          {" "}
          Consulates Area, Sheikh Khalifa Bin Zayed Road, 
          Bur Dubai - Dubai - United Arab Emirates
        </h6>
        <h6 className="hosdisplay_timings">Open ⋅ Closes 11:30 pm</h6>
        <span
          style={{
            padding: "8px",
            borderRadius: "8px",
            marginTop: "15px",
            background: "#40E0D0",
            color: " white",
          }}
        >
          <Signpost></Signpost> &nbsp;Direction{" "}
        </span>{" "}
        &nbsp; &nbsp;&nbsp; &nbsp;
        <span
          style={{
            padding: "8px",
            borderRadius: "8px",
            marginTop: "15px",
            background: "#40E0D0",
            color: "white",
          }}
        >
          <Share></Share> &nbsp;Share{" "}
        </span>
        &nbsp; &nbsp;&nbsp; &nbsp;
        <span
          style={{
            padding: "8px",
            borderRadius: "8px",
            marginTop: "15px",
            background: "#40E0D0",
            color: "white",
          }}
        >
          <SuitHeartFill></SuitHeartFill>&nbsp; Favorites{" "}
        </span>
        <div className="mt-4 ">
          <Tabs defaultActivekey="1">
            <TabPane tab="Overview" key="1">
              <h3> About this Hospital</h3>
              <p className="menu-item-list_hsp">
                World Class Doctors And Skilled Experinced Surgens.{" "}
              </p>
              <p>
                <b>Address:</b>  Consulates Area, Sheikh Khalifa Bin Zayed Road, 
                Bur Dubai - Dubai - United Arab Emirates
              </p>

              <p>
                <b> Hours:</b>
                Open 9:00 AM - Close 11:30 PM
              </p>
              <p>
                <b> Phone: </b>080740 44409
              </p>
            </TabPane>
            <TabPane tab="Special Treatmeant In" key="2">
              <li>
                <b> Coronary Artery Disease </b>
              </li>
              <li>
                <b>Heart Arrhythmias</b>{" "}
              </li>
              <li>
                <b>Heart Failure</b>{" "}
              </li>
              <li>
                <b>Heart Valve Disease</b>{" "}
              </li>
              <li>
                <b>Pericardial Disease</b>{" "}
              </li>
            </TabPane>
            <TabPane tab="Review & Ratings" key="3" style={{ width: "400px" }}>
              <li className="menu-item-list_hsp">
                <h4>Cardiology Hospital</h4>
              </li>
              <li>All Reviews</li>
              <div>
                <span>
                  <PersonCircle></PersonCircle>
                </span>
                &nbsp;&nbsp;<span>Raviteja</span>
              </div>
              <div className="mt-3">
                <span
                  style={{
                    border: "1px solid",
                    color: "white",
                    background: "#40E0D0",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  4.2&nbsp;<StarFill style={{ fontSize: "10px" }}></StarFill>
                </span>
                &nbsp;&nbsp;
                <span>Cordiology </span>
                <p className="mt-2">
                  "Friendly Atmosphere"
                </p>
                <hr></hr>
              </div>
              <form>
                <h2>Question & Answers</h2>
                <div>
                  <label>Would you like to ask a question?</label>
                  <div>
                    <input
                      type="text"
                      placeholder="Post your Question"
                      className="mt-2"
                    ></input>
                  </div>
                </div>
              </form>
              <h5 className="mt-4">Start your Rating</h5>
              <span className="mt-4">
                <Star
                  style={{
                    border: "1px solid",
                    borderRadius: "5px",
                    padding: "10px",
                    fontSize: "50px",
                  }}
                ></Star>
              </span>{" "}
              &nbsp;&nbsp; &nbsp;&nbsp;
              <span className="mt-4">
                <Star
                  style={{
                    border: "1px solid",
                    borderRadius: "5px",
                    padding: "10px",
                    fontSize: "50px",
                  }}
                ></Star>
              </span>{" "}
              &nbsp;&nbsp; &nbsp;&nbsp;
              <span className="mt-4">
                <Star
                  style={{
                    border: "1px solid",
                    borderRadius: "5px",
                    padding: "10px",
                    fontSize: "50px",
                  }}
                ></Star>
              </span>{" "}
              &nbsp;&nbsp; &nbsp;&nbsp;
              <span className="mt-4">
                <Star
                  style={{
                    border: "1px solid",
                    borderRadius: "5px",
                    padding: "10px",
                    fontSize: "50px",
                  }}
                ></Star>
              </span>{" "}
              &nbsp;&nbsp; &nbsp;&nbsp;
              <span className="mt-4">
                <Star
                  style={{
                    border: "1px solid",
                    borderRadius: "5px",
                    padding: "10px",
                    fontSize: "50px",
                  }}
                ></Star>
              </span>
              <div className="mt-5">
                <span
                  style={{
                    border: "1px solid",
                    borderRadius: "10px",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <b>Write a Review</b>
                </span>
              </div>
            </TabPane>
            <TabPane
              tab="Book Your OPPOIENTMENT"
              key="4"
              className="hosdisplay_form_container"
            >
              <form onSubmit={handleSubmit}>
                <div class="row g-3">
                  <div class=" col-lg-6 col-sm-12">
                    <input
                      type="text"
                      name="firstname"
                      value={bookItem.firstname}
                      className="form-control "
                      placeholder="First name"
                      aria-label="First name"
                      onChange={handleChange}
                      style={{ width: "400px" }}
                    />
                  </div>
                  <div class="col-lg-6 col-sm-12 ">
                    <input
                      type="text"
                      name="lastname"
                      value={bookItem.lastname}
                      className="form-control hospital_form_inputs"
                      placeholder="Last name"
                      aria-label="Last name"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="row g-3 mt-3">
                  <div class="col-lg-6 col-sm-12">
                    <input
                      type="text"
                      name="address"
                      value={bookItem.address}
                      className="form-control "
                      placeholder="Address"
                      aria-label="Address"
                      onChange={handleChange}
                      style={{ width: "400px" }}
                    />
                  </div>
                  <div class="col-lg-6 col-sm-12 ">
                    <input
                      type="text"
                      name="phonenumber"
                      value={bookItem.phonenumber}
                      className="form-control hospital_form_inputs"
                      placeholder="Phone Number"
                      aria-label="Phone Number"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <select
                    className="form-control mt-4"
                    name="selectyouritem"
                    value={bookItem.selectyouritem}
                    onChange={handleChange}
                    style={{ width: "400px" }}
                  >
                    <option>--- Select Your Treatmeant ----</option>
                    <option>Coronary Artery Disease</option>
                    <option>Heart Arrhythmias</option>
                    <option>Heart Failure</option>
                    <option>Heart Valve Disease</option>
                    <option>Pericardial Disease</option>
                  </select>
                </div>
                <div className="mt-4">
                  <button
                    style={{
                      border: "1px solid",
                      color: "white",
                      background: "#40E0D0",
                      padding: "10px",
                      borderRadius: "5px",
                      fontSize: "20px",
                      width: "100px",
                      height: "50px",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
      );
}

export default Hspdisplydental