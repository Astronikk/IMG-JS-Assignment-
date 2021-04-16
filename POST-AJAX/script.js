function funcSubmit(){
    let email=document.getElementById('email').value;
    let password1=document.getElementById('psw').value;

    if (email.match(/[^\s@\W]+\.?_?\.?[a-z0-9A-Z]*@[^\s@\W]+\.?[^\s@\W]*?\.?[^\s@\W]*?\.[a-zA-Z]+$/)) {
        
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
                document.getElementById("demo").innerHTML = this.responseText;
                
            }
            else if(this.readyState == 4 && this.status != 200){
                document.getElementById("email").style.borderColor = "red";
                alert("Login Failed!");

            }
        }
     }
     else{
         alert("Please enter valid email");
     }
}

document.getElementById('email').addEventListener('keyup', (e)=> {
   
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