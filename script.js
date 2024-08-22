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

const weekDay = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
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
};
// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  locations: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

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
  openingHours,
  ["weekDays"]: {
    [weekDay[0]]: {
      open: 12,
      close: 22,
    },
    [weekDay[1 + 2]]: {
      open: 11,
      close: 23,
    },
    [weekDay[5]]: {
      open: 0, // Open 24 hours
      close: 24,
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
// 1.
const [players1, players2] = game.players;
console.log("Team 1", players1);
console.log("Team 2", players2);
// 2.
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
// 3.
const allPlayers = [...players1, ...players2];
console.log("All players", allPlayers);
// 4.
const finalPlayers1 = [...players1, "Thiago", "Cutinho", "Perisic"];
console.log(finalPlayers1);
// 5.
// const { team1, x: draw, team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log("Team1", team1, "Draw", draw, "Team2", team2);
// 6.
game.printGoals = function (...playersName) {
  console.log(playersName);
  let goal = 0;
  for (let i = 0; i < playersName.length; i++) {
    for (let a = 0; a < game.scored.length; a++) {
      playersName[i] === game.scored[a] && goal++;
    }

    console.log(
      `${playersName[i]} scored ${goal} goal${goal <= 1 ? "" : "s"}.`
    );
    goal = 0;
  }
};

game.printGoals("Gnarby", "Hummels", "Adam");
game.printGoals(...game.scored);

// 7.
game.checkWinner = function (team1, team2) {
  team1 < team2 && console.log("Team 1 is likely to win the game");
  team2 < team1 && console.log("Team 2 is likely to win the game");
};

game.checkWinner(team1, team2);

// FOR OF LOOP
console.log(menu);
for (let item of menu.entries()) {
  const [idx, value] = item;
  console.log(`${idx + 1}: ${value}`);
}

console.log(...menu.entries());

console.log(restaurant.weekDays);

// OPTIONAL CHAINING
console.log(restaurant.openingHours.thu.open);
restaurant.openingHours.mon && console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// OPTIONAL CHAINING ON PROPERTIES
// Check if a property exist
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "Closed";
  console.log(
    `On ${day} The restaurant is ${
      open !== "Closed" ? `open form ${open}` : `${open}`
    }  `
  );
}

// OPTIONAL CHAINING ON METHOD
// Check if a method exist
restaurant.orderPizza?.("Banana", "Cipolla", "Gorgonzola");
console.log(
  restaurant.orderRiso?.("Banana", "Cipolla", "Gorgonzola") ||
    "This method doesn't exist"
);

// OPTIONAL CHAINING ON ARRAY
// Check if one specific element of the array exist
const users = [
  { lastName: "Guebre", firstName: "Adam" },
  { lastName: "Guebre", firstName: "Fatou" },
  { lastName: "Guebre", firstName: "Mohamed" },
  { lastName: "Guebre", firstName: "Firdwas" },
];

console.log(users[0]?.firstName);
console.log(users[3]?.lastName);
console.log(users[5]?.lastName || "This user doesn't exist");

// LOOPING OVER OBJECTS
// Properties name
const properties = Object.keys(restaurant.openingHours);
const property = Object.entries(restaurant.openingHours);
console.log(properties);
console.log(property);
for (const day of Object.keys(restaurant.openingHours)) {
  console.log(day);
}

console.log(`The restaurant is opened ${properties.length} days in a week`);

// LOOPING OVER OBJECTS
// Properties value
for (const day of Object.values(restaurant.openingHours)) {
  const { open, close } = day;
  console.log(open, close);
}

// LOOPING OVER OBJECTS
// Properties names and values

for (const day of Object.entries(restaurant.openingHours)) {
  const [dayName, { open, close }] = day;
  console.log(`On ${dayName} we are open from ${open} to ${close}`);
}

// CODING CHALLENGE #9.2
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// 1.
for (const [idx, value] of game.scored.entries()) {
  console.log(`Goal ${idx + 1} : ${value}`);
}

// 2.
let avg = 0;
for (const entry of Object.values(game.odds)) {
  console.log(entry);
  avg += entry / Object.values(game.odds).length;
}

console.log(`Average odd is ${avg}`);

// 3.
for (const [key, value] of Object.entries(game.odds)) {
  const teamName = game[key] || "draw";
  console.log(`Odd of victory ${teamName} is ${value}`);
}

// 4. BONUS
// Create and fill tempScored array with players who scores
const tempScored = [];
for (let i = 0; i < game.scored.length; i++) {
  if (!tempScored.includes(game.scored[i])) {
    tempScored.push(game.scored[i]);
  } else {
    continue;
  }
}
const scorers = {};
console.log(tempScored);
// Looping over tempScored to find to find how many occurance we have
let numGoal = 0;
for (const player of tempScored) {
  for (const scoredPlayer of game.scored) {
    if (player === scoredPlayer) numGoal++;
  }
  scorers[player] = numGoal;
  numGoal = 0;
}

console.log(scorers);

game.scorers = scorers;
console.log(game);

// wWORKING WITH STRING
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane.length);
console.log("SelectAir".length);
console.log(plane.indexOf("A"));
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

