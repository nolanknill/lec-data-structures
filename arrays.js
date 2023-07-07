console.groupCollapsed("Array Basics");

let sports = [
    "Hockey",
    "Basketball",
    "Baseball",
    "American Football",
    "Soccer", //4 = Football
    "Golf",
    "Skiing",
    "Rock Climbing",
    "Hot Dog Eating",
    "Boxing"
];

sports[4] = "Football";
const soccer = sports[4];
console.log(soccer);

console.groupEnd("Array Basics");

console.groupCollapsed("Array Methods");

sports.push("Tennis", "Quidditch", "Tag");

let removedSport = sports.pop();
console.log("We just removed " + removedSport);

let removedSports = sports.splice(5, 3);

let removedSportsString = "We just removed ";
removedSportsString += removedSports.join(", ");
console.log(removedSportsString);


console.log(sports.length);
const lastSport = sports[sports.length - 1];
console.log(lastSport);

// Add item to the front of the array
sports.unshift("Ping-Pong");
console.log(sports.shift());

sports.reverse();

sports.sort();

const temperatures = [5, 97, -22, 111, 72, 32, 100, 0, -40];
temperatures.sort();
// -40, -22, 0, 5, 32, 72, 97, 100, 111
console.log(temperatures);

/*
// console.log(soccer);

// console.log(sports[0]);
// console.log(sports[1]);
// console.log(sports[2]);
// console.log(sports[3]);
// console.log(sports[4]);
// console.log(sports[-1]);
*/

// is Boxing in our array?
console.log(sports.includes("boxing"));

console.log(sports);
// Add removedSports back to sports array
sports = sports.concat(removedSports);


// TODO: Create a new array, add a new sport to second array without modifying the first array
const sportsCopy = [...sports];
sportsCopy.push("Sepak Takraw");

console.log(sportsCopy);
console.log(sports);

console.groupEnd("Array Methods");