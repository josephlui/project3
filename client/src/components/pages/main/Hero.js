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
          <p className="flowtext hide-on-small-only">
            We help your business book appointments
          </p>
          <h3>Appointment Booking Application</h3>

          <p className="big">
            Created by:
            <br /> <br />
            Joseph, Tahreem, Saumil, and Judy
          </p>
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
