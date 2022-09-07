const nameDisplay = document.getElementById('name-display');
const nameInput = document.getElementById('name-input');
const changeButton = document.getElementById('change-name');
console.log(changeButton);

changeButton.addEventListener('click', () => {
    console.log('clicking');
});

const name = nameInput.value;

console.log(name);

nameDisplay.textContent = name;

nameInput.value = '';
