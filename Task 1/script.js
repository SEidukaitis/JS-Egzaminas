/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const form = document.querySelector('form');
const outputEl = document.getElementById('output');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = document.getElementById('search').value;
    console.log(inputValue);
    const pounds = inputValue * 2.2046;
    const grams = inputValue / 0.001;
    const ounces = inputValue * 35.274;
    const headingEl = document.createElement('h2');
    headingEl.append(`Gramai: ${grams}, Svarai: ${pounds}, Uncijos: ${ounces}`);
    outputEl.append(headingEl);
    outputEl.style.textAlign = 'center';
    outputEl.style.lineHeight = 1.5;
});
