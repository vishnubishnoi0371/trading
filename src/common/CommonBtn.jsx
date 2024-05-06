import React from "react";

const CommonBtn = (props) => {
  return (
    <div id="btn" className="">
      <button aria-label={props.label} className="mainBtn fs-sm fw-bold ff-sans lh-24 text-white">
        {props.text}

      </button>
    </div>
  );
};

export default CommonBtn;
