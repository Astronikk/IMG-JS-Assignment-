function funcSubmit(){
    let email=document.getElementById('mail').value;
    let password1=document.getElementById('psw').value;

     if (email.match(/[a-z\d_\-\.]+@[A-Za-z]+\.[A-Za-z]{2,6}((\.[A-Za-z]{2,6})+)?/i)) {
        
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password1);
    
        var ajaxObject=new XMLHttpRequest();   
    
        console.log(ajaxObject.readyState);

        ajaxObject.open("POST","https://reqres.in/api/login", true);
        console.log(ajaxObject.readyState);
    
        ajaxObject.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        console.log(ajaxObject.readyState);
    
        ajaxObject.send(`email=${email}&password=${password1}`);
        console.log(ajaxObject.readyState);
    
        ajaxObject.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let response = JSON.parse(this.response);
                console.log(response);
                alert("Login successfull"+", response:" + response["token"]);
            }
            else if(this.readyState == 4 && this.status != 200){
                alert("Login failure");
            }
        }
     }
     else{
         alert("Enter valid email id");
     }
}

document.getElementById('mail').addEventListener('keyup', (e)=> {
   
    if (e.keyCode === 13) {
        e.preventDefault();
        funcSubmit();
        
    }
});

document.getElementById('psw').addEventListener('keyup', (e)=> {
   
    if (e.keyCode === 13) {
        e.preventDefault();
        funcSubmit();
        
    }
});
// const inp_field = {
//     email: /[a-z\d_\-\.]+@[A-Za-z]+\.[A-Za-z]{2,6}((\.[A-Za-z]{2,6})+)?/i,
//   }
  
//   const validate = (field, regex) => {
//     regex.test(field.value) ? field.className = 'valid' : field.className = 'invalid';
    
//   }

//   let keys = document.querySelectorAll('input');
//   keys.forEach(item => item.addEventListener(
//     'keyup', e => {
//       validate(e.target, inp_field[e.target.attributes.name.value])
//     }
//   ));
  