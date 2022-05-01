/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const output = document.getElementById('output');
const btn = document.getElementById('btn');

const fetchUsers = async () => {
    try {
        const response = await fetch(ENDPOINT);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const display = (login, url) => {
    const outputDiv = document.createElement('div');
    const loginOutput = document.createElement('p');
    const urlOutput = document.createElement('p');
    loginOutput.textContent = `Login: ${login}`;
    urlOutput.textContent = `Avatar url: ${url}`;
    outputDiv.append(loginOutput, urlOutput);
    outputDiv.style.lineHeight = 1.5;
    outputDiv.style.padding = '1rem';
    outputDiv.style.margin = '1rem';
    outputDiv.style.boxShadow = 'rgba(99, 99, 99, 0.2) 0 2px 8px 0';
    outputDiv.style.borderRadius = '5px';
    output.append(outputDiv);
};

btn.addEventListener('click', async () => {
    document.getElementById('message').remove();
    const data = await fetchUsers();
    data.forEach((element) => {
        display(element.login, element.avatar_url);
    });
});
