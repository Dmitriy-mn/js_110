
// class Car {

//     static qty = 0;

//     static increment() {
//         Car.qty += 1;
//     }

//     #model;
//     #price;

//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.#model = model;
//         this.price = price;
//         Car.increment();
//     }

//     getModel() {
//         return this.#model;
//     }

//     changeModel(newModel) {
//         this.#model = newModel;
//     }

//     get price() {
//         return this.#price + 2000;
//     }

//     set price(newPrice) {
//         if(this.#checkType(newPrice, "number")) {
//             this.#price = newPrice;
//         }
//     }

//     #checkType(data, type) {
//         if(typeof data === type) {
//             return true
//         } else {
//             return false;
//         }
//     }
// }

// const audi = new Car({ brand: "audi", model: "Q7", price: 70000 });
// const bmw = new Car({ brand: "bmw", model: "X5", price: 65000 });   

// console.log("audi", audi);
// console.log("bmw", bmw);

// audi.changeModel("Q5");
// bmw.changeModel("x1");

// console.log(audi.getModel());
// console.log(bmw.getModel());

// audi.price = "30000";
// console.log(audi.price);

// console.log(Car.qty);











// --------------------------------------- 2

/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
*/

// class Hero {
//     constructor({ name, xp }) {
//         this.name = name;
//         this.xp = xp;
//     }

//     gainXp(amount) {
//         console.log(`${this.name} received ${amount} xp`);
//         this.xp += amount;
//     }
// }


// class Warrior extends Hero {
//     constructor({ weapon, ...restProps }) {
//         super(restProps);
//         this.weapon = weapon;
//     }

//     attack() {
//         console.log(`${this.name} attacks with ${this.weapon}`);
//     }
// }


// class Mage extends Hero {
//     constructor({ name, xp, spells }) {
//         super({ name, xp });
//         this.spells = spells;
//     }

//     cast() {
//         console.log(`${this.name} is casting a spell`);
//     }
// }

// const arthas = new Warrior({ name: "Arthos", xp: 1000, weapon: "sword" })
// // arthas.gainXp(200)
// // console.log(arthas);

// const khadgar = new Mage({ name: "Khadrag", xp: 500, spells: ["fireball"]})

// khadgar.cast();
// khadgar.gainXp(100);

// console.log(khadgar);



