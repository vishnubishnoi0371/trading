import React from "react";
import { Samsung } from "../All_svg/icon";
import samsung from "../Assets/images/webp/samsung.png";

const AverageUser = () => {
  return (
    <div className="pt-5 mt-5">
      <div className="mx-auto mw_890 pt-y mt-5">
        <h1 className="fs-xl ff-sans text-center mx-auto mt-5 fw-bold mw_751 mb-5 lh-44 off-black-02">
          Average Weekly Earnings of a Registered User From a $250 investment =
          $521
        </h1>
        <div className="gap-40 d-flex flex-wrap align-items-center">
          <div className="position-relative svg-container z-3 avgCard">
            <a href="" className="">
              <Samsung />
            </a>
            <img
              className="avgImages position-absolute  z-2 "
              src={samsung}
              alt=""
            />
          </div>
          <a href="">
            <Samsung />
          </a>
          <a href="">
            <Samsung />
          </a>
          <a href="">
            <Samsung />
          </a>
          <a href="">
            <Samsung />
          </a>
          <a href="">
            <Samsung />
          </a>
          <a href="">
            <Samsung />
          </a>
          <a href="">
            <Samsung />
          </a>
          <a href="">
            <Samsung />
          </a>
          <a href="">
            <Samsung />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AverageUser;
