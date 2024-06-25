/*link*/
function validateForm() {
    let x = document.forms["git"]["repo"].value;
    if (x == "") {
      alert("Please enter a link to your project repository");
      return false;
    }
  }
/*Twitter bot*/
function valTbl(){
    var checkedTbl1 = document.getElementById('Beginner-Tb').checked;
    var checkedTbl2 = document.getElementById('Intermediate-Tb').checked;
    var checkedTbl3 = document.getElementById('Advanced-Tb').checked;
    if (checkedTbl1==false && checkedTbl2==false && checkedTbl3==false){
        alert('Pick one option');
        return false;
    }
    else{
        return true;
    }
}

function valTbr(){
     var checkedTbr1 = document.getElementById('1-Tb').checked;
     var checkedTbr2 = document.getElementById('2-Tb').checked;
     var checkedTbr3 = document.getElementById('3-Tb').checked;       
    var checkedTbr4 = document.getElementById('4-Tb').checked;
    var checkedTbr5 = document.getElementById('5-Tb').checked;
        if (checkedTbr1==false && checkedTbr2==false && checkedTbr3==false && checkedTbr4==false && checkedTbr5==false){
            alert('Pick one option');
            return false;
        }
        else{
            return true;
        }}
 
 /*Web scraper*/ 
 function valWsl(){
    var checkedWsl1 = document.getElementById('Beginner-Ws').checked;
    var checkedWsl2 = document.getElementById('Intermediate-Ws').checked;
    var checkedWsl3 = document.getElementById('Advanced-Ws').checked;
    if (checkedWsl1==false && checkedWsl2==false && checkedWsl3==false){
        alert('Pick one option');
        return false;
    }
    else{
        return true;
    }
}
function valWsr(){
    var checkedTbr1 = document.getElementById('1-Ws').checked;
    var checkedTbr2 = document.getElementById('2-Ws').checked;
    var checkedTbr3 = document.getElementById('3-Ws').checked;       
   var checkedTbr4 = document.getElementById('4-Ws').checked;
   var checkedTbr5 = document.getElementById('5-Ws').checked;
       if (checkedTbr1==false && checkedTbr2==false && checkedTbr3==false && checkedTbr4==false && checkedTbr5==false){
           alert('Pick one option');
           return false;
       }
       else{
           return true;
       }
    }

/*facebook*/
function valFcl(){
    var checkedFcl1 = document.getElementById('Beginner-Fb').checked;
    var checkedFcl2 = document.getElementById('Intermediate-Fb').checked;
    var checkedFcl3 = document.getElementById('Advanced-Fb').checked;
    if (checkedFcl1==false && checkedFcl2==false && checkedFcl3==false){
        alert('Pick one option');
        return false;
    }
    else{
        return true;
    }
}
function valFcr(){
    var checkedTbr1 = document.getElementById('1-Fb').checked;
    var checkedTbr2 = document.getElementById('2-Fb').checked;
    var checkedTbr3 = document.getElementById('3-Fb').checked;       
   var checkedTbr4 = document.getElementById('4-Fb').checked;
   var checkedTbr5 = document.getElementById('5-Fb').checked;
       if (checkedTbr1==false && checkedTbr2==false && checkedTbr3==false && checkedTbr4==false && checkedTbr5==false){
           alert('Pick one option');
           return false;
       }
       else{
           return true;
       }
    }

/*Mp3*/
function valMpl(){
    var checkedFcl1 = document.getElementById('Beginner-Mp').checked;
    var checkedFcl2 = document.getElementById('Intermediate-Mp').checked;
    var checkedFcl3 = document.getElementById('Advanced-Mp').checked;
    if (checkedFcl1==false && checkedFcl2==false && checkedFcl3==false){
        alert('Pick one option');
        return false;
    }
    else{
        return true;
    }
}
function valMpr(){
    var checkedTbr1 = document.getElementById('1-Mp').checked;
    var checkedTbr2 = document.getElementById('2-Mp').checked;
    var checkedTbr3 = document.getElementById('3-Mp').checked;       
   var checkedTbr4 = document.getElementById('4-Mp').checked;
   var checkedTbr5 = document.getElementById('5-Mp').checked;
       if (checkedTbr1==false && checkedTbr2==false && checkedTbr3==false && checkedTbr4==false && checkedTbr5==false){
           alert('Pick one option');
           return false;
       }
       else{
           return true;
       }
    }

/*Chat*/
function valCal(){
    var checkedMpl1 = document.getElementById('Beginner-Ch').checked;
    var checkedMpl2 = document.getElementById('Intermediate-Ch').checked;
    var checkedMpl3 = document.getElementById('Advanced-Ch').checked;
    if (checkedMpl1==false && checkedMpl2==false && checkedMpl3==false){
        alert('Pick one option');
        return false;
    }
    else{
        return true;
    }
}
function valCar(){
    var checkedTbr1 = document.getElementById('1-Ch').checked;
    var checkedTbr2 = document.getElementById('2-Ch').checked;
    var checkedTbr3 = document.getElementById('3-Ch').checked;       
   var checkedTbr4 = document.getElementById('4-Ch').checked;
   var checkedTbr5 = document.getElementById('5-Ch').checked;
       if (checkedTbr1==false && checkedTbr2==false && checkedTbr3==false && checkedTbr4==false && checkedTbr5==false){
           alert('Pick one option');
           return false;
       }
       else{
           return true;
       }
    }
/*Tetris*/
function valTgl(){
    var checkedMpl1 = document.getElementById('Beginner-Tg').checked;
    var checkedMpl2 = document.getElementById('Intermediate-Tg').checked;
    var checkedMpl3 = document.getElementById('Advanced-Tg').checked;
    if (checkedMpl1==false && checkedMpl2==false && checkedMpl3==false){
        alert('Pick one option');
        return false;
    }
    else{
        return true;
    }
}
function valTgr(){
    var checkedTbr1 = document.getElementById('1-Tg').checked;
    var checkedTbr2 = document.getElementById('2-Tg').checked;
    var checkedTbr3 = document.getElementById('3-Tg').checked;       
   var checkedTbr4 = document.getElementById('4-Tg').checked;
   var checkedTbr5 = document.getElementById('5-Tg').checked;
       if (checkedTbr1==false && checkedTbr2==false && checkedTbr3==false && checkedTbr4==false && checkedTbr5==false){
           alert('Pick one option');
           return false;
       }
       else{
           return true;
       }
    }
/*Wheather */
function valWhl(){
    var checkedMpl1 = document.getElementById('Beginner-Wh').checked;
    var checkedMpl2 = document.getElementById('Intermediate-Wh').checked;
    var checkedMpl3 = document.getElementById('Advanced-Wh').checked;
    if (checkedMpl1==false && checkedMpl2==false && checkedMpl3==false){
        alert('Pick one option');
        return false;
    }
    else{
        return true;
    }
}
function valWhr(){
    var checkedTbr1 = document.getElementById('1-Wh').checked;
    var checkedTbr2 = document.getElementById('2-Wh').checked;
    var checkedTbr3 = document.getElementById('3-Wh').checked;       
   var checkedTbr4 = document.getElementById('4-Wh').checked;
   var checkedTbr5 = document.getElementById('5-Wh').checked;
       if (checkedTbr1==false && checkedTbr2==false && checkedTbr3==false && checkedTbr4==false && checkedTbr5==false){
           alert('Pick one option');
           return false;
       }
       else{
           return true;
       }
    }