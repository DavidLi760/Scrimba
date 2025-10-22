const valueEl = document.querySelector("#value");
const convertBtn = document.querySelector("#convert-btn");
const lengthEl = document.querySelector("#length-p");
const volumeEl = document.querySelector("#volume-p");
const massEl = document.querySelector("#mass-p");
let meters = localStorage.getItem("meters");
let feets = localStorage.getItem("feets");
let liters = localStorage.getItem("liters");
let gallons = localStorage.getItem("gallons");
let kilos = localStorage.getItem("kilos");
let pounds = localStorage.getItem("pounds");

renderValues();

convertBtn.addEventListener("click", function () {
    const value = valueEl.value;
    convertToLength(value);
    convertToVolume(value);
    convertToMass(value);
    renderValues();
});

function convertToLength(value) {
    meters = (value * 3.281).toFixed(3);
    feets = (value / 3.281).toFixed(3);
    localStorage.setItem("meters", meters);
    localStorage.setItem("feets", feets);
}

function convertToVolume(value) {
    liters = (value * 0.264).toFixed(3);
    gallons = (value / 0.264).toFixed(3);
    localStorage.setItem("liters", liters);
    localStorage.setItem("gallons", gallons);
}

function convertToMass(value) {
    kilos = (value * 2.204).toFixed(3);
    pounds = (value / 2.204).toFixed(3);
    localStorage.setItem("kilos", kilos);
    localStorage.setItem("pounds", pounds);
}

function renderValues() {
    lengthEl.textContent = `${valueEl.value} meters = ${meters} feets | ${valueEl.value} feets = ${feets} meters`;
    volumeEl.textContent = `${valueEl.value} liters = ${liters} gallons | ${valueEl.value} gallons = ${gallons} liters`;
    massEl.textContent = `${valueEl.value} kilos = ${kilos} pounds | ${valueEl.value} pounds = ${pounds} kilos`;
}
