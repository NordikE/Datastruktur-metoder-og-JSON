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
  const randomNo = Math.floor(Math.random() * 100) + 1;
  randomArray.push(randomNo);
}

console.log(randomArray);

// 2.1
console.log("2.1");
const oddNos = [];
const evenNos = [];
randomArray.forEach((number) => {
  if (number % 2 === 0) {
    evenNos.push(number);
  } else {
    oddNos.push(number);
  }
});

console.log("Odd numbers:", oddNos);
console.log("Even numbers:", evenNos);

// 2.2
console.log("2.2");
function findLargestNo(arr) {
  return Math.max(...arr);
}
console.log("Largest Even Number:", findLargestNo(evenNos));
console.log("Largest Odd Number:", findLargestNo(oddNos));

// 2.3
console.log("2.3");
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
const sumEvenNos = sumArray(evenNos);
const sumOddNos = sumArray(oddNos);
console.log("Sum of Even Numbers:", sumEvenNos);
console.log("Sum of Odd Numbers:", sumOddNos);

// 2.4
console.log("2.4");
function compareSums(evenNos, oddNos) {
  const sum1 = sumArray(evenNos);
  const sum2 = sumArray(oddNos);
  if (sum1 > sum2) {
    return "Sum of Even Numbers is greater than Sum of Odd Numbers";
  } else if (sum2 > sum1) {
    return "Sum of Odd Numbers is greater than Sum of Even Numbers";
  } else {
    return "Sum of Even Numbers is equal to Sum of Odd Numbers";
  }
}

// 2.5
console.log("2.5");
const oppgave2 = document.getElementById("oppgave2");
oppgave2.innerHTML = `
    <div id="originalArray">
        <p>Random Array: ${randomArray}</p>
    </div>
    <div id="oddNumbers">
        <p>Odd Numbers: ${oddNos}</p>
    </div>
    <div id="evenNumbers">
        <p>Even Numbers: ${evenNos}</p>
    </div>
    <div id="largestNumber">
        <p>Largest Number in Even Numbers Array: ${findLargestNo(evenNos)}</p>
        <p>Largest Number in Odd Numbers Array: ${findLargestNo(oddNos)}</p>
    </div>
    <div id="sums">
        <p>Sum of Even Numbers: ${sumEvenNos}</p>
        <p>Sum of Odd Numbers: ${sumOddNos}</p>
    </div>
    <div id="comparison">
        <p>${compareSums(evenNos, oddNos)}</p>
    </div>
`;
