function check(){
var psw = document.getElementById("pass").value;
var rpsw = document.getElementById("conform_pass").value;
var uname = document.getElementById("username").value;
if(uname ==""){
document.getElementById("msg").style.display = "block";
document.getElementById("msg").innerHTML ="Please Enter Your Username";
return false;
}
if(rpsw!=psw){
document.getElementById("msg").style.display = "block";
document.getElementById("msg").innerHTML ="Please Check the Password";
return false;
}
if(rpsw ==""){
document.getElementById("msg").style.display = "block";
document.getElementById("msg").innerHTML ="Please Enter the Password";
return false;
}
else{
localStorage.setItem('password', psw);
var password = localStorage.getItem('password');
console.log(password);
alert(' Welcome to May os');
}
}