< !DOCTYPE html >
  <html>

    <head>
      <meta charset="UTF-8">
        <title>Sample FirebaseUI App</title>

        <script src="https://www.gstatic.com/firebasejs/5.8.6/firebase.js"></script>
        <script>
          // Initialize Firebase
          var config = {
            apiKey: process.env.REACT_APP_APIKEY,
        authDomain: process.env.REACT_APP_AUTHDOMAIN,
        databaseURL: process.env.REACT_APP_DATABASEURL,
        projectId: process.env.REACT_APP_PROJECTID,
        storageBucket: process.env.REACT_APP_STORAGEBUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID
      };
      firebase.initializeApp(config);
  </script>

        <script type="text/javascript">
          initApp = function () {
            firebase.auth().onAuthStateChanged(function (user) {
              if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var uid = user.uid;
                var phoneNumber = user.phoneNumber;
                var providerData = user.providerData;
                user.getIdToken().then(function (accessToken) {
                  document.getElementById('sign-in-status').textContent = 'Signed in';
                  document.getElementById('sign-in').textContent = 'Sign out';
                  document.getElementById('account-details').textContent = JSON.stringify({
                    displayName: displayName,
                    email: email,
                    emailVerified: emailVerified,
                    phoneNumber: phoneNumber,
                    photoURL: photoURL,
                    uid: uid,
                    accessToken: accessToken,
                    providerData: providerData
                  }, null, '  ');
                });
              } else {
                // User is signed out.
                document.getElementById('sign-in-status').textContent = 'Signed out';
                document.getElementById('sign-in').textContent = 'Sign in';
                document.getElementById('account-details').textContent = 'null';
              }
            }, function (error) {
              console.log(error);
            });
          };

    window.addEventListener('load', function () {
            initApp()
          });
  </script>
</head>

      <body>
        <h1>Welcome to My Awesome App</h1>
        <div id="sign-in-status"></div>
        <div id="sign-in"></div>
        <pre id="account-details"></pre>
      </body>

</html>