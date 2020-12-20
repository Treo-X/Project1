'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },

    showMyDB: function (hidden) {
        if (hidden === false) {
            console.log(personalMovieDB);
        } else {
            console.log("Доступ запрещен");
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            if(personalMovieDB.genres[i - 1] != null && personalMovieDB.genres[i - 1] != ''){
                console.log("Yea");
            } else {
                console.log("No");
                i--;
            }
        }
        personalMovieDB.genres.forEach(function(item, i, arr){
            console.log(`Любимый жанр №${i} - ${item}`);
        });
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat=== true){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }

};

personalMovieDB.toggleVisibleMyDB();

personalMovieDB.detectPersonalLevel();

personalMovieDB.rememberMyFilms();

personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB(personalMovieDB.privat);






