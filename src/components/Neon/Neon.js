import React from "react";
import Styless from "./Neon.css";

const Neon = ({ content }) => {
  return (
    <div className="center">
      <div className="f_ont">
        <div className="overlap-group">
          <h1 className="title inter-bold-white-150px">{content}</h1>
          <div className="boogie-radio inter-bold-white-150px">{content}</div>
          <div className="boogie-radio-1 inter-bold-white-150px">{content}</div>
          <div className="boogie-radio-2 inter-bold-white-150px">{content}</div>
          <div className="boogie-radio-3">{content}</div>
        </div>

        <div className="group">
          <div className="overlap-group1">
            <div className="ellipse"></div>
            <div className="rectangle-5"></div>
            <div className="rectangle-5-1"></div>
            <div className="rectangle-5-2"></div>
            <div className="rectangle-5-3"></div>
            <div className="rectangle-5-4"></div>
            <div className="ellipse"></div>

            <div className="rectangle-1"></div>
            <div className="rectangle-2"></div>
            <div className="rectangle-3"></div>
            <div className="rectangle-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neon;
