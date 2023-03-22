function showAndHidePassword(input, button) {
    if (document.getElementById(input).type == "password") {
        document.getElementById(input).type = "text";
        document.getElementById(button).innerHTML = 'Hide';
    } 
    else {
        document.getElementById(input).type = "password";
        document.getElementById(button).innerHTML = 'Show';
    }
}


function show() {
    showAndHidePassword('typePassword', 'button1');
}

function display() {
    showAndHidePassword('confirmPassword', 'button2');
}

function logIn() {
    let code1 = document.getElementById('typePassword');
    let code2 = document.getElementById('confirmPassword');

    if(code1.value === '' && code2.value === '') {
        alert('Kindly input a password')
    } else if (code1.value === code2.value) {
        alert('login successful');

    } else {
        alert('Password is Incorrect');
    }
     
}