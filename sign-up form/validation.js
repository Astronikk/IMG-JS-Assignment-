// validation script
const inp_field = {
    name: /^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,})$/,
    city: /^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{3,})$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    password: /^[#\w@_-]{8,20}$/,
    confirmpassword: /^[#\w@_-]{8,20}$/,
    phone:/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/,
    age:/^(100|[1-9][0-9]?)$/,
  }
  
  const validate = (field, regex) => {
    regex.test(field.value) ? field.className = 'valid' : field.className = 'invalid';
    
  }
  
  let keys = document.querySelectorAll('input');
  keys.forEach(item => item.addEventListener(
    'keyup', e => {
      validate(e.target, inp_field[e.target.attributes.name.value])
    }
  ));
  
function qualification() {
    var mylist = document.getElementById("myList");
    document.getElementById("Education").value = mylist.options[mylist.selectedIndex].text;
}
    function checkPassword(form) {
      password = form.password.value;
      confirmpassword = form.confirmpassword.value;

      if (confirmpassword == '')
          alert ("Please enter confirm password");
      else if (password != confirmpassword) {
          alert ("\nPassword did not match: please confirm again :)")
          return false;
      }
      else{
        alert ("You have successfully signed in :)")
          return true;
      }
  }
    