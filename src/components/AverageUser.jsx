import React from "react";
import samsung from "../Assets/images/webp/samsung.webp";
import ford from "../Assets/images/webp/ford.webp";
import relience from "../Assets/images/webp/relince.webp";
import adani from "../Assets/images/webp/adani.webp";
import stripe from "../Assets/images/webp/stripe.webp";
import google from "../Assets/images/webp/google.webp";
import spotify from "../Assets/images/webp/spotyfy.webp";
import tata from "../Assets/images/webp/tata.webp";
import tesla from "../Assets/images/webp/tesla.webp";
import CommonBtn from "../common/CommonBtn";

const AverageUser = () => {
  return (
    <div className="py-md-5 mt-md-5">
      <div className="mx-auto mw_890 pt-md-5 mt-5">
        <h1
          data-aos="zoom-in"
          className="fs-xl ff-sans text-center mx-auto mt-5  fw-bold mw_751 mb-5 lh-44 off-black-02"
        >
          <span className="font-gradient"> Average Weekly Earnings</span> of a
          Registered User From a $250{" "}
          <span className="font-gradient">investment = $521</span>
        </h1>
        <div className="d-flex align-items-center  justify-content-center flex-wrap avg_user mx-auto">
          <div className="polygon d-flex alignitems-center justify-content-center c_pointer ">
            <img
              data-aos="zoom-in"
              className="avg_imgs"
              src={samsung}
              alt="samsung "
            />
          </div>
          <div className="polygon d-flex alignitems-center justify-content-center c_pointer ">
            <img data-aos="zoom-in" className="avg_imgs" src={ford} alt="ford " />
          </div>
          <div className="polygon d-flex alignitems-center justify-content-center c_pointer ">
            <img
              data-aos="zoom-in"
              className="avg_imgs"
              src={stripe}
              alt="company"
            />
          </div>
          <div className="polygon d-flex alignitems-center justify-content-center c_pointer ">
            <img
              data-aos="zoom-in"
              className="avg_imgs"
              src={relience}
              alt="reliance "
            />
          </div>
          <div className="polygon d-flex alignitems-center justify-content-center c_pointer ">
            <img data-aos="zoom-in" className="avg_imgs" src={adani} alt="adani " />
          </div>
          <div className="polygon d-flex alignitems-center justify-content-center c_pointer ">
            <img
              data-aos="zoom-in"
              className="avg_imgs"
              src={stripe}
              alt="stripe "
            />
          </div>
          <div className="polygon d-flex alignitems-center justify-content-center c_pointer ">
            <img
              data-aos="zoom-in"
              className="avg_imgs"
              src={google}
              alt="google "
            />
          </div>
          <div className="polygon d-flex alignitems-center justify-content-center c_pointer ">
            <img
              data-aos="zoom-in"
              className="avg_imgs"
              src={spotify}
              alt="spotify "
            />
          </div>
          <div className="polygon d-flex alignitems-center justify-content-center c_pointer ">
            <img data-aos="zoom-in" className="avg_imgs" src={tata} alt="tata " />
          </div>
          <div className="polygon d-flex alignitems-center justify-content-center c_pointer ">
            <img data-aos="zoom-in" className="avg_imgs" src={tesla} alt="tesla " />
          </div>
        </div>
        <div data-aos="zoom-in" className="d-flex justify-content-center mt-5 ">
          <CommonBtn text="Register Now" />
        </div>
      </div>
    </div>
  );
};

export default AverageUser;
