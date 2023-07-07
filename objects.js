console.groupCollapsed("Object Basics");

const tvShow = {
    title: "Breaking Bad",
    genres: ["Drama", "Thriller"],
    cast: ["Aaron Paul", "Bryan Cranston"],
    "theme-song": "Let Them Cook",
    releaseYear: 2008,
    runLength: 45,
    rating: 10,
    // multi: [[0, 1], [3, 4]] // tvShow.multi[1][2] = 5
}

console.log(tvShow);

console.log(tvShow.title);
console.log(tvShow["title"]);

console.log(tvShow["theme-song"]);

// Updating rating to 11
console.log(tvShow.rating);
tvShow.rating = 11;
console.log(tvShow.rating);

// Add a cast member: Anna Gunn (push)
tvShow.cast.push("Anna Gunn");
console.log(tvShow.cast);

//  Add another property: Creator: Vince Gilligan
tvShow.creator = "Vince Gilligan";

console.log(tvShow);

console.groupEnd("Object Basics");

console.groupCollapsed("Complex Arrays/Objects");
const tvShows = [
    {
        title: "Breaking Bad",
        genres: ["Drama", "Thriller"],
        cast: ["Aaron Paul", "Bryan Cranston"],
        "theme-song": "Let Them Cook",
        releaseYear: 2008,
        runLength: 45,
        rating: 10,
    },
    {
        title: "House of the Dragon",
        genres: ["Fantasy", "Drama"],
        cast: ["Milly Alcock", "Emma D'Arcy", "Matt Smith"],
        "theme-song": "Game of Thrones (Original)",
        releaseYear: 2022,
        runLength: 50,
        rating: 10,
    },
    {
        title: "Squid Games",
        genres: ["Thriller", "Horror"],
        cast: ["HoYeon Jung", "Lee Jung-jae", "Gong Yoo"],
        "theme-song": "Squid Games (Original)",
        releaseYear: 2021,
        runLength: 50,
        rating: 10,
    },
];

// Console log title for all tvShows
console.log(tvShows[0].title);
console.log(tvShows[1].title);
console.log(tvShows[2].title);

// TODO: Remove last cast member of Squid Games ?
tvShows[2].cast.pop();
tvShows[0].cast.push("Detective Guy Actor");
console.log(tvShows[0]);

console.log(tvShows[2].cast);
console.groupEnd("Complex Arrays/Objects");