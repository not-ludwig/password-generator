const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersExtra = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&()*+,-./:;<=>?@[]^_`{|}"
let inputBox = document.getElementById("inputBox")
let passwordLengthInput = document.getElementById("passwordLengthInput")
let specialCharsCheck = document.getElementById("specialCheck")

function generateRegular(length){
    let result = ' ';
    let charactersLength = characters.length;

    for(let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result;
}

function generateSpecial(length){
    let result = ' ';
    let charactersLength = charactersExtra.length;

    for(let i = 0; i < length; i++) {
        result += charactersExtra.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result;
}

function setGenerated(){
    let len = passwordLengthInput.value

    // EMPTY LEN
    if(len == 0 && len == "" && specialCharsCheck.checked == false){
        len = 12
        let password = generateRegular(len)
        inputBox.value = password
    }

    // EMPTY LEN
    if(len == 0 && len == "" && specialCharsCheck.checked == true){
        len = 12
        let password = generateSpecial(len)
        inputBox.value = password
    }

    // NON EMPTY LEN
    if(len != 0 && len != "" && specialCharsCheck.checked == false){
        let password = generateRegular(len)
        inputBox.value = password
    }
    
    // NON EMPTY LEN
    if(len != 0 && len != "" && specialCharsCheck.checked == true){
        let password = generateSpecial(len)
        inputBox.value = password
    }
    
    console.log(passwordLengthInput.value)
    console.log(specialCharsCheck.checked)
}

function copyToClipboard(){
    inputBox.select()
    inputBox.setSelectionRange(0, 99999)

    navigator.clipboard.writeText(inputBox.value)

    alert("Copied to clipboard: " + inputBox.value)
}
// console.log(generate(10))
// console.log(specialCharsCheck)