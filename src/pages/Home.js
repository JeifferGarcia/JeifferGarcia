import React, { Fragment } from "react";
import Button from "../components/Button";
import "./styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='Home'>
          <h1>
            Hola, soy <br /> Jeiffer Garcia
          </h1>
          <h2>Desarrollador web Frontend</h2>
          <div className='Home__container-btn'>
            <Button text='Sobre Mi' />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
