/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

//Mano supratimu konstruktoriaus funkcija turėtų priimti du skaičius, o ne kiekvienas metodas atskirai
//Todėl būtent taip ir atlikau šią užduotį
function Calculator(firstNo, secondNo) {
    this.firstNo = firstNo;
    this.secondNo = secondNo;
}

Calculator.prototype.sum = function () {
    return this.firstNo + this.secondNo;
};

Calculator.prototype.subtraction = function () {
    return this.firstNo - this.secondNo;
};

Calculator.prototype.multiplication = function () {
    return this.firstNo * this.secondNo;
};

Calculator.prototype.division = function () {
    return this.firstNo / this.secondNo;
};

const myNumbers = new Calculator(15, 5);
console.log(
    `Suma ${myNumbers.sum()}, Atimtis ${myNumbers.subtraction()}, Daugyba ${myNumbers.multiplication()}, Dalyba ${myNumbers.division()},`
);
