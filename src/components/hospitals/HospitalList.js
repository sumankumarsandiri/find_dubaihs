import React from "react";
import "./hospitalList.css";

import HospitalStar from "./HospitalStar";
import {
  Chat,
  GeoAlt,
  Heart,
  Phone,
  Table,
  Telephone,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { hospitallistings } from "./hospitallistings";

const HospitalList = () => {
  const [showMore] = useState(6);

  return (
    <div>
      <h2
        className="top-hospital-main-heading "
        style={{ textAlign: "center", marginTop: "100px" }}
      >
        Best Multi-Speacility Hospitals In Dubai
      </h2>
      {hospitallistings?.slice(0, showMore).map((listing, index) => (
        <div key={index}>
          <div className="hospitallist_containerr mt-5">
            <img
              className="hospitallist_image-1"
              src={listing.imageSrc}
              alt={listing.name}
            />
            <div className="hospitallist_text">
              <h1 className="hospitallist_names">{listing.hospitalName}</h1>
              <span className=" mt-2 hospitallistspan_names">
                4.9
                <HospitalStar />
                {/* <Star className="hospitallist_names">
                 
                </Star> */}
              </span>
              <p className="mt-3 hospitallist_names">
                <GeoAlt></GeoAlt>
                {listing.location}
              </p>
              <br></br>
              <span
                className="hospitallist_names"
                style={{
                  backgroundColor: "#6ad4cf",
                  color: "white",
                  cursor: "pointer",
                  border: "none",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <Telephone></Telephone> Show Number
              </span>{" "}
              &nbsp; &nbsp;
              <Link
                to="/hspgenral"
                style={{ textDecoration: "none", color: "white" }}
              >
                <span
                  className="hospitallist_names"
                  style={{
                    backgroundColor: "#d4be6a",
                    color: "white",
                    cursor: "pointer",
                    border: "none",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <Table></Table> Book Oppointment
                </span>{" "}
                &nbsp; &nbsp;
              </Link>
              <span
                className="hospitallist_names"
                style={{
                  backgroundColor: "#e6ebea",
                  color: "black",
                  cursor: "pointer",
                  border: "none",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <Chat></Chat> Chat
              </span>{" "}
              &nbsp; &nbsp;
            </div>
          </div>
        </div>
      ))}

      {/* <div className="hospitallist_containerr mt-5 ">
        <img className="hospitallist_image-1" src={Medeor} alt="dubai"></img>
        <div className="hospitallist_text">
          <h1 className="hospitallist_names">Medeor 24x7 Hospital, Dubai</h1>
          <span className="haleem_ratings mt-2 hospitallist_names">
            4.9
          </span>{" "}
          &nbsp; &nbsp; <Star className="hospitallist_names"></Star>{" "}
          <Star className="hospitallist_names"></Star>{" "}
          <Star className="hospitallist_names"></Star>{" "}
          <Star className="hospitallist_names"></Star>{" "}
          <Star className="hospitallist_names"></Star>
          <p className="mt-3 hospitallist_names">
            <GeoAlt></GeoAlt> Consulates Area, Sheikh Khalifa Bin Zayed Road,
            Bur Dubai - Dubai - United Arab Emirates{" "}
          </p>
          <br></br>
          <span
            className="hospitallist_names"
            style={{
              backgroundColor: "#6ad4cf",
              color: "white",
              cursor: "pointer",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <Telephone></Telephone> Show Number
          </span>{" "}
          &nbsp; &nbsp;
          <Link
            to="/hspgenral"
            style={{ textDecoration: "none", color: "white" }}
          >
            <span
              className="hospitallist_names"
              style={{
                backgroundColor: "#d4be6a",
                color: "white",
                cursor: "pointer",
                border: "none",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <Table></Table> Book Oppointment
            </span>{" "}
            &nbsp; &nbsp;
          </Link>
          <span
            className="hospitallist_names"
            style={{
              backgroundColor: "#e6ebea",
              color: "black",
              cursor: "pointer",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <Chat></Chat> Chat
          </span>{" "}
          &nbsp; &nbsp;
        </div>
      </div> */}
      {/* <div className="hospitallist_containerr mt-5 ">
        <img className="hospitallist_image-1" src={dental} alt="dubai"></img>
        <div className="hospitallist_text">
          <h1 className="hospitallist_names">Dental Hospital </h1>
          <span className="haleem_ratings mt-2 hospitallist_names">
            4.4
          </span>{" "}
          &nbsp; &nbsp; <Star className="hospitallist_names"></Star>{" "}
          <Star className="hospitallist_names"></Star>{" "}
          <Star className="hospitallist_names"></Star>{" "}
          <Star className="hospitallist_names"></Star>{" "}
          <Star className="hospitallist_names"></Star>
          <p className="mt-3 hospitallist_names">
            <GeoAlt></GeoAlt>  Consulates Area, Sheikh Khalifa Bin Zayed Road, 
            Bur Dubai - Dubai - United Arab Emirates{" "}
          </p>
          <br></br>
          <span
            className="hospitallist_names"
            style={{
              backgroundColor: "#6ad4cf",
              color: "white",
              cursor: "pointer",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <Telephone></Telephone> Show Number
          </span>{" "}
          &nbsp; &nbsp;
          <Link
            to="/hspdental"
            style={{ textDecoration: "none", color: "white" }}
          >
          <span
            className="hospitallist_names"
            style={{
              backgroundColor: "#d4be6a",
              color: "white",
              cursor: "pointer",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <Table></Table> Book Oppointment
          </span>{" "}
          &nbsp; &nbsp;
          </Link>
          <span
            className="hospitallist_names"
            style={{
              backgroundColor: "#e6ebea",
              color: "black",
              cursor: "pointer",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <Chat></Chat> Chat
          </span>{" "}
          &nbsp; &nbsp;
        </div>
      </div>
      <div className="hospitallist_containerr mt-5 ">
        <img className="hospitallist_image-1" src={cardiology} alt="dubai"></img>
        <div className="hospitallist_text">
          <h1 className="hospitallist_names">Cardiology Hospital</h1>
          <span className="haleem_ratings mt-2 hospitallist_names">
            4.5
          </span>{" "}
          &nbsp; &nbsp; <Star className="hospitallist_names"></Star>{" "}
          <Star className="hospitallist_names"></Star>{" "}
          <Star className="hospitallist_names"></Star>{" "}
          <Star className="hospitallist_names"></Star>{" "}
          <Star className="hospitallist_names"></Star>
          <p className="mt-3 hospitallist_names">
            <GeoAlt></GeoAlt>  Consulates Area, Sheikh Khalifa Bin Zayed Road, 
            Bur Dubai - Dubai - United Arab Emirates{" "}
          </p>
          <br></br>
          <span
            className="hospitallist_names"
            style={{
              backgroundColor: "#6ad4cf",
              color: "white",
              cursor: "pointer",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <Telephone></Telephone> Show Number
          </span>{" "}
          &nbsp; &nbsp;
          <Link
            to="/hospitaldisplay"
            style={{ textDecoration: "none", color: "white" }}
          >
            <span
              className="hospitallist_names"
              style={{
                backgroundColor: "#d4be6a",
                color: "white",
                cursor: "pointer",
                border: "none",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <Table></Table> Book Oppointment
            </span>{" "}
            &nbsp; &nbsp;
          </Link>
          <span
            className="hospitallist_names"
            style={{
              backgroundColor: "#e6ebea",
              color: "black",
              cursor: "pointer",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <Chat></Chat> Chat
          </span>{" "}
          &nbsp; &nbsp;
        </div>
      </div>
      <div className="hospitallist_containerr mt-5 ">
        <img className="hospitallist_image-1" src={neuro} alt="dubai"></img>
        <div className="hospitallist_text">
          <h1 className="hospitallist_names">Neuro Hospital</h1>
          <span className="haleem_ratings mt-2 hospitallist_names">
            4.9
          </span>{" "}
          &nbsp; &nbsp; <Star className="hospitallist_names"></Star>{" "}
          <Star className="hospitallist_names"></Star>{" "}
          <Star className="hospitallist_names"></Star>{" "}
          <Star className="hospitallist_names"></Star>{" "}
          <Star className="hospitallist_names"></Star>
          <p className="mt-3 hospitallist_names">
            <GeoAlt></GeoAlt> Consulates Area, Sheikh Khalifa Bin Zayed Road, 
            Bur Dubai - Dubai - United Arab Emirates{" "}
          </p>
          <br></br>
          <span
            className="hospitallist_names"
            style={{
              backgroundColor: "#6ad4cf",
              color: "white",
              cursor: "pointer",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <Telephone></Telephone> Show Number
          </span>{" "}
          &nbsp; &nbsp;
          <Link
            to="/hspneuro"
            style={{ textDecoration: "none", color: "white" }}
          >
          <span
            className="hospitallist_names"
            style={{
              backgroundColor: "#d4be6a",
              color: "white",
              cursor: "pointer",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <Table></Table> Book Oppointment
          </span>{" "}
          </Link>
          &nbsp; &nbsp;
          <span
            className="hospitallist_names"
            style={{
              backgroundColor: "#e6ebea",
              color: "black",
              cursor: "pointer",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <Chat></Chat> Chat
          </span>{" "}
          &nbsp; &nbsp;
        </div>
      </div> */}
    </div>
  );
};

export default HospitalList;
