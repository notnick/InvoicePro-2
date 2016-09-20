import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBdVIzjA83eKu0nbQlVzqofzEZmagxtebQ",
  authDomain: "invoicepro-test.firebaseapp.com",
  databaseURL: "https://invoicepro-test.firebaseio.com",
  storageBucket: "invoicepro-test.appspot.com",
};

var FbApp = firebase.initializeApp(config);

module.exports.FBApp = FbApp.database();
module.exports.FBApp = FbApp.auth();
