
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");




 form.addEventListener("submit" ,function(e){

     e.preventDefault();
     checkEmpty([username,email,password,password2]);
     checkLength(username,3,10);
     checkLength(password,3,10);
     checkEmail(email);
     matchPassword(password,password2);

 })

 function checkEmpty(arr){

     arr.forEach(x => {
         if(x.value === ""){
                showError(x,`${x} is empty`);
         }
         else{
             showSuccess(x);
         }
     });
    
}

function showError(input,message){
    
   const formControl = input.parentElement;
   formControl.className = 'form-control error';
   const small = formControl.querySelector('small');
   small.innerText = message;
    
}


 function showSuccess(input){

    const formControl = input.parentElement;
     formControl.className  = "form-control success";

 }

 function checkLength(input,min,max){
     if(input.value.length<min){
         showError(input,`${input} should be at least ${min} `);
     }
     else if(input.value.length>max){
        showError(input,`${input} should be at less than ${max} `);
     }
     else{
            showSuccess(input);
     }
 }

 function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
  }

  function matchPassword(num1,num2){
      if(num1.value !== num2.value){
          showError(num2,"password should be match");
      }    
  }