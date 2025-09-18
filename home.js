
const pin = '1234';
const transactionData = [];


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
function handleToggle(id){
    const forms = document.getElementsByClassName('form');
    for(const form of forms){
        form.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}

//color Toggle
function buttonToggle(id){
    const formBtns = document.getElementsByClassName('form-btn');
    console.log(formBtns);
        for(const btn of formBtns){
            btn.classList.remove("border-[#0874f2]",  "bg-[#0874f20d]");
        }

    document.getElementById(id).classList.remove("border-gray-400");
    document.getElementById(id).classList.add("border-[#0874f2]",  "bg-[#0874f20d]")
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
    if(addAmount <= 0){
        alert('invalid amount. please change');
        return;
    }
    const totalAvailableBalance = availableBalance + addAmount;
    setInnerText(totalAvailableBalance);

    const data = {
        name: "Add Money",
        date :new Date().toLocaleTimeString()
    }
    transactionData.push(data);
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
    if(withdrawAmount > availableBalance || withdrawAmount<=0){
        alert('Invalid amount');
        return;
    }
    const totalAvailableBalance = availableBalance - withdrawAmount;
    setInnerText(totalAvailableBalance)

    const data = {
        name: "Cashout Money",
        date :new Date().toLocaleTimeString()
    }
    transactionData.push(data);
})

// transfer-money feature
document.getElementById('transfer-money').addEventListener('click', function(event){
    event.preventDefault();
})

// get bonus feature
document.getElementById('get-bonus').addEventListener('click', function(event){
    event.preventDefault();
})

// pay-bill feature
document.getElementById('transfer-money').addEventListener('click', function(event){
    event.preventDefault();
})

// transaction feature
document.getElementById('transaction').addEventListener('click', function(event){
    event.preventDefault();
    const transactionContainer = document.getElementById('transaction-container')
    transactionContainer.innerText = ""
    for(const data of transactionData){
        const div = document.createElement('div');
        div.innerHTML = `
             <div class="flex justify-between items-center h-[72px] shadow-md rounded-2xl p-4 bg-white mt-6">
                <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" alt="">
                </div>
                <div>
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                </div>
                <div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
        `;

        transactionContainer.appendChild(div)
    }
})





// toggling feature

// add money
document.getElementById('add-money').addEventListener('click', function(){
    handleToggle('add-money-parent');
    buttonToggle('add-money');
})

// cashout
document.getElementById('cashout-money').addEventListener('click', function(){
    handleToggle('cashout-parent');
    buttonToggle('cashout-money');
})

// transfer money
document.getElementById('transfer-money').addEventListener('click', function(){
    handleToggle('transfer-money-parent');
    buttonToggle('transfer-money')
})

// get Bonous
document.getElementById('get-bonus').addEventListener('click', function(){
    handleToggle('get-bonous-parent');
    buttonToggle('get-bonus');
})

// pay-bill
document.getElementById('pay-bill').addEventListener('click', function(){
    handleToggle('pay-bill-parent');
    buttonToggle('pay-bill')
})

// transaction
document.getElementById('transaction').addEventListener('click', function(){
    handleToggle('transaction-parent');
    buttonToggle('transaction');
})