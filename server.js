const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require('client-sessions');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use (session({
  cookieName: 'session',
  secret: 'asklfjlaksdjfglawjegaewfasdokfjasdlkfjas_TODO_externalize_me_to_config',
  duration: 30 * 60 * 1000, // session active - 30 mins
  activeDuration: 5 * 60 * 1000, // session keep alive  - 5 mins
})
)

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI 
  || "mongodb://localhost/bookings",
  { useNewUrlParser: true, useCreateIndex: true, } );

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
  
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

