let signUp = document.getElementById("sign-up");
let signIn = document.getElementById("sign-in");
let signInButton = document.getElementById("signInButton");
let signUpButton = document.getElementById("signUpButton");
let signInButtonForm = document.getElementById("signInButtonForm");
let signUpButtonForm = document.getElementById("signUpButtonForm");
signIn.style.display = "none";
signUp.style.display = "none";
document.getElementById("theimagebutton").style.display="none";
function purposeAdder(signer) {
    signer.style.backgroundColor = "rgb(121, 121, 255)";
    signer.style.color = "white";
    if (signer === signInButton) {
        signInButton.addEventListener("click", handleSignInClick);
    } else if (signer === signUpButton) {
        signUpButton.addEventListener("click", handleSignUpClick);
    }
}

function purposeRemover(signer) {
    signer.style.backgroundColor = "white";
    signer.style.color = "rgb(77, 77, 77)";
    if (signer === signInButton) {
        signUp.style.display = "none";
        signIn.style.display = "contents";
        signInButton.removeEventListener("click", handleSignInClick);
        purposeAdder(signUpButton);
    } else if (signer === signUpButton) {
        signIn.style.display = "none";
        signUp.style.display = "contents";
        signUpButton.removeEventListener("click", handleSignUpClick);
        purposeAdder(signInButton);
    }
}

function handleSignInClick() {
    purposeRemover(signInButton);
}

function handleSignUpClick() {
    purposeRemover(signUpButton);
}

signInButtonForm.addEventListener("click", function() {
    document.getElementById("theimagebutton").style.display = "flex";
    document.getElementById("theimagebutton").style.flexDirection = "row";
    document.getElementById("theimagebutton").style.justifyContent = "center";
    document.getElementById("theformbutton").style.display = "none";
    purposeRemover(signInButton);
});

signUpButtonForm.addEventListener("click", function() {

    document.getElementById("theimagebutton").style.display = "flex";
    document.getElementById("theimagebutton").style.flexDirection = "row";
    document.getElementById("theimagebutton").style.justifyContent = "center";
    document.getElementById("theformbutton").style.display = "none";
    signInButton.style.maxWidth="30vw";
    signUpButton.style.display = "30vw";
    purposeRemover(signUpButton);
});

// Initial setup
purposeAdder(signInButton);
purposeAdder(signUpButton);


let firstName=document.getElementById("firstName");
let lastName=document.getElementById("lastName");
let id=document.getElementById("schoolId");
let passWord=document.getElementById("password");
let firstNameSign=document.getElementById("firstNameSignUp");
let lastNameSign=document.getElementById("lastNameSignUp");
let idSign=document.getElementById("schoolIdSignUp");
let email=document.getElementById("email");
firstName.addEventListener("input",function(){
    firstName.textContent=firstName.textContent[0].toUpperCase()+firstName.textContent.slice(1).toLowerCase();
})
lastName.addEventListener("input",function(){
    lastName.textContent.charAt(0).toUpperCase;
})


document.getElementById('submitSignUp').addEventListener('click', function(event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorMessage = document.getElementById('error-message');
    
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match!';
        event.preventDefault(); // Prevent form submission
    } else {
        errorMessage.textContent = ''; // Clear any previous error messages
    }
});