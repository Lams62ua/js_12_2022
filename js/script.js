"use script"; 

// VAR's

let numberOfFilms = +prompt('How many films do you whatch?', ''); 

const personalMovieDB = {
    count: numberOfFilms, 
    movies: {}, 
    genres: [], 
    privat: false,
};

const a = prompt('The last film you whatch 1?', ''), 
      b = prompt('How can you r.. it 1?', ''), 
      c = prompt('How is your name? 2', ''), 
      d = prompt('How can you r.. it 2?', ''); 

personalMovieDB.movies[a] = b; 
personalMovieDB.movies[c] = d; 

console.log(personalMovieDB); 





