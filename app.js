const user = document.getElementById("user");
const mail = document.getElementById("mail");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const button = document.getElementById("button1");
var  error1 = document.getElementById("error1");
var  error2 = document.getElementById("error2");
var  error3 = document.getElementById("error3");
var  error4 = document.getElementById("error4");
var  error5 = document.getElementById("error5");
let messages = document.getElementById("messages");
const phone = document.getElementById("phone");





button.addEventListener("click", function() {
     if(user.value.length < 1){
          error1.style.display = "block";
          user.style.border = "2px solid red";
          error1.style.backgroundColor = "red";
          user.focus();
          return false; 
    }
   
    else (user.value.length > 1)
        user.style.border = "2px solid black";
        error1.style.display = "none"
       
        
    
    if(mail.value.length < 1){
        error2.style.display = "block"; 
        mail.style.border = "2px solid red";
        error2.style.backgroundColor = "red"; 
        mail.focus();
        return false;
        
        }  
        if(phone.value = ""){
            error5.style.display = "block";
            phone.style.border = "2px solid red";
            error5.style.backgroundColor = "red";
            phone.focus();
            return false; 
      }
      else{
        messages.style.backgroundColor = "red";
        error5.style.display = "none"; 
        error5.style.display = "none"; 
        phone.style.border = "2px solid black"; 
        phone.style.border = "2px solid black"; 
    }
    

    
        if(password.value.length < 1){
            error3.style.display = "block"; 
            password.style.border = "2px solid red"; 
            error3.style.backgroundColor = "red";
            password.focus();
            return false;}
            if(password2.value.length < 1){
                error4.style.display = "block"; 
                error3.style.display = "none"; 
                password.style.border = "2px solid black"; 
                password2.style.border = "2px solid red"; 
                error4.style.backgroundColor = "red";
                password2.focus();
                return false;}
                console.log("Name:", user.value,"|", "Mail:", mail.value, "|", "password:", password.value,"|", "confirm password:", password2.value);
                if(password.length != 0){
                    if(password.value == password2.value){
                        document.getElementById("messages2").textContent = "Password match";
                        document.getElementById("messages2").style.backgroundColor = "green";
                        document.getElementById("messages2").style.display = "block";
                        document.getElementById("messages2").style.marginTop = "10px";
                        error4.style.display = "none"; 
                        error3.style.display = "none"; 
                        password.style.border = "2px solid black"; 
                        password2.style.border = "2px solid black"; 
                    }
                    else {
                        messages.textContent = "Password dont match";
                        messages.style.backgroundColor = "red";
                        error4.style.display = "none"; 
                        error3.style.display = "none"; 
                        password.style.border = "2px solid black"; 
                        password2.style.border = "2px solid black"; 
                    }

                } 
                
                
        
                
});     


