import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="g-signin2" data-onsuccess="onSignIn" />
      </div>
    );
  }
}

export default Login;
