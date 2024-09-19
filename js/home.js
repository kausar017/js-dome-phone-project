//add money to the account

document.getElementById('btn-add-Money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        console.log('add money lesanar');

    const addMoneyInput = document.getElementById('add-money-input').value;
        console.log(addMoneyInput);
    const addPinInput = document.getElementById('add-pin-numbar').value;
        console.log(addPinInput);
        
    if(addPinInput === '1234') {
        console.log('adding your money to your account');
        const balans = document.getElementById('account-balans').innerText;
        console.log(balans);
    
    const addMoneyNumbar =  parseFloat(addMoneyInput);
    const balansNumbar = parseFloat(balans);
    const carentBalans = addMoneyNumbar + balansNumbar;
    console.log(carentBalans);
    
    document.getElementById('account-balans').innerText = carentBalans;

    }
    else{
        alert('Failed to add money')
    }
        
}); 