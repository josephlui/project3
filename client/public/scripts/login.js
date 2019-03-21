function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  //  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //  console.log('Name: ' + profile.getName());
  //  console.log('Image URL: ' + profile.getImageUrl());
  //  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  var id_token = googleUser.getAuthResponse().id_token;
  alert(id_token);
  var signInUrl =
    window.location.hostname === "localhost"
      ? "http://localhost:3000/api/user/tokensignin"
      : "https:///appt-booking-app.herokuapp.com/api/user/tokensignin";

  var redirectUrl =
    window.location.hostname === "localhost"
      ? "http://localhost:3000/appointments"
      : "https:///appt-booking-app.herokuapp.com/appointments";

  var auth2 = gapi.auth2.getAuthInstance();
  auth2.disconnect();

  $.post(signInUrl, { idtoken: id_token })
    .done(function(data) {
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("sessionToken", data.sessionToken);
      alert(data.sessionToken);
      window.location.href = redirectUrl;
    })
    .catch(function(err) {
      console.log(err.getMessage());
      console.log("error caught, invalid token!");
    });
}
