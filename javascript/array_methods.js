const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

/*Array Methode filter -----------------------------------*/

const filteredItems = items.filter(function (item) {
  return item.price <= 100;
});

const filteredItemsArrow = items.filter((item) => {
  return item.price <= 100;
});

console.log(filteredItems);
console.log(filteredItemsArrow);

/*Array Methode map -----------------------------------*/

const itemNames = items.map(function (item) {
  return item.name;
});

const itemPricesArrow = items.map((item) => {
  return item.price;
});

console.log(itemNames);
console.log(itemPricesArrow);

/*Array Methode find -------------------------------------- */

const foundItem = items.find(function (item) {
  return item.name === "Album";
});

const foundItemArrow = items.find((item) => {
  return item.name === "Book";
});

console.log(foundItem);
console.log(foundItemArrow);

/*Array Methode forEach --------------------------------------- */

items.forEach((item) => {
  console.log(item.name);
});

items.forEach(function (item) {
  console.log(item.price);
});

/*Array Methode some (read: has some or at least 1 ---------------------------------*/
const hasInexpensiveItems = items.some(function (item) {
  return item.price <= 100; //true
});

const hasInexpensiveItemsArrow = items.some((item) => {
  return item.price > 1000; //false
});

console.log(hasInexpensiveItems);
console.log(hasInexpensiveItemsArrow);

/*Array Methode every ----------------------------------------------------*/
const everyItemInexpensive = items.every(function (item) {
  return item.price <= 100; //false
});

const everyItemInexpensiveArrow = items.every((item) => {
  return item.price <= 1500; //true
});

console.log(everyItemInexpensive);
console.log(everyItemInexpensiveArrow);

/*Array Methode reduce add (+) eveything in the array-----------------------------------*/

const total = items.reduce(function (currentTotal, item) {
  return item.price + currentTotal;
}, 0);

const totalArrow = items.reduce((currentTotal, item) => {
  return item.name + currentTotal;
}, 0);

console.log(total);
console.log(totalArrow);

/*Array Methode includes ---------------*/

const otherItems = [
  "Bike",
  "Book",
  "Album",
  "TV",
  "Phone",
  "Computer",
  "Keyboard",
];

const includesBook = otherItems.includes("Book");
console.log(includesBook);
console.log(otherItems.includes("Mouse"));

const somePeople = [
  { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
  { name: "H. de Haan", profession: "chicken hypnotist", age: 59 },
  { name: "A. Curry", profession: "frogman", age: 32 },
  { name: "F. Vonk", profession: "snake milker", age: 36 },
  { name: "B. Bunny", profession: "rabbit walking service", age: 27 },
  { name: "Dr.Evil", profession: "digital overlord", age: 56 },
];

//checking itterations with console.log (Debugging 101 - console.log())
let today = new Date();
for (let people of somePeople) {
  console.log("This is the whole person: " + people);
  console.log("The name of the persone is: " + people.name);
  console.log(
    "The year of birth of this person is: " +
      (parseInt(today.getFullYear()) - people.age)
  );
  console.log(people.name + " is a " + people.profession);
  if (people.age > 50) {
    console.log(
      people.name +
        " is over 50 years old. That is correct. Age is: " +
        people.age
    );
  } else {
    console.log(
      people.name +
        " is atleast 50 years old. That is correct. Age is: " +
        people.age
    );
  }
}
