const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const jobSelect = document.querySelector('#job');
const messageTextarea = document.querySelector('#message');


//validando email

form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    validandoName();
    emailProcessado();
    ProcessandoSenha();
    workSituation()
    
})
function validandoName(){
    if(nameInput.value === ""){
        alert('Por favor,preencha seu nome')
    }
}

function emailProcessado(){
    if(emailInput === "" || !isEmailValid(emailInput.value)){
        alert('Por favor, preencha seu email corretamente')
    }
}

function isEmailValid(email){
    const emailRegex = new RegExp( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);

    if(emailRegex.test(email)){
        return true;
    }

    return false;
}

//senha preenchida corretamente

function ProcessandoSenha(){
    if(passwordInput === "" || !passwordisValid(passwordInput.value)){
        alert('Preencha sua senha corretamente')
    }
}

function passwordisValid(password){
    const passwordRegex =  /^(?=.*[A-Z])(?=(?:.*\d){4,})(?=.*[+!@#$%^&*()_-])[A-Za-z\d+!@#$%^&*()_-]{8,}$/
    const isValid = passwordRegex.test(password)
    if(isValid){
        return true
    }
    else{
        return false
    }

}

function workSituation(){
    if(jobSelect === ""){
        alert('Por Favor, selecione a sua situação')
        return
    }
}


// validacao de senha forte 
// 1- letra maiuscula
// 2-um numero
// 3-tenha caractere especial
// 4-minimo 4 digitos
// /^(?=.*[A-Z])(?=(?:.*\d){4,})(?=.*[+!@#$%^&*()_-])[A-Za-z\d+!@#$%^&*()_-]{8,}$/


