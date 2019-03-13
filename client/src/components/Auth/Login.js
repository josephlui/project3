import React from "react";

class Login extends React.Component {
  render() {

    var config = {
      apiKey: "AIzaSyA2ZZ3rSSFBbbsDb49MwceKMsc3K9Jfcd0",
      authDomain: "project3-8b62e.firebaseapp.com",
      databaseURL: "https://project3-8b62e.firebaseio.com",
      projectId: "project3-8b62e",
      storageBucket: "project3-8b62e.appspot.com",
      messagingSenderId: "1087238829207"
    };


    return (







      <script src="https://www.gstatic.com/firebasejs/5.8.6/firebase.js"></script>
      <script>
        {firebase.initializeApp(config)}
      </script>



      <script src="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.js"></script>
      <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />
      <script type="text/javascript">
        var uiConfig = {
          signInSuccessUrl: '/articles',
signInOptions: [
firebase.auth.GoogleAuthProvider.PROVIDER_ID,
firebase.auth.EmailAuthProvider.PROVIDER_ID,
firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
],

      tosUrl: '<your-tos-url>',
      privacyPolicyUrl: function () {
            window.location.assign('<your-privacy-policy-url>');
          }
        };
    
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', uiConfig);
  </script>
</head>

      <body>
        <h1>Welcome to My Awesome App</h1>
        <div id="firebaseui-auth-container"></div>
      </body>











      
      
    );
  }
}

export default Login;
