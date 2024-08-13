"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

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
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log("Main ingredients:", mainIngredient);
    console.log("Others ingredients:", ...otherIngredients);
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
let ingredients = ["Basilico", "Cipolla", "Tonno"];

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

// REST PATTERN
arr = [1, 3, 4, ...[5, 6]];
console.log(arr);
// REST OPERATOR ON ARRAY
let [g, h, ...others] = arr;
console.log(g, h, others);

let [favourite, prefered, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(favourite, prefered, otherFood);

// REST OPERATOR ON OBJECT
let { sat, ...weekDays } = restaurant.openingHours;
console.log(restaurant.openingHours);
console.log(sat, weekDays);

// REST OPERATOR IN FUNCTION

function sum(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

sum(1, 2, 3);
sum(2, 5, 7, 3, 8, 9);
arr = [45, 89, 3, 9, 4];
sum(...arr);

restaurant.orderPizza("Pasta", "Cipolla", "Tono", "Basilico");
restaurant.orderPizza("Cavolfiore");
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

// SHORT CIRCUTTING
console.log("---OR---");
console.log(3 || "Adam");
console.log("" || "Adam");
console.log(true || "Adama");
console.log(null || undefined);
console.log("" || null || undefined || "hello" || true);
let guest1 = restaurant.guest ? restaurant.guest : 10;
console.log(guest1);
// PRATICAL EXAMPLE OF SHORT CIRCUTTING WITH || OPERATOR

guest1 = restaurant.guest1 || 10;
console.log(guest1);
console.log("--AND--");
console.log(0 && "Adam");
console.log("Adam" && false);
console.log(true && "hello" && 0 && null);

// PRATICAL EXAMPLE OF SHORT CIRCUTTING WITH && OPERATOR
if (restaurant.orderPizza) {
  restaurant.orderPizza("Pasta", "Banana", "Mango", "Aglio");
}

restaurant.orderPizza &&
  restaurant.orderPizza("Pasta", "Ananas", "Miele", "Ruccola", "acqua");

restaurant.guest = 0;
let correctGuest = restaurant.guest ?? 10;
console.log("Correct guest", correctGuest);
correctGuest = restaurant.guest || 10;
console.log("Correct guest", correctGuest);

let rest1 = {
  name: "Capri",
  owner: "Guebre Adama",
};

let rest2 = {
  name: "La villagoise",
  numGuest: 30,
};
// if (!rest1.numGuest) {
//   rest1.numGuest = 20;
// }
// rest1.numGuest = rest1.numGuest || 20;
// rest2.numGuest = rest2.numGuest || 20;

rest1.numGuest ||= 10;
rest2.numGuest ||= 10;

rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

rest1.owner &&= "Anonymous";
rest2.owner &&= "Anonymous";

console.log(rest1);
console.log(rest2);

// CODING CHALLENGE #9.1

const [players1, players2] = game.players;
console.log("Team 1", players1);
console.log("Team 2", players2);

const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;

const allPlayers = [...players1, ...players2];
console.log("All players", allPlayers);

const finalPlayers1 = [...players1, "Thiago", "Cutinho", "Perisic"];
console.log(finalPlayers1);

const { team1, x: draw, team2 } = game.odds;
console.log("Team1", team1, "Draw", draw, "Team2", team2);

game.printGoals = function (...playersName) {
  console.log(playersName);
  playersName.forEach((name) => {
    if (this.scored.includes(name)) {
      console.log(`${name} scored 1 Goal`);
    } else console.log(`${name} didn't scored `);
  });
};

game.printGoals("Gnarby", "Hummels", "Adam");
game.printGoals(...game.scored);

game.checkWinner = function (team1, team2) {
  let winner = team1 < team2 ? "Team 1 won" : "Team 2 won";
  winner = team1 < team2 || team2 < team1;
  console.log(winner);
};

game.checkWinner(team1, team2);
