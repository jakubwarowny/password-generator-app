function generatePassword() {
  const upperCaseBox = document.querySelector(`.upperCaseBox`);
  const lowerCaseBox = document.querySelector(`.lowerCaseBox`);
  const numbersBox = document.querySelector(`.numbersBox`);
  const symbolsBox = document.querySelector(`.symbolsBox`);
  const showPassword = document.querySelector(`.generetedPassword`);
  const lowerLetters = `qwertyuiopasdfghjklzxcvbnm`;
  const upperLetters = `QWERTYUIOPASDFGHJKLZXCVBNM`;
  const num = `1234567890`;
  const symbols = `!@#$%^&*()_-?`;
  let length = document.querySelector(`.passwordLength`).value;
  let password = ``;
  let options = [];


  if (upperCaseBox.checked) {
    options.push(upperLetters);
  }
  if (lowerCaseBox.checked) {
    options.push(lowerLetters);
  }
  if (numbersBox.checked) {
    options.push(num);
  }
  if (symbolsBox.checked) {
    options.push(symbols);
  }

  if (options.length === 0) {
    return alert(`Checked checkbox!`)
  }

  for (let i = 0; i < length; ++i) {
    let randomOption = options[Math.floor(Math.random() * options.length)];
    password += randomOption.charAt(
      Math.floor(Math.random() * randomOption.length)
    );
  }
  return (showPassword.innerHTML = password);

}

function updateSliderValue(value) {
  document.querySelector(".sliderValue").innerHTML = value;
}

function copyPassword() {
  const password = document.querySelector('.generetedPassword');
  const range = document.createRange();
  range.selectNode(password);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  alert('Password copied to clipboard!');
}