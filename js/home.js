function onDeposit() {
    let depostiInput = document.querySelector('#deposit-input');
    let depositValue = depostiInput.value;

    if (depositValue === '') {
        alert('Please enter a valid amount');
        return;
    } else if (depositValue < 0) {
        alert('Please enter a positive number');
        return;
        
    } else { 
        
    let depositAmount = document.querySelector('#deposit-amount');
    let prevDepositAmount = parseFloat(depositAmount.innerText);
    let newDepositAmount = depositValue;
    
    let totalDepositAmount = (parseFloat(prevDepositAmount) + parseFloat(newDepositAmount)).toFixed(2);
    depositAmount.innerText = totalDepositAmount;

    let balance = document.querySelector('#tolal-balance');
    let prevBalance = parseFloat(balance.innerText);

    let newBalance = depositValue;
    let totalBalance = (parseFloat(prevBalance) + parseFloat(newBalance)).toFixed(2);
    balance.innerText = totalBalance;

    depostiInput.value = '';
    }

}
function onWithdraw() {
    let withdrawInput = document.querySelector('#withdraw-input');
    let withdrawValue = withdrawInput.value;

    if (withdrawValue === '') {
        alert('Please enter a valid amount');
        return;
    } else if (withdrawValue < 0) {
        alert('Please enter a positive number');
        return;
        
    } else { 
        
    let withdrawAmount = document.querySelector('#withdraw-amount');
    let prevWithdrawAmount = parseFloat(withdrawAmount.innerText);
    let newWithdrawAmount = withdrawValue;
    
    let totalWithdrawAmount = (parseFloat(prevWithdrawAmount) + parseFloat(newWithdrawAmount)).toFixed(2);
    withdrawAmount.innerText = totalWithdrawAmount;

    let balance = document.querySelector('#tolal-balance');
    let prevBalance = parseFloat(balance.innerText);

    let newBalance = withdrawValue;
    let totalBalance = (parseFloat(prevBalance) - parseFloat(newBalance)).toFixed(2);
    balance.innerText = totalBalance;

    withdrawInput.value = '';
    }

}

function onLogout() {
    window.location.href = 'index.html';
}