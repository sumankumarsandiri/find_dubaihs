import React from "react";
import "./hospitalHome01.css";
import Slider from "react-slick";
import neuro from "../../assets/images/neurohsp.jpg";
import aster from "../../assets/images/aster hsp.jpg";
import emarets from "../../assets/images/emarets hsp.jpg";
import medor from "../../assets/images/medor hspt.jpg";
import kabab from "../../assets/images/kabab.jpg";
import biscuit from "../../assets/images/biscuit.webp";

import hspcorsl2 from "../../assets/images/hspcorsl2.jpg";
import hspcorsl1 from "../../assets/images/hspcorsl1.jpg";
import hspcorsl from "../../assets/images/hspcorsl.jpg";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const HospitalHome = () => {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      {/* <div className="hospital_carousel">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
          // className="container"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner h-120px">
            <div class="carousel-item active">
              <img
                class="d-block w-100 hospital_images"
                src={hspcorsl2}
                alt="First slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 hospital_images"
                src={hspcorsl1}
                alt="Second slide"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100 hospital_images"
                src={hspcorsl}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div> */}
      <div className="hoscarousel">
        <Carousel className="hoscarousel01">
          <Carousel.Item className="hoscarousel02">
            <img
              class="d-block w-100 h-100 hoscarouselimage"
              src={hspcorsl2}
              alt="First slide"
            />
            {/* <ExampleCarouselImage text="First slide" /> */}
          </Carousel.Item>
          <Carousel.Item className="hoscarousel02">
            <img
              class="d-block w-100 h-100 hoscarouselimage"
              src={hspcorsl1}
              alt="Second slide"
            />
            {/* <ExampleCarouselImage text="Second slide" /> */}
          </Carousel.Item>
          <Carousel.Item className="hoscarousel02">
            {/* <ExampleCarouselImage text="Third slide" /> */}

            <img
              class="d-block w-100 h-100 hoscarouselimage"
              src={hspcorsl}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>

      <br></br>
      <h1 className="hospital_title">
        <span
          style={{
            color: "rgb(64, 224, 208)",
          }}
        >
          Top Rated
        </span>{" "}
        Hospitals
      </h1>
      <div className="hospital-slider-container">
        <Slider {...settings}>
          <div className="col-12 col-lg-3 col-md-6 col-sm-12">
            <Link
              to="/hospitallist"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                className="card mx-3 card-1"
                style={{ height: "230px", width: "300px" }}
              >
                <img
                  className="card-img-top"
                  src={neuro}
                  alt="tutor"
                  style={{ height: "150px", marginTop: "-80px" }}
                />
                <div className="card-body">
                  <h5
                    className="card-titles"
                    style={{ textAlign: "center", marginTop: "150px" }}
                  >
                    Neuro Hospital
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-12 col-lg-3 col-md-6 col-sm-12">
            <Link
              to="/hospitallist"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                className="card mx-3 card-1"
                style={{ height: "230px", width: "300px" }}
              >
                <img
                  className="card-img-top"
                  src={aster}
                  alt="tutor"
                  style={{ height: "150px", marginTop: "-80px" }}
                />
                <div className="card-body">
                  <h5
                    className="card-titles"
                    style={{ textAlign: "center", marginTop: "150px" }}
                  >
                    Aster Hospital
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-12 col-lg-3 col-md-6 col-sm-12">
            <Link
              to="/hospitallist"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                className="card mx-3 card-1"
                style={{ height: "230px", width: "300px" }}
              >
                <img
                  className="card-img-top"
                  src={emarets}
                  alt="tutor"
                  style={{ height: "150px", marginTop: "-80px" }}
                />
                <div className="card-body">
                  <h5
                    className="card-titles"
                    style={{ textAlign: "center", marginTop: "150px" }}
                  >
                    Emarets Hospital
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-12 col-lg-3 col-md-6 col-sm-12">
            <Link
              to="/hospitallist"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                className="card mx-3 card-1"
                style={{ height: "230px", width: "300px" }}
              >
                <img
                  className="card-img-top"
                  src={medor}
                  alt="tutor"
                  style={{ height: "150px", marginTop: "-80px" }}
                />
                <div className="card-body">
                  <h5
                    className="card-titles"
                    style={{ textAlign: "center", marginTop: "150px" }}
                  >
                    Medor Hospital
                  </h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-12 col-lg-3 col-md-6 col-sm-12">
            <div
              className="card mx-3 card-1"
              style={{ height: "230px", width: "200px" }}
            >
              <img
                className="card-img-top"
                src={kabab}
                alt="tutor"
                style={{ height: "150px", marginTop: "-80px" }}
              />
              <div className="card-body">
                <h5
                  className="card-titles"
                  style={{ textAlign: "center", marginTop: "150px" }}
                >
                  children hospital
                </h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 col-sm-12">
            <div
              className="card mx-3 card-1"
              style={{ height: "230px", width: "200px" }}
            >
              <img
                className="card-img-top"
                src={biscuit}
                alt="tutor"
                style={{ height: "150px", marginTop: "-80px" }}
              />
              <div className="card-body">
                <h5
                  className="card-titles"
                  style={{ textAlign: "center", marginTop: "150px" }}
                >
                  kids Hospital
                </h5>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HospitalHome;
