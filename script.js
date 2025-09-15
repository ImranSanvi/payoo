// login button functionality
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const mobileNumber = 12345678910
    const pinNumber = 1234

    const mNumber = document.getElementById('mobile-number').value;
    const mNumberConverted = parseInt(mNumber);

    const pNumber = document.getElementById('pin-number').value;
    const pNumberConverted = parseInt(pNumber);

    if(mobileNumber === mNumberConverted && pinNumber === pNumberConverted){
        window.location.href="./home.html"
    }
    else{
        alert('Invalid credentials!!!');
    }
})