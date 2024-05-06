import { useState } from "react";

const mycardinfo = [
  {
    name: "03",
    para: "Places left to register",
  },
  {
    name: "135",
    para: "Average Registrations per day",
  },
  {
    name: "5X",
    para: "The Average Earnings Increase",
  },
];
const Statistics = () => {
  const [first, setfirst] = useState();
  function index(first) {
    setfirst(!first);
  }

  const mycard = mycardinfo.map((mycard) => (
    <div className=" staticCard ">
      <div className=" mx-auto d-flex justify-content-center flex-column ">
        <p className="fs-xxl ff-sans text-center fw-bold lh-65 mb-2 off-black-2">
          {mycard.name}
        </p>
        <p className="fs-md fw-semibold text-center mw_212 lh-26 mb-0 off-black-02 ff-sans">
          {mycard.para}
        </p>
      </div>
    </div>
  ));
  return (
    <div className="statics_bg ">
      <div className="container ">
        <div className="d-flex flex-wrap align-items-center  justify-content-between">
          <h1
            data-aos="zoom-in"
            className="fs-xxl mx-auto text-center mx-lg-0 mb-4 mb-xl-0 ff-sans mw_249 text-white lh-60 fw-bold"
          >
            Statistics For Today
          </h1>
          <div
            data-aos="zoom-in"
            className="gap-4 d-flex flex-wrap justify-content-center"
          >
            {mycard}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
