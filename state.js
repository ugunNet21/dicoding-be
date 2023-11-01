// const coffeeStock = {
//     arabica: 100,
//     robusta: 150,
//     liberica: 200
//   }
   
//   module.exports = coffeeStock;

const coffeeStock = require('./state');
 
const makeCoffee = (type, miligrams) => {
  if (coffeeStock[type] >= miligrams) {
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji kopi habis!");
  }
}
 
makeCoffee("robusta", 80);