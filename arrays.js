console.groupCollapsed("Array Basics");

const sports = [
    "basketball", // 0
    "football",  // football/soccer
    "baseball",  //2
    "tennis", 
    "lacrosse", 
    "ultimate frisbee", 
    "e-sports",  // 6
    "quidditch" 
];

console.log(sports);

// access the 3rd item, assign to variable
const baseball = sports[2];
console.log(baseball);

// access 1st item
console.log(sports[0]);

// change an array item
sports[6] = "badminton";

console.log(sports);

// 3 ways to change a string array item
console.log(sports[1]);
// sports[1] = sports[1] + "/soccer";
// sports[1] = `${sports[1]}/soccer`;
sports[1] += "/soccer";
console.log(sports[1]);


// get number of items in an array
console.log(sports.length);

// access last item in the array
console.log(
    sports[sports.length - 1]
);


console.groupEnd("Array Basics");


console.groupCollapsed("Array Methods");

// Add items to an array
sports.push("test sport", "equestrian");

const removedSport = sports.pop();
console.log("The sport we removed was " + removedSport);

// Remove two items (lacrosse, ultimate frisbee) then replace them
const removedSports = sports.splice(4, 2, "test sport", "equestrian");

// Converting array of strings to a string
console.log("The removed sports were: " + removedSports.join(", "));

// Add item to start of array
sports.unshift("Bowling");

// Remove item from start of array
sports.shift();

// Reverse the order of an array
console.log(sports);
sports.reverse();
console.log(sports);

// Sort the array alphabetically
sports.sort();
console.log(sports);

// By default, sort sorts values as strings
const temperature = [15, 35, 20, 4, 2, -3, -40, -20];
temperature.sort();
console.log(temperature);


// Check for presence of item
const badmintonIsPresent = sports.includes("badminton");
console.log(badmintonIsPresent);

// Combines two arrays
const daniilsFavouriteSports = ["hockey", "hot dog eating"];
const newFavouriteSports = sports.concat(daniilsFavouriteSports);
console.log(newFavouriteSports);


// Copy an array and modify just one version
const sports2 = newFavouriteSports.slice();

sports2.push("cricket");

console.log(sports2);
console.log(newFavouriteSports);

console.groupEnd("Array methods");