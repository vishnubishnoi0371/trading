import { useState } from "react";
import CommonBtn from "../common/CommonBtn";
import stock1 from "../Assets/images/webp/stock1.webp";
import stock2 from "../Assets/images/webp/stock2.webp";
import stock3 from "../Assets/images/webp/stock3.webp";
import stock4 from "../Assets/images/webp/stock4.webp";
import stock5 from "../Assets/images/webp/stock5.webp";
import stock6 from "../Assets/images/webp/stock6.webp";
import stock7 from "../Assets/images/webp/stock7.webp";
import stock8 from "../Assets/images/webp/stock8.webp";

const StaockTrading = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    number: "",
    mail: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    lastname: "",
    number: "",
    mail: "",
  });
  const [formMail, setFormMail] = useState({
    name: "",
    lastname: "",
    number: "",
    mail: "",
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    const { name, lastname, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [lastname]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = {
      name: /^[a-zA-Z\s]+$/,
      lastname: /^[a-zA-Z\s]+$/,
      number: /^\d{10}$/,
      mail: /^[a-zA-Z\s]+@/,
    };
    const errors = {};
    if (!regex.name.test(formData.name)) {
      errors.name = "First Name is invalid.";
    }
    if (!regex.name.test(formData.name)) {
      errors.name = "First Name is invalid.";
    }
    if (!regex.lastname.test(formData.lastname)) {
      errors.lastname = "Last Name is invalid.";
    }
    if (!regex.number.test(formData.number)) {
      errors.number = "Number is invalid.";
    }
    if (!regex.mail.test(formData.mail)) {
      errors.mail = "Mail is invalid.";
    }

    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setShowSuccessPopup(true);
    }
  };

  return (
    <div className="py-lg-5 py-3">
      <div className="container py-lg-5 py-3 mt-3">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-12">
            <h1
              data-aos="zoom-in"
              className="fs-xxl lh-60 mx-auto mx-lg-0 text-center text-lg-start ff-sans fw-bold mw_553 off-black-02 mb-3"
            >
              <span className="font-gradient">Take the </span> first step into
              AI <span className="font-gradient"> Stock Trading</span>
            </h1>
            <p
              data-aos="zoom-in"
              className="fs-sm fw-normal mx-auto mx-lg-0 text-center text-lg-start ff-sans lh-25 off-black-02 mb-5"
            >
              In a matter of minutes, one of our AI mentors will contact you, No
              Experience Required!
            </p>
            <div className="row">
              <div data-aos="zoom-in" className="col-md-3 col-6 ">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="stock1 mb-5 mb-md-0"
                    src={stock1}
                    alt="stockimg1"
                  />
                </div>
              </div>
              <div data-aos="zoom-in" className="col-md-3 col-6 stockbtm">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="stock2 mb-5 mb-md-0"
                    src={stock2}
                    alt="stockimg2"
                  />
                </div>
              </div>
              <div data-aos="zoom-in" className="col-md-3 col-6 stockbtm">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="stock3 mb-5 mb-md-0"
                    src={stock3}
                    alt="stockimg3"
                  />
                </div>
              </div>
              <div data-aos="zoom-in" className="col-md-3 col-6 stockbtm">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="stock4 mb-5 mb-md-0"
                    src={stock4}
                    alt="stockimg4"
                  />
                </div>
              </div>
              <div data-aos="zoom-in" className="col-md-3 col-6 stockline">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="stock5 mb-5 mb-md-0"
                    src={stock5}
                    alt="stockimg5"
                  />
                </div>
              </div>
              <div data-aos="zoom-in" className="col-md-3 col-6 stockline">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="stock6 mb-5 mb-md-0"
                    src={stock6}
                    alt="stockimg6"
                  />
                </div>
              </div>
              <div data-aos="zoom-in" className="col-md-3 col-6 stockline">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="stock7 mb-5 mb-md-0"
                    src={stock7}
                    alt="stockimg7"
                  />
                </div>
              </div>
              <div data-aos="zoom-in" className="col-md-3 col-6 stockline2">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="stock8 mb-5 mb-md-0"
                    src={stock8}
                    alt="stockimg1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="col-lg-6 col-12 pt-0 pt-sm-5 pt-lg-0"
          >
            <form className="form_card mt-3" onSubmit={handleSubmit}>
              <h2 className="fs-lg lh-33 text-center text-lg-start fw-bold off-black-02 mb-3">
                Start Trading with AI Stocks !
              </h2>
              <div className="d-flex flex-column flex-sm-row justify-content-between mb-2">
                <div className="form-group d-flex flex-column">
                  <label
                    className="fs-sm fw-normal mb-2 ff-sans lh-21 text-black"
                    htmlFor="name"
                  >
                    First Name
                  </label>
                  <input
                    className="firstInput fs-sm fw-semibold off-black-02"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {formErrors.name && (
                    <p className="error-message mb-0">{formErrors.name}</p>
                  )}
                </div>
                <div className="form-group d-flex flex-column">
                  <label
                    className="fs-sm fw-normal mb-2 ff-sans lh-21 text-black"
                    htmlFor="lastname"
                  >
                    Last Name
                  </label>
                  <input
                    className="firstInput fs-sm fw-semibold off-black-02"
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                  {formErrors.name && (
                    <p className="error-message mb-0">{formErrors.lastname}</p>
                  )}
                </div>
              </div>
              <div className="form-group d-flex flex-column mb-2">
                <label
                  className="fs-sm fw-normal ff-sans mb-2 lh-21 text-black"
                  htmlFor="mail"
                >
                  Email
                </label>
                <input
                  className="firstInput2 fs-sm fw-semibold off-black-02"
                  type="mail"
                  id="mail"
                  name="mail"
                  value={formData.mail}
                  onChange={handleChange}
                />
                {formErrors.mail && (
                  <p className="error-message mb-0">{formErrors.mail}</p>
                )}
              </div>
              <div className="form-group d-flex flex-column mb-2">
                <label
                  className="fs-sm fw-normal ff-sans lh-21 mb-2 text-black"
                  htmlFor="number"
                >
                  Phone Number
                </label>
                <input
                  className="firstInput2 fs-sm fw-semibold off-black-02"
                  type="number"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                />
                {formErrors.number && (
                  <p className="error-message mb-0">{formErrors.number}</p>
                )}
              </div>
              <div className="mt-4 ">
                <button className="mainBtn2 fs-sm fw-bold ff-sans lh-24 text-white">
                  Start Trading Today!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaockTrading;
