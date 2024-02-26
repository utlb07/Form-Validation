function validate(){
    var username=document.getElementById('username').value
    var email=document.getElementById('email').value
    var password=document.getElementById('password').value
    var confirmpassword=document.getElementById('confirmpassword').value
    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkmatchpass(password,confirmpassword)
}
function checkusername(username) {
    if (username.length > 7) {
        document.getElementById('username').classList.add('success');
        document.getElementById('username').classList.replace('error', 'success');
        document.getElementById('usernameerror').innerHTML = '';
    } else {
        document.getElementById('username').classList.add('error');
        document.getElementById('usernameerror').innerText = 'Username must be 8 letters long and contain only alphabets or the following special characters: !@#$%^&*()_+';
    }
}
function checkemail(email) {
     if (email.length > 7) {
         document.getElementById('email').classList.add('success');
         document.getElementById('email').classList.replace('error', 'success');
         document.getElementById('emailerror').innerHTML = '';
     } else {
         document.getElementById('email').classList.add('error');
         document.getElementById('emailerror').innerText = 'Enter valid email @gmail.com';
     }
 }
 function checkpassword(password) {
     if (password.length > 7 && password.includes('.')) {
         document.getElementById('password').classList.add('success');
         document.getElementById('password').classList.replace('error', 'success');
         document.getElementById('passworderror').innerHTML = '';
     } else {
         document.getElementById('password').classList.add('error');
         document.getElementById('passworderror').innerText = 'Password must be 8 letters long and should include . operator';
     }
 }
 function checkmatchpass(password,confirmpassword) {
     if (password==confirmpassword&&password!='') {
         document.getElementById('confirmpassword').classList.add('success');
         document.getElementById('confirmpassword').classList.replace('error', 'success');
         document.getElementById('confirmerror').innerHTML = '';
     } else {
         document.getElementById('confirmpassword').classList.add('error');
         document.getElementById('confirmerror').innerText = 'Password not matched';
     }
 }
