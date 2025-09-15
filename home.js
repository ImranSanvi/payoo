document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const addAmount = parseInt(document.getElementById('add-amount').value);
    const addPin = document.getElementById('add-pin').value;

    // avilable
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    const totalAvailableBalance = availableBalance + addAmount;
    document.getElementById('available-balance').innerText = totalAvailableBalance;
    console.log(bank, accountNumber, addAmount, addPin);
})