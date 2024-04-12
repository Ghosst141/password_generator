let password=document.getElementById("password");
let button=document.getElementById("generate");
let copy=document.getElementById("copy");


let length=document.getElementById("length");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let symbols=document.getElementById("symbols");
let numbers=document.getElementById("numbers");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersletters = "0123456789";
const symbolsletters = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";

button.addEventListener('click',function(e){
    let len=length.value;
    let char='';
    let pass='';
    if(lowercase.checked){
        char+=lowercaseLetters;
    }
    if(uppercase.checked){
        char+=uppercaseLetters;
    }
    if(numbers.checked){
        char+=numbersletters;
    }
    if(symbols.checked){
        char+=symbolsletters;
    }
    let index=char.length;
    for (let i = 0; i < len; i++) {
        pass+=char[Math.floor(Math.random()*index)];
    }
    password.value=pass;
    copy.style.visibility='visible';
    copy.innerText='Copy';

})

copy.addEventListener('click',function(){
    let text=password.value;
    navigator.clipboard.writeText(text);
    copy.innerText='Copied';
})



