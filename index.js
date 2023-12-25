const passwordInput = document.querySelector('#password-input');
const generateBtn = document.querySelector('#generate');
const copyBtn = document.querySelector('#copy');
const passwordLengthInput = document.querySelector('#password-length');
const actualPasswordLength = document.querySelector('#actualLength');

const chars = [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    ['$', '*', 'ù', '^', ':', ';', ',', '!', '?', '.', '=', '+', '_', '-', 'ç', ')', ']', '[', '{', '}', 'é', '&', '('],
]

const generatePassword = length => {
    let password = "";

    for(let i = 0; i < length; i++) {
        let rowIndex = Math.floor(Math.random() * 3);
        let colIndex = Math.floor(Math.random() * chars[rowIndex].length);
        let char = chars[rowIndex][colIndex].toString();

        password += Math.floor(Math.random() * 2) == 0 ? char.toLowerCase() : char.toUpperCase();
    }

    return password;
}

const copy = input => {
    input.select();
    input.setSelectionRange(0, 99999);
    
    navigator.clipboard.writeText(input.value);

    return true;
}

generateBtn.addEventListener('click', (e) => {
    e.preventDefault();

    password = generatePassword(parseInt(passwordLengthInput.value));
    passwordInput.value = password;
});

copyBtn.addEventListener('click', () => {
    copy(passwordInput);
});

passwordLengthInput.addEventListener('input', (e) => {
    actualPasswordLength.innerText = e.target.value;
});