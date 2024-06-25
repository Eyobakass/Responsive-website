/*Nav responiveness */

function hamBurger(){
const hamburger = document.querySelector('.hamburger')
hamburger.style.display = 'flex'
}
function hideHam(){
  const hideHam = document.querySelector('.hamburger')
 hideHam.style.display = 'none'
}

//Assigning constants to each buttons
    
    const buttonA = document.getElementById('buttonA');
    const addressA = document.getElementById('contactA');

    const buttonB = document.getElementById('buttonB');
    const addressB = document.getElementById('contactB');

    const buttonC = document.getElementById('buttonC');
    const addressC = document.getElementById('contactC');

    const buttonD = document.getElementById('buttonD');
    const addressD = document.getElementById('contactD');

    const buttonE = document.getElementById('buttonE');
    const addressE = document.getElementById('contactE');

    const buttonF = document.getElementById('buttonF');
    const addressF = document.getElementById('contactF');

        // This following functions will be executed when their respective button is clicked

  buttonA.addEventListener('click', function() {

    if (addressA.style.display === "none") {
      addressA.style.display = "block";
    } else {
      addressA.style.display = "none";
    }
  });

  buttonB.addEventListener('click', function() {
    if (addressB.style.display === "none") {
      addressB.style.display = "block";
    } else {
      addressB.style.display = "none";
    }
  });

  buttonC.addEventListener('click', function() {
    if (addressC.style.display === "none") {
      addressC.style.display = "block";
    } else {
      addressC.style.display = "none";
    }
  });

  buttonD.addEventListener('click', function() {
    if (addressD.style.display === "none") {
      addressD.style.display = "block";
    } else {
      addressD.style.display = "none";
    }
  });

  buttonE.addEventListener('click', function() {
    if (addressE.style.display === "none") {
      addressE.style.display = "block";
    } else {
      addressE.style.display = "none";
    }
  });

  buttonF.addEventListener('click', function() {
    if (addressF.style.display === "none") {
      addressF.style.display = "block";
    } else {
      addressF.style.display = "none";
    }
  });