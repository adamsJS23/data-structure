"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  locations: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  guest: {
    snoop: {
      man: "snoop",
      woman: "Dog wife",
    },
    cent: {
      man: "50cent",
      woman: "50 wife",
    },
  },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // DESTRUCTURING OBJECT WITH DEFAULT VALUES
  orderDelivery({ address, time = "20:00", starterIndex = 0, mainIndex = 1 }) {
    console.log(
      `You order ${this.starterMenu[starterIndex]} with ${this.mainMenu[mainIndex]} at ${time} to be deliverd in ${address}`
    );
  },
};

restaurant.orderDelivery({
  address: "Via genova 234",
  time: "10:30",
  starterIndex: 1,
  mainIndex: 0,
});

restaurant.orderDelivery({
  address: "Via genova 234",
});

restaurant.orderPasta = function (ing1, ing2, ing3) {
  console.log(`Here is your delicious ${ing1}, ${ing2} and ${ing3}`);
};

// DESTRUCTURING OBJECTS
const { fri: friday, sat: saturday } = restaurant.openingHours;
console.log(friday, saturday);

// DESTRUCTURING OBJECTS
// Default values
const {
  name,
  openingHours: hours,
  categories: tags,
  menu: mnu = "Banana",
} = restaurant;
console.log(name, hours, tags, mnu);

// Mutating Object
let a = 23,
  b = 7;
let obj = { a: 44, b: 65, c: 85 };
({ a, b } = obj);
console.log(a, b);

// DESTRUCTURING NESTED OBJECT
let { guest } = restaurant;
let {
  snoop: { man, woman },
} = guest;
console.log(man, woman);
let {
  fri: { open: o, close: c },
} = hours;
console.log(o, c);

// SPREAD OPERATOR

let arr = [2, 5, 6];
let badNewArr = [1, ...arr];
console.log(badNewArr);
console.log(...badNewArr);
console.log(...badNewArr);

// PASSING MULTIPLE VALUE TO AN ARRAY
function sum(...number) {
  let total = 0;
  number.forEach((num) => (total += num));
  console.log(total);
}

sum(...badNewArr);
let newMenu = [...restaurant.starterMenu, "Gnocchi"];
console.log(newMenu);

// CREATE A COPY OF ARRAY

let newMainMenu = [...restaurant.mainMenu];
console.log(newMainMenu);

// JOIN 2 ARRAYS

let menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

//
// let ingredients = [
//   prompt("Let's make pasta ingredient 1"),
//   prompt("Let's make pasta ingredient 2"),
//   prompt("Let's make pasta ingredient 3"),
// ];
let ingredients=['Basilico','Cipolla','Tonno']

// Real world examples
restaurant.orderPasta(...ingredients);

const newRestaurant = { founder: "Giusseppe", ...restaurant, foundedIn: 1999 };
console.log(newRestaurant);
newRestaurant.name = "Festival des glaciers";
console.log(newRestaurant.name, restaurant.name);
// Iterables: Array, strings, sets,maps
let str = "Adama";
let letters = [...str, "", "G."];
console.log(...letters);
// //  DESTRUCTURING ARRAY
// const arr = [1, 2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[1];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// // SWITCHING VARIABLE USING DESTRUCTERING
// let [main, secondary] = restaurant.categories;
// console.log(main);
// console.log(secondary);
// [main, secondary] = [secondary, main];

// console.log(...restaurant.categories);

// // DESTRUCTURING AN ARRAY RETURN BY A FUNCTION
// const [starterMenu, mainMenu] = restaurant.order(1, 2);
// console.log(starterMenu, mainMenu);

// // DESTRUCTURING NESTED ARRAY
// const nested = [1, 2, [3, 4, 5]];
// const [primo, , array] = nested;
// console.log(primo);
// console.log(array);
// const [w, e, [r, t, l]] = nested;
// console.log(w, e, r, t, l);
// // DEFAULT VALUE WITH DESTRUCTURING
// const arr2 = [2, 6, 9, 0];
// const [g, u, n, m, k = "ret"] = arr2;
// console.log(g, u, n, m, k);
