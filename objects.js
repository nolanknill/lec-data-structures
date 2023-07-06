console.groupCollapsed("Objects");

// Initialize and object
const tvShow = {
    title: "Suits",
    "number-of-episodes": 100,
    genres: ["drama", "legal"],
    numberOfSeasons: 10,
    castMembers: ["Gabriel Macht", "Patrick J. Adams", "Meghan, Duchess of Sussex"],
    year: 2011,
};

// Get all the keys of an object
const tvShowKeys = Object.keys(tvShow);
console.log(tvShowKeys);

const episodesKey = "number-of-episodes";
// tvShow.episodeKey = 134; // does not work
// When you have a dynamic value you want to use as a key, use square bracket syntax
tvShow[episodesKey] = 134;

// Updating values
tvShow["numberOfSeasons"] = 9;
tvShow.rating = 8.9;

// Modifying array values within an object
tvShow.castMembers.pop();
tvShow.castMembers.push("Meghan, Duchess of Sussex");

// Print out 
console.log(
    `${tvShow.title} has ${tvShow.numberOfEpisodes} episodes and ${tvShow["number-of-episodes"]} seasons, it came out in ${tvShow.year}. It's rated ${tvShow.rating}.`
);

const tvShows = [
    tvShow,
    {
        title: "Game of Thrones",
        "number-of-episodes": 60,
        genres: ["fantasy", "disappointing finish"],
        numberOfSeasons: 8,
        castMembers: ["Thor Bjornsson", "Kit Harrington",  "Emilia Clarke"],
        year: 2011,
        rating: 2
    },
    {
        title: "Teletubbies",
        "number-of-episodes": 365,
        genres: ["educational", "children"],
        numberOfSeasons: 2,
        castMembers: ["Red", "Yellow",  "Green", "Purple"],
        year: 2001,
        rating: 8.91
    }
]

// Access all tv show titles
console.log(tvShows[0].title);
console.log(tvShows[1].title);
console.log(tvShows[2].title);

// change rating of teletubbies to a perfect 10
tvShows[2].rating = 10;

// get number of cast members for GoT
console.log("Number of GoT cast members: ", tvShows[1].castMembers.length);

console.log(tvShows[2]);
console.groupEnd("Objects");