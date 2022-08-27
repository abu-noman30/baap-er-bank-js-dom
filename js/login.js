function onSubmit() {
    let email = document.querySelector('#email-input')
    let emailValue = email.value;

    let password = document.querySelector('#password-input')
    let passwordValue = password.value;

    if (emailValue === 'sontan@gmail.com' && passwordValue == 'sontan123') {
        window.location.href = 'home.html';
    } else{
        alert('Invalid email or password');
    }   
}