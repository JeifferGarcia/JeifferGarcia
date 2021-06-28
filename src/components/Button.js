import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles/Button.css";

export class Button extends Component {
  render(props) {
    const { text } = this.props;
    return (
      <div>
        <Link className='btn' to='/about'>
          {text}
        </Link>
      </div>
    );
  }
}

export default Button;
