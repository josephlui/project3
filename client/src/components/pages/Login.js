// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

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
  state = {
    isSignedIn: false // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({ isSignedIn: !!user })
    );
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

          <div id="firebaseui_container">

            <div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner">
              <div class="firebaseui-card-content">

                <ul class="firebaseui-idp-list">
                  <li class="firebaseui-list-item">

            
                    <button class="g-signin2 firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised firebaseui-idp-google firebaseui-id-idp-button" data-provider-id="google.com" data-upgraded=",MaterialButton" data-onsuccess="onSignIn">
                      <span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" /></span>
                      <span class="firebaseui-idp-text firebaseui-idp-text-long">Sign in with Google</span><span class="firebaseui-idp-text firebaseui-idp-text-short">Google</span></button>

                  </li>
                </ul>

              </div>
            </div>
          </div>

          {/* <div className="g-signin2" data-onsuccess="onSignIn" /> */}

          < StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
        </div >
      );
    }
    return (
      <div>
        <h1>My App</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </div>
    );
  }
}

export default Login;





/* <div className="g-signin2" data-onsuccess="onSignIn" /> */
/* {$("button.firebaseui-idp-button.mdl-button.mdl-js-button.mdl-button--raised.firebaseui-idp-google.firebaseui-id-idp-button").addClass("g-signin2")} */
