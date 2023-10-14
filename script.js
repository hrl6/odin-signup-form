const firstName = document.getElementById('user_firstname');
const lastName = document.getElementById('user_lastname');
const email = document.getElementById('user_email');
const phone = document.getElementById('user_phonenum');
const password = document.getElementById('user_pw');
const confirmPassword = document.getElementById('user_confirmpw');
const form = document.getElementById(`signupForm`);

const errorPW = document.getElementById(`errorpw`);
const errorCPW = document.getElementById(`errorcpw`);

form.addEventListener(`submit`, (e) => {
    e.preventDefault(); // prevent submission

    let messagespw = [];
    let messagescpw = [];

    if(password.value.length <= 7){
        messagespw.push(`Password must be at least 8 characters`);
        errorPW.innerText = messagespw;
    } else{
        errorPW.innerText = '';
    }

    if(confirmPassword.value != password.value){
        messagescpw.push(`Password not match`);
        errorCPW.innerText = messagescpw;
    } else{
        errorCPW.innerText = '';
    }

    if(messages.length > 0){
        e.preventDefault(); // prevent submission
    }
})