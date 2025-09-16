
const pin = '1234';


// add money feature
document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const addAmount = parseInt(document.getElementById('add-amount').value);
    const addPin = document.getElementById('add-pin').value;

    // avilable
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if(accountNumber.length < 11){
        alert('please enter valid account Number');
        return;
    }
    if(pin !== addPin){
        alert('please provide valid pin');
        return;
    }
    const totalAvailableBalance = availableBalance + addAmount;
    document.getElementById('available-balance').innerText = totalAvailableBalance;
})



// withdraw money feature
document.getElementById('withdraw-btn').addEventListener('click', function(event){
    event.preventDefault();
    const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value);
    const accountNumber = document.getElementById('cashout-account-number').value;
    const addPin = document.getElementById('cashout-pin').value;

    if(accountNumber.length < 11){
        alert('please enter valid account Number');
        return;
    }
    if(pin !== addPin){
        alert('please provide valid pin');
        return;
    }


    // avilable
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const totalAvailableBalance = availableBalance - withdrawAmount;
    document.getElementById('available-balance').innerText = totalAvailableBalance;
})




// toggling feature

// add money
document.getElementById('add-money').addEventListener('click', function(){
    document.getElementById('cashout-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block';
})

// cashout
document.getElementById('cashout-money').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('cashout-parent').style.display = 'block';

})