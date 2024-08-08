"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
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
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// DESTRUCTURING OBJECTS
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//  DESTRUCTURING ARRAY
const arr = [1, 2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[1];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// SWITCHING VARIABLE USING DESTRUCTERING
let [main, secondary] = restaurant.categories;
console.log(main);
console.log(secondary);
[main, secondary] = [secondary, main];

console.log(...restaurant.categories);

// DESTRUCTURING AN ARRAY RETURN BY A FUNCTION
const [starterMenu, mainMenu] = restaurant.order(1, 2);
console.log(starterMenu, mainMenu);

// DESTRUCTURING NESTED ARRAY
const nested = [1, 2, [3, 4, 5]];
const [primo, , array] = nested;
console.log(primo);
console.log(array);
const [w, e, [r, t, l]] = nested;
console.log(w, e, r, t, l);
// DEFAULT VALUE WITH DESTRUCTURING
const arr2 = [2, 6, 9, 0];
const [g, u, n, m, k = "ret"] = arr2;
console.log(g, u, n, m, k);
