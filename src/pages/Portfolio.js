import React, { Fragment } from "react";
import Card from "../components/Card";
import rickmorty from "../images/rickmorty.png";
import platziBadges from "../images/platzibadges.png";
import "./styles/Portfolio.css";

class About extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='Portfolio  container'>
          <div className='Portfolio__title'>
            <h2>Portfolio</h2>
          </div>
          <div className='Portfolio__container_card'>
            <Card
              title='100tifi.co'
              img={rickmorty}
              description='spa creada con la api de Rick and morty, usando vanilla JavaScript'
              url='https://jeiffergarciag.github.io/spa-Javascript_Vanilla/'
            />
            <Card
              title='Platzi Badges'
              img={platziBadges}
              description='App de Badges creada con React JS, React Router'
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default About;
