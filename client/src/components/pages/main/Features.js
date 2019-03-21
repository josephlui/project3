import React from "react";
import Judy from "./judy.jpg";
import Saumil from "./saumil.jpg";
import Tahreem from "./tahreem.jpg";

const Features = () => {
  return (
    <section id="features" className="grey lighten-4">
      <div className="container">
        <div className="row">
          <div className="col m3" />
          <div className="col m6 center-align">
            <h2>About Us</h2>
            <p>
              Our team started with the vision of providing a sleek and user
              friendly experience for booking business meetings <br />
            </p>
          </div>
          <div className="col m3" />
        </div>
        <div className="row">
          <div className="col m3">
            <i className="material-icons">create</i>
            <h5>Joseph Lui </h5>
            <p>CTO</p>
          </div>
          <div className="col m3">
            {/* <i className="material-icons">devices</i> */}
            <img className="profileShot" src={Tahreem} />
            <h5>Tahreem Butt</h5>
            <p>Product Manager</p>
          </div>
          <div className="col m3">
            {/* <i className="material-icons">build</i> */}
            <img className="profileShot" src={Saumil} />
            <h5>Saumil Bapat</h5>
            <p>Customer Experience</p>
          </div>
          <div className="col m3">
            {/* <i className="material-icons">mood</i> */}
            {/* <Col xs={6} md={4}> */}
            <img className="profileShot" src={Judy} />
            {/* </Col> */}
            <h5>Judy Hu</h5>
            <p>Principle Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
