"use script"; 

let numberOfFilms = +prompt('How many films do you whatch?', ''); 

const personalMovieDB = {
    count: numberOfFilms, 
    movies: {}, 
    genres: [], 
    privat: false,
};

// const a = prompt('The last film you whatch 1?', ''), 
//       b = prompt('How can you rate it 1?', ''), 
//       c = prompt('The last film you whatch 2', ''), 
//       d = prompt('How can you rate it 2?', ''); 

// personalMovieDB.movies[a] = b; 
// personalMovieDB.movies[c] = d; 

// console.log(personalMovieDB); 

// ============ Practice 2 ============ // 

for (let i = 0; i < 2; i++) {
    
    const a = prompt('The last film you whatch 1/2?', ''), 
          b = prompt('How can you rate it 1/2?', ''); 

    if (a != '' && b != '' && a != null && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b; 
        console.log('Done!');
    } else {
        console.log('ERROR!');
        i--; 
    }
}
console.log(personalMovieDB); 

if (personalMovieDB.count < 10) {
    console.log('Little movie directory'); 
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Middle movie directory'); 
} else if (personalMovieDB.count >= 30) {
    console.log('BIG movie directory'); 
} else {
    console.log('ERROR!'); 
}





