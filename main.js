import { peopleArrayWithObjects } from "./datastruktur-metoder_og_JSON.js" assert { type: "json" };

// 1.0

console.log(peopleArrayWithObjects);

// 1.1

const firstPerson = peopleArrayWithObjects[0];
const lastPerson = peopleArrayWithObjects[peopleArrayWithObjects.length -  1];

console.log(firstPerson);
console.log(lastPerson);



// 1.2

let person = Object.entries (peopleArrayWithObjects);

