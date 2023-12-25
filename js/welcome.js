  
document.addEventListener("DOMContentLoaded", function goToWelcome() {
    var welcomeName = document.querySelector('.login #username');
    var userName = JSON.parse(localStorage.getItem('currentUsers'));
    console.log(userName[0].userName);
    welcomeName.innerHTML=`Welcome ${userName[0].userName}`;
    console.log('hello');
})


function logout() {
    localStorage.removeItem('currentUsers');
    window.location.href=href="../index.html";
}