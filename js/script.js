"use script"; 

// ============ Practice 3 (018) ============ // 

let numberOfFilms; 

function start() {
    numberOfFilms = +prompt('How many films do you whatch?', ''); 

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films do you whatch?', ''); 
    }
}

start(); 

const personalMovieDB = {
      count: numberOfFilms, 
      movies: {}, 
      genres: [], 
      privat: true, 
}; 

function rememberMyFilm() {
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
    console.log(personalMovieDB.movies); 
}

rememberMyFilm(); 

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Little movie directory'); 
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Middle movie directory'); 
    } else if (personalMovieDB.count >= 30) {
        console.log('BIG movie directory'); 
    } else {
        console.log('ERROR!'); 
    }
}

detectPersonalLevel(); 

function showMyDB(privatIsTrue) {
    if (!privatIsTrue) {
        console.log(personalMovieDB);
    } else {
        console.log('This information is privat'); 
    }
}

showMyDB(personalMovieDB.privat); 

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const genre = prompt(`Your favorite Genre ${i+1}`);
        if (genre !== '' && genre !== null) {
            personalMovieDB.genres[i] = genre; 
        } else {
            i--;
        }
    }

    console.log(personalMovieDB.genres); 
}

writeYourGenres(); 


// ============ Practice 3 (018) GIT Push ============ // 
