function Demo(){
var UserName=document.getElementById("UserName").value;
var Password=document.getElementById("Password").value;
var Email=document.getElementById("Email").value;

var User=localStorage.setItem("Name",UserName);
var Pass=localStorage.setItem("Password",Password);
var  Mail=localStorage.setItem("Email",Email);

var User=localStorage.getItem("Name",UserName);
var Pass=localStorage.getItem("Password",Password);
var  Mail=localStorage.getItem("Email",Email);

var a, b, c;

a="Binita";
b=1221;
c="jeevanpradhan19@gmail.com";

if(a==User&&b==Password&&c==Mail){
    alert("Hello Binita ")
    
}
else{
    alert("Sorry you cannot Login")
}

}