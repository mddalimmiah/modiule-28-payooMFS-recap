
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney=document.getElementById('input-add-money').value;
    const addMoneyNumber=parseFloat(addMoney);

    const pinNumber=document.getElementById('input-pin-number').value;

    console.log(addMoneyNumber, pinNumber);

    if(pinNumber==='1234'){
        const balance=document.getElementById('account-balance').innerText;
        console.log(balance);

        const balanceNumber=parseFloat(balance);

        const newBalance=balanceNumber + addMoneyNumber;

        // update DOM
        document.getElementById('account-balance').innerText=newBalance;
    }
    else{
        alert('Failed to add Money, Please try again later!');
    }

})