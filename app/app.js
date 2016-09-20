var app = angular.module('myApp',['ngRoute','angularCSS']);




app.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl : 'views/home.html',
    controller : 'myAppController',
    css : 'css/index-style.css'
  })
  .when('/home',{
    templateUrl : 'views/home.html',
    controller : 'myAppController',
    css : 'css/index-style.css'
  })
  .when('/account',{
    templateUrl: 'views/account.html',
    controller : 'mainController',
    css : 'css/account.css'


  })
  .otherwise({
      redirectTo : '/'
  });

}]);









app.controller('mainController',['$http','$sce', '$scope','$log','$filter','$location','$rootScope','$q',function($http, $sce, $scope, $log,$filter,$location,$rootScope,$q){

  $scope.signOut = function() {
    console.log("sing out");
  };






}]);

app.controller('myAppController',['$http','$sce', '$scope','$log','$filter','$location','$rootScope','$q',function($http, $sce, $scope, $log,$filter,$location,$rootScope,$q){



//console.log($rootScope.$on);

var config = {
  apiKey: "AIzaSyBdVIzjA83eKu0nbQlVzqofzEZmagxtebQ",
  authDomain: "invoicepro-test.firebaseapp.com",
  databaseURL: "https://invoicepro-test.firebaseio.com",
  storageBucket: "invoicepro-test.appspot.com",
};
// Initialize Firebase

  var app = firebase.initializeApp(config);
  var database = app.database();
  var auth = app.auth();
  var storage = app.storage();




  var emailField ="";
  var passwordField ="";
  var userSignedIn = false;

  // REGISTRATION
  regbtn.addEventListener('click',function(ev){

          console.log("Registration");

          /*
          emailField = document.getElementById('reg-email').value;
          passwordField = document.getElementById('reg-password').value;

          if(emailField.length < 5){
            alert('Грешен Имейл Адрес');
            document.getElementById('reg-email').value ="";
            return;
          }
          if(passwordField.length < 6){
            alert('Минимум 7 символа');
            document.getElementById('reg-password').value ="";
            return;
          }

          auth.createUserWithEmailAndPassword(emailField,passwordField).then(function (result) {
            document.getElementById('reg-email').value ="";
            document.getElementById('reg-password').value ="";
          },function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode +" " +errorMessage);
          });
        */
    });



    // LOG IN /

  login.addEventListener('click',function(ev){

            console.log("log-in");

            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            if(email.length < 5){
              alert('Грешен Имейл Адрес');
              document.getElementById('reg-email').value ="";
              return;
            }
            if(password.length < 6){
              alert('Минимум 7 символа');
              document.getElementById('reg-password').value ="";
              return;
            }

            auth.signInWithEmailAndPassword(email,password).then(function (result) {
              document.getElementById('email').value ="";
              document.getElementById('password').value ="";

            },function (error) {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorCode +" " +errorMessage);
              alert("Грешка");
            });


  });


    // Sign Out
    signOut.addEventListener('click',function(){

        auth().signOut().then(function() {

      }, function(error) {

      });

    });


  // Observe the onAuth OBJECT
function checkOath(){
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("REDIRECT TO ACCOUNT");
  //  $location.path("account");
  //  $location.path("/route");
  //  window.location = "#/account";


    console.log(user);

    var uid;
    var userEmail;

    var currentUser = firebase.auth().currentUser;
    if(currentUser !== null){
      uid = user.uid;
      userEmail = user.email;

      $rootScope.uid = uid;
      $rootScope.uid = userEmail;

    }
    // User is signed in.

  } else {
    // No user is signed in.

  }

});
}


checkOath();











}]);
