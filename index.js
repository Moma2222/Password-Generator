let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function PasswordGen() {
    let passwordLength = 15;
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        let randomCharacter = characters[Math.floor(Math.random()*characters.length)];
        password += randomCharacter;
       }
       return password
}

function onclicknoa(){
    document.getElementById("password1").textContent = PasswordGen()
    document.getElementById("password2").textContent = PasswordGen()
}






