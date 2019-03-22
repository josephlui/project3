// Import FirebaseAuth and firebase.
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import * as firebaseui from 'firebaseui';

// Configure Firebase.
const config = {
  apiKey: "AIzaSyA2ZZ3rSSFBbbsDb49MwceKMsc3K9Jfcd0",
  authDomain: "project3-8b62e.firebaseapp.com",
  databaseURL: "https://project3-8b62e.firebaseio.com",
  projectId: "project3-8b62e",
  storageBucket: "project3-8b62e.appspot.com",
  messagingSenderId: "1087238829207"
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
      //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    defaultCountry: 'CA',
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(user => this.setState({ isSignedIn: !!user }));
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div>
          <div id="firebaseui_container">
            <div className="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner">
              <div className="firebaseui-card-content center">
                <h3>Please Sign-In</h3>
                <ul className="firebaseui-idp-list">
                  <li className="firebaseui-list-item">
                    <button
                      className="g-signin2 firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised firebaseui-idp-google firebaseui-id-idp-button"
                      data-provider-id="google.com"
                      data-upgraded=",MaterialButton"
                      data-onsuccess="onSignIn"
                    >
                      <span className="firebaseui-idp-icon-wrapper">
                        <img
                          className="firebaseui-idp-icon"
                          alt=""
                          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        />
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
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
        <div className="g-signin2" data-onsuccess="onSignIn" />
      </div>
    );
  }
}

export default Login;

/* <div className="g-signin2" data-onsuccess="onSignIn" /> */
/* {$("button.firebaseui-idp-button.mdl-button.mdl-js-button.mdl-button--raised.firebaseui-idp-google.firebaseui-id-idp-button").addClass("g-signin2")} */
