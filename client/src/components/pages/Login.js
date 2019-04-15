import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import * as firebaseui from 'firebaseui';
require('dotenv').config();

// Configure Firebase.
const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID
};

firebase.initializeApp(config);

class Login extends React.Component {
  // The component's Local state.
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false // Local signed-in state.
    };
  }

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // defaultCountry: 'CA',
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => {
        window.location.href = "/appointments"
      }
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(user => {
        this.setState({ isSignedIn: !!user });
        //might want to store user in session storage for other functions
        user = JSON.stringify(user);
        user = JSON.parse(user);
        sessionStorage.setItem("token", user.stsTokenManager.accessToken);
      });
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
        </div>
      );
    }
    return (
      <div>
        <h1>My App</h1>
        <p>
          Welcome {firebase.auth().currentUser.displayName}! You are now
          signed-in!
        </p>
        <a href="/" onClick={() => firebase.auth().signOut()}>
          Sign-out
        </a>
      </div >
    );
  }
}

export default Login;
