// class Person {
//   name;
//   work;

//   constructor(name, work) {
//     this.name = name;
//     this.work = work;
//   }

//   sayFullWork() {
//     console.log(`Меня зовут ${this.name} и я работаю ${this.work}`);
//   }
// }

// class Programmer extends Person {
//   zp;
  
//   constructor(name, work, zp) {
//     super(name, work);
//     this.zp = zp;
//   }

//   sayFullWork() {
//     console.log(`Меня зовут ${this.name} и я работаю ${this.work} и моя зарплата ${this.zp}`);
//   }  
// }

// const  Front = new Programmer('Temirlan', 'JavaScript Developer', '4000$');
// const  Back = new Programmer('Temirlan', 'JavaScript Developer', '5000$');
// const  Prepod = new Programmer('Temirlan', 'JavaScript Developer', '6000$');

// const arr =[ Front, Back, Prepod ];

// arr.forEach((item) => {
// item.sayFullWork()
// });

// console.log(arr);

class Car {
  brand;
  model;
  carYear;
  distance;
  countOfFuel;

  constructor(brand, model, carYear, distance, countOfFuel) {
    this.brand = brand;
    this.model = model;
    this.carYear = carYear;
    this.distance = distance;
    this.countOfFuel = countOfFuel;
  }

  getConsumptionFuel() {
    console.log(`Моя машина ${this.brand}, модель: ${this.model}, год выпуска: ${this.carYear}, пройденное расстояние: ${this.distance}, израсходовано топлива: ${this.countOfFuel}, расход машины: ${this.countOfFuel / this.distance * 100}` );
  }
}

const myCar = new Car('Mercedes', 'AMG', '2019', '5000', '1000');

console.log(myCar.getConsumptionFuel())