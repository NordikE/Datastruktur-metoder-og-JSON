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
console.log("1.6a");
const allPeopleInfo = peopleArrayWithObjects.map((person) => {
  return (
    "name: " +
    person.name +
    ", age: " +
    person.age +
    ", email: " +
    person.email +
    ", country: " +
    person.country +
    ", hobbies: " +
    person.hobbies
  );
});

console.log(allPeopleInfo);
const peopleWrapper = document.getElementById("people-wrapper");
allPeopleInfo.forEach((data) => {
  const personWrapper = document.createElement("div");
  personWrapper.textContent = data;

  peopleWrapper.appendChild(personWrapper);
});

// 1.6
console.log("1.6b");
const hobbiesArrays = peopleArrayWithObjects.map((person) => person.hobbies);

let commonHobbies = hobbiesArrays[0];

for (let i = 1; i < hobbiesArrays.length; i++) {
  const currentHobbies = hobbiesArrays[i];
  commonHobbies = commonHobbies.filter((hobby) =>
    currentHobbies.includes(hobby)
  );
}

const commonHobbiesWrapper = document.getElementById("common-hobbies");
const commonHobbiesDiv = document.createElement("div");
commonHobbiesDiv.textContent = "Common Hobbies: " + commonHobbies.join(", ");

commonHobbiesWrapper.appendChild(commonHobbiesDiv);

//1.7
console.log("1.7");

// 2
console.log("2");
const randomArray = [];
for (let i = 0; i < 10; i++) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  randomArray.push(randomNumber);
}

console.log(randomArray);

// 2.1
console.log("2.1");
const oddNumbers = [];
const evenNumbers = [];
randomArray.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  } else {
    oddNumbers.push(number);
  }
});

console.log("Odd numbers:", oddNumbers);
console.log("Even numbers:", evenNumbers);
