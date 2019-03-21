import React from "react";
import Booking from "./Booking.png";

const Exemplar = () => {
  return (
    <section id="examplar ">
      <div className="container">
        <div className="row">
          <div className="col l3" />
          <div className="col l6 center-align">
            <h1>AppointJS</h1>
            <p>
              Next-Gen Application with a sleek, streamlined, and user-friendly
              experience for all your booking needs.
            </p>
            <br />
          </div>
          <img className="responsive-img" src={Booking} alt="sprintboard" />
          <div className="col l1" />
        </div>
      </div>
    </section>
  );
};

export default Exemplar;
