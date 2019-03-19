import React from "react";

//--------------------------------------------------------------------------------------

var config = {
  apiKey: "AIzaSyA2ZZ3rSSFBbbsDb49MwceKMsc3K9Jfcd0",
  authDomain: "project3-8b62e.firebaseapp.com",
  databaseURL: "https://project3-8b62e.firebaseio.com",
  projectId: "project3-8b62e",
  storageBucket: "project3-8b62e.appspot.com",
  messagingSenderId: "1087238829207"
};

var uiConfig = {
  signInSuccessUrl: '/appointments',       //CHECK IF WANT TO CHANGE
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: '<your-tos-url>',
  // Privacy policy url/callback.
  privacyPolicyUrl: function () {
    window.location.assign('<your-privacy-policy-url>');
  }
};

var ui;

//--------------------------------------------------------------------------------------

class Login extends React.Component {

  render() {
    return (
      <div className="g-signin2" data-onsuccess="onSignIn">
        <br />




        <head>
          <meta charset="UTF-8">
            <title>Sample FirebaseUI App</title>

            <script src="https://www.gstatic.com/firebasejs/5.8.6/firebase.js"></script>
            <script>
              {// Initialize Firebase
                firebase.initializeApp(config)
              }
            </script>
            <script src="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js"></script>
            <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />
            <script type="text/javascript">
              {// Initialize the FirebaseUI Widget using Firebase.
                ui = new firebaseui.auth.AuthUI(firebase.auth())
              }
              {// The start method will wait until the DOM is loaded.
                ui.start('#firebaseui-auth-container', uiConfig)
              }
            </script>
          </meta>
        </head>

        <body>
          <h1>Welcome to My Awesome App</h1>
          <div id="firebaseui-auth-container"></div>
        </body>





      </div>

    );
  }
}


//--------------------------------------------------------------------------------------

export default Login;
