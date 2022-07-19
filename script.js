$(".login-btn").on("click", function () {
  $(".login-box").addClass("hide");
  // hidding the first layout(login-section) and adding reveal calss to second layout (sign-in-up-section) after a 1s delay
  $(".login-section").addClass("hide")
  $(".sign-in-up-section").addClass("reveal");

});

//  changing the main button to "Sign Up" in form if user click on create account button in login section
$(".create-btn").on("click", function () {
  $(".form").addClass("show");
  $(".form-btn:first-child").html("Sign Up");
});

/////////////////////////////// Sign Up Validation  ////////////////////////////////////

var succsessfullValidation = 0;

// Email validation function
function emailValidation(e) {
  var emailRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
  var emailValid = e.match(emailRegex);
  if (!emailValid) {
    $(".message:first-child").text("Email is not valid");
  } else {
    succsessfullValidation++;
  }
}

// Name validation function
function nameValidation(n) {
  if (n.length < 3 || n.length > 25) {
    $(".message:nth-child(2)").text(
      "User name must be between 3 to 25 characters"
    );
  } else {
    succsessfullValidation++;
  }
}

// Password validation function
function passValidation(p) {
  var passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  var passValid = p.match(passRegex);
  if (!passValid) {
    $(".message:nth-child(3)").text(
      "Password must be at minimum 8 characters includes at least a small letter a capital letter and a special charachter"
    );
  } else {
    succsessfullValidation++;
  }
}

// Password Confirm validation function
function passConfirmValidation(pc) {
  var password = $(".password-input").val();
  if (pc != password || pc === "") {
    $(".message:nth-child(4)").text("Password dose not match");
  } else {
    succsessfullValidation++;
  }
}

$(".action").on("click", function () {
  // getting inputs values
  var emailInput = $(".email").val();
  var userNameInput = $(".user-name").val();
  var password = $(".password-input").val();
  var passwordConfirm = $(".password-input-confirmation").val();

  // There is only one action button which changes from sign up to sign in so we check if its sign up button
  var btnContent = $(this).html();
  if (btnContent === "Sign Up") {
    // moving modal down
    $("#dialog-message").addClass("modal-clicked");
    // avoiding from making repetitive error messages when you hit button
    $(".message").text("");
    // set succssessfull validation to 0 so the previous attempt does not count
    succsessfullValidation = 0;
  }

  // calling validation functions
  emailValidation(emailInput);
  nameValidation(userNameInput);
  passValidation(password);
  passConfirmValidation(passwordConfirm);

  if (succsessfullValidation == 4) {
    $(".message").css("color", "green");
    $(".message:first-child").text("Succsessfull! Please Go back to Login Page");
    $("input").val("");
    setTimeout(function () {
      // moving modal back to top
      $("#dialog-message").removeClass("modal-clicked");
    }, 2500);
  }
});
//Make Back button works 
$(".back").on("click",function(){
    $(".login-box").removeClass("hide");
  // hidding the first layout(login-section) and adding reveal calss to second layout (sign-in-up-section) after a 1s delay
    $(".login-section").removeClass("hide") 
    $(".sign-in-up-section").removeClass("reveal");
    $("#dialog-message").removeClass("modal-clicked");

    
});

