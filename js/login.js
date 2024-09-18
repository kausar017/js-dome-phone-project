
//document.getElementBYId('id').addEvenLisanar('click', finction)
document.getElementById('login-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
    console.log('login button clickd');

    const phoneNumbar = document.getElementById('phone-numbar').value;
    const pinNumbar = document.getElementById('pin-numbar').value;
    console.log('phone-numbar:',phoneNumbar,);
    console.log('pin-numbar:',pinNumbar,);
    
    if(phoneNumbar === '017' && pinNumbar === '1234'){
        console.log('you are logind');
        window.location.href = '/home.html';        
    }else{
        alert('entar your carect phone & pin numbar')
    }
    
})