/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.getElementById('output');

const fetchCars = async () => {
    try {
        const response = await fetch(`./${ENDPOINT}`);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const display = (brands, models) => {
    const outputDiv = document.createElement('div');
    const brandOutput = document.createElement('p');
    const modelsOutput = document.createElement('p');
    brandOutput.textContent = `Brand: ${brands}`;
    modelsOutput.textContent = `Models: ${models}`;
    outputDiv.append(brandOutput, modelsOutput);
    outputDiv.style.lineHeight = 1.5;
    outputDiv.style.padding = '1rem';
    outputDiv.style.margin = '1rem';
    outputDiv.style.boxShadow = 'rgba(99, 99, 99, 0.2) 0 2px 8px 0';
    outputDiv.style.borderRadius = '5px';
    output.append(outputDiv);
};

document.addEventListener('DOMContentLoaded', async () => {
    const cars = await fetchCars();
    cars.forEach((car) => {
        let modelList = '';
        car.models.forEach((model, index, array) => {
            if (index + 1 < array.length) {
                modelList += `${model}, `;
            } else modelList += `${model}.`;
        });
        display(car.brand, modelList);
    });
});
