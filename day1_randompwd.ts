import * as rl from 'readline-sync';
const CODE_a : number = "a".charCodeAt(0); // 97
const CODE_A : number = "A".charCodeAt(0); // 65
const CODE_0 : number = "0".charCodeAt(0); // 49



let length : number = Number(rl.question("How many characters do want in your password? "));

let password : string = "";

for (let i = 0; i < length; i++){
    let charCode : number;
    if (Math.random() < .9 ) { //90% chance, do a letter
        if (Math.random() < .5 ) { // 50% chance, do lowercase
            charCode = Math.floor(Math.random() * 26) + CODE_a; // lowercase 
        } else {
            charCode = Math.floor(Math.random() * 26) + CODE_A; // uppercase 
        }
    } else {
        charCode = Math.floor(Math.random() * 10) + CODE_0; // digit 
    }
    let character : string = String.fromCharCode(charCode);
    password += character; // password = password + "p"
}

console.log("Your password: " + password);