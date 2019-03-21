import React from "react";
import meadow from "./meadow.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="blue lighten-4"
      style={{ backgroundImage: "url(" + meadow + ")" }}
    >
      <div className="container valign-wrapper jc-center">
        <div className="valign center-align white-text">
          <h3>AppointJS</h3>
          <p className="flowtext hide-on-medium-only white-text">
            We help you book appointments
          </p>
          <br /> <br />
          <br />
          <a href="/login" className="btn waves-light waves-effect m-r-16">
            Log In
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
