const kelvin = 293;
const celsius = kelvin - 273;
const fahrenheit = celsius *(9/5) + 32;
console.log(kelvin);
console.log(celsius);
console.log(Math.floor(fahrenheit));
console.log(`The temperature is ${Math.round(fahrenheit)} fahrenheit` + `.`)
