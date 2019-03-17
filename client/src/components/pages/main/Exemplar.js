import React from "react";
import sprintboard from "./sprintboard.png";

const Exemplar = () => {
  return (
    <section id="examplar ">
      <div className="container">
        <div className="row">
          <div className="col l1" />
          <div className="col l10 center-align">
            <h1>Modern Appointment Booking Application</h1>
            <p>
              Providing an efficient, organized, and convenient solution to
              booking needs.
            </p>
            <br />
            <img
              className="responsive-img"
              src={sprintboard}
              alt="sprintboard"
            />
          </div>
          <div className="col l1" />
        </div>
      </div>
    </section>
  );
};

export default Exemplar;
