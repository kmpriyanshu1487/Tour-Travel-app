import React from "react";
const Distinationdata = (props) => {
  return (
    <div className={props.className}>
      <div className="desc-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className="image">
        <img src={props.img1} alt="img" />
        <img src={props.img2} alt="img" />
      </div>
    </div>
  );
};

export default Distinationdata;
