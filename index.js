function validEmail() {
var mail = document.getElementById('email').value;

var email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
 if (mail.match(email)) {
     return true;
  } else {
    document.querySelector(".emError").style.display = "block";
    document.querySelector(".myIcon3").style.display = "block";
    document.getElementsByName('email')[0].placeholder='email@example/com';
    
  } 

}










  