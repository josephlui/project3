import React from "react";
import Judy from "./judy.jpg";

const Features = () => {
  return (
    <section id="features" className="grey lighten-4">
      <div className="container">
        <div className="row">
          <div className="col m3" />
          <div className="col m6 center-align">
            <h2>About Us</h2>
            <p>
              Our team developed an amazing combination of vast functionality
              and user's comfort on an accessible platform.
            </p>
          </div>
          <div className="col m3" />
        </div>
        <div className="row">
          <div className="col m3">
            <i className="material-icons">create</i>
            <h5>Joseph Lui </h5>
            <p>Back-end</p>
          </div>
          <div className="col m3">
            {/* <i className="material-icons">devices</i> */}
            <img className="profileShot" src={Judy} />
            <h5>Tahreem Butt</h5>
            <p>Front-end</p>
          </div>
          <div className="col m3">
            {/* <i className="material-icons">build</i> */}
            <h5>Saumil Bapat</h5>
            <p>Back-end</p>
          </div>
          <div className="col m3">
            {/* <i className="material-icons">mood</i> */}
            {/* <Col xs={6} md={4}> */}
            <img className="profileShot" src={Judy} />
            {/* </Col> */}

            <i className="material-icons">mood</i>
            <h5>Judy Hu</h5>
            <p>Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