function checkMiddleSeat(seat) {
  const seatLine = seat.slice(-1);

  seatLine === "B" || seatLine === "E"
    ? console.log(`${seat} is a middle seat`)
    : console.log(`${seat} is not a middle seat`);
}

checkMiddleSeat("11B");
checkMiddleSeat("1A");
checkMiddleSeat("2E");

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = "JoNaS";
const passengerLowerCase = passenger.toLowerCase();
const passengerCorrect =
  passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
console.log(passengerCorrect);

const email = "hello@jonas.io";
const logInEmail = " helLo@joNas.io \n";
console.log(logInEmail);
const normalizedEmail = logInEmail.trim().toLowerCase();
console.log(normalizedEmail);

// REPLACING

const priceUK = "236,75£";
const priceUS = priceUK.replace("£", "$").replace(",", ".");
console.log(priceUS);

const boarding = "All the passenger come door 23. Boading to door 23.";
// const boardingOk=boarding.replace('door','gate')
const boardingOk = boarding.replaceAll("door", "gate");
console.log(boardingOk);

const newPlane = "Airbus A320neo";
console.log(newPlane.includes("A320"));
console.log(newPlane.startsWith("Air"));
console.log(newPlane.endsWith("neo"));

if (newPlane.startsWith("Air") && newPlane.endsWith("neo")) {
  console.log("The plane is part of the new Airbus family");
}

// Practice exercise
function checkBagage(luggage) {
  console.log(luggage);
  const dangerousObject = ["knife", "gun", "arrow", "c4"];
  let isDangerous = false;
  dangerousObject.forEach((object) => {
    if (luggage.toLowerCase().includes(object)) {
      console.log(`Your lugguage includes ${object} and is not allowed`);
      isDangerous = true;
      return;
    }
  });

  if (!isDangerous) {
    console.log("Your luaggage is dangerous object free, Check In");
  }
}

checkBagage("I have a gun inside my laguage".slice(8, 12).trim());
checkBagage("I have clothes, shoes and pants");
checkBagage("I have clothes, shoes and pants".slice(1, 7).trim());

// SPLIT METHOD
const newStr = "This+is+a+beautiful+day".split("+");
console.log(newStr);
const newName = "Guebre Adama";
const [lastName, firstName] = newName.split(" ");
console.log(lastName, firstName);
const joinedName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(joinedName);

function capitalizedName(names) {
  const splitedNames = names.split(" ");
  splitedNames.forEach((name, i) => {
    splitedNames[i] = name.slice(0, 1).toUpperCase() + name.slice(1);
  });
  console.log(splitedNames.join(" "));
}

capitalizedName("Guebre Adama");
capitalizedName("sam remy dasislva");

// PADDING A STRING
const message = "Go to gate 23";
console.log(message.padStart(25, "#").padEnd(40, "]"));
console.log(message.padEnd(25, "@").padStart(40, "£"));

function maskCreditCard(number) {
  number = number + "";
  const lastDigit = number.slice(-4);
  console.log(
    "This is your credit card masked",
    lastDigit.padStart(number.length, "#")
  );
}
maskCreditCard(12788888888888888);
maskCreditCard(127884765);
maskCreditCard(1270089);

const message2 = "Bad weather... All departures are delayed... \n";
console.log(message2.repeat(5));

function planeInLine(n) {
  console.log(`There are ${n} planes waiting ${"🛫".repeat(n)}`);
}

planeInLine(7);
planeInLine(4);
planeInLine(12);

// CHALLENGE #9.4
const data =
  "underscore_score\nfirst_name\nsome_variables\ncalculate_AGE\ndelayed_departure ";

function setCamelCase(data) {
  const splitedData = data.split("\n");
  for (const [idx, variable] of splitedData.entries()) {
    const [name1, name2] = variable.split("_");
    const camelCase =
      name1.toLowerCase() +
      name2[0].toUpperCase() +
      name2.slice(1).toLowerCase();
    console.log(`${camelCase.padEnd(25, " ")}${"⚡".repeat(idx + 1)}`);
  }
}

setCamelCase(data);

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

console.log(flights.split("+"));

const cutFirtsTreeLetters = (word) => word.slice(0, 3).toUpperCase();
const trimflight = (flight) => flight.replaceAll("_", " ").trim();

for (const item of flights.split("+")) {
  const [flight, form, to, time] = item.split(";");
  const output = `${
    trimflight(flight).startsWith("Delayed") ? "🥹" : ""
  } ${trimflight(flight)} form ${cutFirtsTreeLetters(
    form
  )} to ${cutFirtsTreeLetters(to)} at (${time})`.padStart(48);
  console.log(output);
}
