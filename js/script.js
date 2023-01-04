"use script"; 

// ============ Practice 4 (024) ============ // 


const personalMovieDB = {
    count: 0, 
    movies: {}, 
    genres: [], 
    privat: true, 
    start: function() {
        personalMovieDB.count = +prompt('How many films do you whatch?', ''); 
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films do you whatch?', ''); 
        } 
    }, 
    rememberMyFilm: function() {
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
    }, 
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Little movie directory'); 
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Middle movie directory'); 
        } else if (personalMovieDB.count >= 30) {
            console.log('BIG movie directory'); 
        } else {
            console.log('ERROR!'); 
        }
    }, 
    showMyDB: function(privatIsTrue) {
        if (!privatIsTrue) {
            console.log(personalMovieDB);
        } else {
            console.log('This information is privat'); 
        }
    }, 
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }, 
    // ================ METHOD 1 =======================================================     
    // writeYourGenres: function() {
    //     for (let i = 0; i < 3; i++) {
    //         const genre = prompt(`Your favorite Genre ${i+1}`);
    //         if (genre !== '' && genre !== null) {
    //             personalMovieDB.genres[i] = genre; 
    //         } else {
    //             console.log('Incorrect text!'); 
    //             i--;
    //         }
    //     }
    //     personalMovieDB.genres.forEach(function(item, num) {
    //         console.log(`Favorite genre number ${num+1}, is - ${item}`); 
    //     }); 
    // }, 
    // ================ METHOD 2 =======================================================     
    writeYourGenres: function() {
        for (let i = 0; i < 1; i++) {
            const genres = prompt(`Write your three favorite GenreS (using , )`).toLowerCase(); 
                if (genres !== '' && genres !== null) {
                    personalMovieDB.genres = genres.split(", "); 
                    personalMovieDB.genres.sort(); 
                } else {
                    console.log('Incorrect text!'); 
                    i--;
                }
        }
        personalMovieDB.genres.forEach(function(item, num) {
            console.log(`Your favorite genre number ${num+1}, is - ${item}`); 
        }); 
        console.log(personalMovieDB.genres); 
    }, 

}; 

// ============ Practice 4 (024) GIT Pushed ============ // 

