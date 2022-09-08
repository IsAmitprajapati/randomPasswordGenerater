const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let len = characters.length
let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")

//create the password
function generatedPassword(){
    let password = characters[callRandomWord()] 
    for(let i = 0 ; i <= 15 ; i++){
        password += characters[callRandomWord()] 
    }
    return password
}

//display the password
function password(){
    password2El.value = generatedPassword();
    password1El.value = generatedPassword();
}

//random number generated
function callRandomWord(){
    return Math.floor(Math.random() * len);
}
console.log(generatedPassword())

//copy the password
function password1Copy(){
    password1El.select()
    navigator.clipboard.writeText(password1El.value)
    console.log(password1El.textContent)
}
function password2Copy(){
    // navigator.clipboard.writeText(password2El.value)
    password2El.select()
    navigator.clipboard.writeText(password2El.value)
}


