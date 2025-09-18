
const pin = '1234';


// Reusable function
function getInputNumber(id){
    return parseInt(document.getElementById(id).value);
}

function getInput(id){
    return document.getElementById(id).value;
}
// innerText
function getInnerText(id){
    return parseInt(document.getElementById(id).innerText);
}

// set innerText
function setInnerText(value){
    const availableBankBalance = document.getElementById('available-balance');
    availableBankBalance.innerText = value;
}

//clear form
function displayNone(id){
    const forms = document.getElementsByClassName('form');
    for(const form of forms){
        form.style.display = 'none';
    }
}


// add money feature
document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const bank = getInput('bank');
    const accountNumber = getInput('account-number');
    const addAmount = getInputNumber('add-amount');
    const addPin = getInput('add-pin');

    // avilable
    const availableBalance = getInnerText('available-balance');

    if(accountNumber.length < 11){
        alert('please enter valid account Number');
        return;
    }
    if(pin !== addPin){
        alert('please provide valid pin');
        return;
    }
    const totalAvailableBalance = availableBalance + addAmount;
    setInnerText(totalAvailableBalance);
})



// withdraw money feature
document.getElementById('withdraw-btn').addEventListener('click', function(event){
    event.preventDefault();
    const withdrawAmount = getInputNumber('withdraw-amount');
    const accountNumber = getInput('cashout-account-number');
    const addPin = getInput('cashout-pin');

    if(accountNumber.length < 11){
        alert('please enter valid account Number');
        return;
    }
    if(pin !== addPin){
        alert('please provide valid pin');
        return;
    }


    // avilable
    const availableBalance = getInnerText('available-balance');
    const totalAvailableBalance = availableBalance - withdrawAmount;
    setInnerText(totalAvailableBalance)
})

// transfer-money feature
document.getElementById('transfer-money').addEventListener('click', function(event){
    event.preventDefault();
})

// get bonus feature
document.getElementById('get-bonus').addEventListener('click', function(event){
    event.preventDefault();
})





// toggling feature

// add money
document.getElementById('add-money').addEventListener('click', function(){
    displayNone();
    document.getElementById('add-money-parent').style.display = 'block';
})

// cashout
document.getElementById('cashout-money').addEventListener('click', function(){
    displayNone();
    document.getElementById('cashout-parent').style.display = 'block';

})

// transfer money
document.getElementById('transfer-money').addEventListener('click', function(){
    displayNone();
    document.getElementById('transfer-money-parent').style.display = 'block';
})

// get Bonous
document.getElementById('get-bonus').addEventListener('click', function(){
    displayNone();
    document.getElementById('get-bonous-parent').style.display = 'block';
})