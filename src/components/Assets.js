import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Lines from "../images/lines.svg";
import Circle from "../images/circle.svg";
import Plus from "../images/plus.svg";
import PlusRed from "../images/plus-red.svg";
import Point from "../images/point.svg";

import "./styles/Assets.css";

function Assets() {
  return ReactDOM.createPortal(
    <div className='Assets'>
      <div className='Assets__Lines'>
        <img src={Lines} />
      </div>
      <div className='Assets__Circle'>
        <img src={Circle} />
      </div>
      <div className='Assets__Plus'>
        <img src={Plus} />
      </div>
      <div className='Assets__Plus-red'>
        <img src={PlusRed} />
      </div>
      <div className='Assets__Point'>
        <img src={Point} />
      </div>
    </div>,
    document.getElementById("assets")
  );
}

export default Assets;
