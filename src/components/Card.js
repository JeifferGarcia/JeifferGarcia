import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./styles/Card.css";

class Card extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='Card'>
          <img src={this.props.img} alt={this.props.title} />
          <h3>{this.props.title}</h3>
          <div>
            <p>{this.props.description}</p>
          </div>
          <div>
            <a className='btn' target='__black' href={this.props.url}>
              ver
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Card;
