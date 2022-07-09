const myTime = new Date(1996); 

const currentYear = new Date().getFullYear();

const minus = (currentYear - myTime);

console.log(`Ваш возраст: ${minus}`);


// Регулярные выражения:

const myName = "Temirlan";
const regexp = /[a]/;

console.log(new RegExp(regexp).test(myName));