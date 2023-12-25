/*************************** */

// it will get only once the elements in html so that is better than i put them in the function -> performance.
var signEmailInput = document.getElementById('signEmailInput'); //full input element tag
var signPassInput = document.getElementById('signPassInput'); //full input element tag
var signNameInput = document.getElementById('signNameInput'); //full input element tag

// localStorage.clear();

var users=[];

if(localStorage.getItem('users')!=null)
{
    users=JSON.parse(localStorage.getItem('users'));
}

var success = document.querySelector('#exist span');
var wrong = document.querySelector('.login #incorrect span');
var welcomeName = document.querySelector('.login #username');

var valid =1;

function signUp()
{
    success.innerHTML=" ";
    valid=1;
    var user ={
        userName: signNameInput.value ,
        userEmail: signEmailInput.value,
        userPass: signPassInput.value
    };   
    if(!validatePass(signPassInput.value))
    {
        success.innerHTML="The password must contain at least five characters !";
        success.classList.replace('d-none','d-block');
        success.classList.replace('text-success','text-danger');
        valid=0;
    }
    if(searchUser(user))
    {
        success.innerHTML="This Email is already exist !";
        success.classList.replace('d-none','d-block');
        success.classList.replace('text-success','text-danger');
        valid=0;
    }
    if (!validateEmail(signEmailInput.value)){
        success.innerHTML="Invalid Email !";
        success.classList.replace('d-none','d-block');
        success.classList.replace('text-success','text-danger');
        valid=0;
    }
    if (!validateName(signNameInput.value)){
        success.innerHTML="The name must contain at least three characters !";
        success.classList.replace('d-none','d-block');
        success.classList.replace('text-success','text-danger');
        valid=0;
    }
    if(signNameInput.value==="" | signEmailInput.value==="" | signPassInput.value==="")
    {
        success.innerHTML="All inputs are required !";
        success.classList.replace('d-none','d-block');
        success.classList.replace('text-success','text-danger');
        valid=0;
    }
    if(valid)
    {
        users.push(user);
        localStorage.setItem('users',JSON.stringify(users));
        clearForm();
        success.innerHTML="Success";
        success.classList.replace('d-none','d-block');
        success.classList.replace('text-danger','text-success');
        console.log(success);
        const myTimeout = setTimeout(exit, 800);
    }
}

function validatePass(pass) {
    var regexPass = /.{5,}$/ 
    return regexPass.test(pass);
}

function validateEmail(email) {
    var regexEmail = /\S+@\S+\.\S+/;
    return regexEmail.test(email); 
}

function validateName(name) {
    var regexName =/^[a-z0-9A-Z]{3,}(\s[a-z0-9A-Z]*)*$/; 
    return regexName.test(name);
}

function searchUser(user) {
    for (var i = 0; i < users.length; i++) {
        if(user.userEmail==users[i].userEmail)
        {
            return true ;
        }
    }
    return false ;
}

function exit(){
    window.location.href=href="../index.html";
}


var currentUsers=[] , flagLogin=0;
function login()
{
    var user ={
        userName: "",
        userEmail: signEmailInput.value,
        userPass: signPassInput.value
    };
    if(signEmailInput.value==="" | signPassInput.value==="")
    {
        wrong.innerHTML="All inputs are Required !";
        wrong.classList.replace('d-none','d-block');
    }
    else
    {
        for (var i = 0; i < users.length; i++) {
            console.log(i);
            if(user.userEmail==users[i].userEmail && user.userPass==users[i].userPass)
            {
                flagLogin=1;
                var currentUser= users[i];
                currentUsers.push(currentUser);
                localStorage.setItem('currentUsers',JSON.stringify(currentUsers));
                window.location.href="assets/welcome.html";
                break;
            }
            
        }
    
        if(flagLogin==0)
        {
            wrong.innerHTML="incorrect email or password";
            wrong.classList.replace('d-none','d-block');
        }
    }    
}



function clearForm()
{
    signEmailInput.value='';
    signNameInput.value='';
    signPassInput.value='';
}
