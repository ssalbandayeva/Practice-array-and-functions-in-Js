const persons = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***

//1. Get array of all names

let result;
result = persons.map((item) => {
  const { name } = item;
  return { name };
});
console.log(result);

//2. Get array of all heights

// let result;
// result = persons.map(item => item.height)
// console.log(result);

//3. Get array of objects with just name and height properties
// let result;
// result = persons.map((item) => {
//   const { name, height } = item;
//   return { name, height };
// });
// console.log(result);

//4. Get array of all first names

// let result;
// result=persons.map(item=> item.name.split(" ")[0]);
// console.log(result);

//***REDUCE***

//1. Get total mass of all characters
// let result = persons.map((item) => parseInt(item.mass));
// console.log(result);
// let totalMass = result.reduce((acc, curr) => acc + curr);
// console.log({ totalMass });

//2. Get total height of all characters
// let result = persons.map((persons) => parseInt(persons.height));
// console.log(result);
// let totalHeight = result.reduce((acc, curr) => acc + curr);
// console.log({ totalHeight });

//3. Get total number of characters by eye color
// let result = persons.map((item) => item.eye_color);
// console.log(result);
// const totalUniqueColors = persons.reduce((acc, curr) => {
//     if (acc.indexOf(curr.eye_color) === -1) {
//       acc.push(curr.eye_color);
//     }
//     return acc;
//   }, []);
//   console.log(totalUniqueColors)

//4. Get total number of characters in all the character names
// const totalNum = persons.reduce((acc, curr) => {
//     if (acc.indexOf(curr.name) === -1) {
//       acc.push(curr.name);
//     }
//     return acc;
//   }, []);
//   console.log(totalNum)

//***FILTER***

//1. Get characters with mass greater than 100
// let result;
// result = persons.filter((item) => parseInt(item.mass) > 100);
// console.log(result);

//2. Get characters with height less than 200
// let result;
// result = persons.filter((item) => parseInt(item.height) <= 200);
// console.log(result);

//3. Get all male characters

// let result;
// result = persons.filter((item) => item.gender === "male");
// console.log(result);

//4. Get all female characters
// let result;
// result = persons.filter((item) => item.gender === "female");
// console.log(result);

//***SORT***

//1. Sort by mass

// let result;
// result = persons.sort((x, y) => Number(x.mass) - Number(y.mass));
// console.log(result);

//2. Sort by height

// let result;
// result = persons.sort((x, y) => Number(x.height) - Number(y.height));
// console.log(result);

//3. Sort by name

// let result;
// result = persons.sort(function (a, b) {
//     if (a.name < b.name) {
//       return -1;
//     }
//     if (a.name > b.name) {
//       return 1;
//     }
//     return 0;
//   });

// console.log(result);

//4. Sort by gender

// let result;
// result = persons.sort((a, b) => b.gender.localeCompare(a.gender));
// console.log(result);

//***EVERY***

//1. Does every character have blue eyes?
// let result;
// result = persons.every((item) => item.eye_color==="blue");
// console.log(result);

//2. Does every character have mass more than 40?
// let result;
// result = persons.every((item) => parseInt(item.mass)> 40);
// console.log(result);

//3. Is every character shorter than 200?
// let result;
// result = persons.every((item) => parseInt(item.height)< 200);
// console.log(result);

//4. Is every character male?
// let result;
// result = persons.every((item) => item.gender==="male");
// console.log(result);

//***SOME***

//1. Is there at least one male character?
// let result;
// result = persons.some((item) => item.gender==="male");
// console.log(result);

//2. Is there at least one character with blue eyes?
// let result;
// result = persons.some((item) => item.eye_color==="blue");
// console.log(result);

//3. Is there at least one character taller than 210?
// let result;
// result = persons.some((item) => Number(item.height)>210);
// console.log(result);

//4. Is there at least one character that has mass less than 50?
// let result;
// result = persons.some((item) => Number(item.mass)<50);
// console.log(result);
