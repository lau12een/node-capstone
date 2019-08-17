'use strict'

$(function () {
    $('.content').hide();
    $('#error-message').fadeIn();
    $('#error-message').fadeOut(1000);
});

//Login functions 
 // Get payload from form fields
  const username = $("#js-username-login").val();
  const password = $("#js-password-login").val();
  const reqBody = { username, password };

    //add the fetch here 



//When user logs in successfully I should be taken to the dashboard




// When my login fails, I need a disclaimer that tells me my username or password is incorrect




// ///// SIGN UP FUNCTIONS

//I need a function to sign up call function signupUser with validation

function signupUser() {
  // Get new user credentials from form
  const username = $("#js-username-signup").val();
  const password = $("#js-password-signup").val();
  const password2 = $("#js-password2").val();
    
  const reqBody = {
    username,
    password,
    password2
  };
    
    //add the fetch here 
    
    // hide sign up form
    $("#js-signup-form").addClass("hidden");

    // display login form
    $("#js-login-form").removeClass("hidden");