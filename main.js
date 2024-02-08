import { peopleArrayWithObjects } from "./datastruktur-metoder_og_JSON.js";

// 1.0
console.log("1.0");
console.log(peopleArrayWithObjects);

// 1.1
console.log("1.1");
const firstPerson = peopleArrayWithObjects[0];
const lastPerson = peopleArrayWithObjects[peopleArrayWithObjects.length - 1];

console.log(firstPerson);
console.log(lastPerson);

// 1.2
console.log("1.2");
Object.entries(firstPerson).forEach(([key, value]) => {
  console.log("${key}:", value);
});

Object.entries(lastPerson).forEach(([key, value]) => {
  console.log("${key}:", value);
});

// 1.3
console.log("1.3");
Object.entries(firstPerson).forEach(([key, value]) => {
  if (key === "hobbies") {
    console.log(value);
  }
});

// 1.4
console.log("1.4");
const hobbies = firstPerson.hobbies.map((hobby) => hobby);
console.log(hobbies);

// 1.5
console.log("1.5");
const firstPersonHobbies = firstPerson.hobbies;
const lastPersonHobbies = lastPerson.hobbies;
const hobbiesInCommon = firstPersonHobbies.filter((hobby) =>
  lastPersonHobbies.includes(hobby)
);
console.log(hobbiesInCommon);

// 1.6
console.log("1.6");
