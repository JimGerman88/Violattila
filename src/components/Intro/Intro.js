import React from "react";
import { Container } from "react-bootstrap";

const Intro = () => {
  return (
    <section id="home" className="intro">
      <div className="intro-overlay">
        <Container className="intro-body">
          <h1 className="text-center display-1 text-white">
            Viola <small>és</small> Attila
          </h1>
          <h2 className="text-white">2024. 07. 20.</h2>
          <h5 className="text-white mt-3 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h5>
        </Container>
      </div>
    </section>
  );
};

export default Intro;
