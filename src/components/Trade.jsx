import React from "react";
import phone from "../Assets/images/webp/trade-mobile.webp";
import CommonBtn from "../common/CommonBtn";

const Trade = () => {
  return (
    <div className="pt-5 my-md-5 pb-xl-5">
      <div className="container pt-xl-5 pb-5 mt-md-5">
        <div className="row align-items-center pb-md-5 mb-4 pt-md-5 mt-2 justify-content-center justify-content-lg-between">
          <div data-aos="zoom-in" className="col-md-4 col-12">
            <img className="w-100 h-100" src={phone} alt="" />
          </div>
          <div data-aos="zoom-in" className="col-md-7 col-12">
            <h1 className="fs-xxl fw-bold text-center mt-5 mt-md-0 text-md-start ff-sans off-black-02 mw_513 lh-60 mb-3">
              <span className="font-gradient">Trade long</span> and short with
              <span className="font-gradient2"> leverage</span>
            </h1>
            <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-5 flex-wrap gap-2 gap-md-4">
              <a
                href="#"
                className="commonBtn fs-md fw-bold d-flex align-items-center justify-content-center ff-sans lh-27 off-black-02"
              >
                Stocks
              </a>
              <a
                href="#"
                className="commonBtn fs-md fw-bold d-flex align-items-center justify-content-center ff-sans lh-27 off-black-02"
              >
                Crypto
              </a>
              <a
                href="#"
                className="commonBtn fs-md fw-bold d-flex align-items-center justify-content-center ff-sans lh-27 off-black-02"
              >
                Commodities{" "}
              </a>
              <a
                href="#"
                className="commonBtn fs-md fw-bold d-flex align-items-center justify-content-center ff-sans lh-27 off-black-02"
              >
                Forex
              </a>
              <a
                href="#"
                className="commonBtn fs-md fw-bold d-flex align-items-center justify-content-center ff-sans lh-27 off-black-02"
              >
                Indices{" "}
              </a>
            </div>
            <div className="d-flex justify-content-center  justify-content-md-start">
              <CommonBtn text="Get your share in seconds" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
