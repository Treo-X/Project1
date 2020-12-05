"use strict";

let i = 0;

const number0fFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: number0fFilms,
    movie: {},
    actors: {},
    genres: [], 
    private: false
};

if(personalMovieDB.count < 10 && personalMovieDB > 0) {
    alert("Просмотрено довольно мало фильмо");
} else if(personalMovieDB.count >=  10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if(personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

for(let i = 0; i < 2; i++){

    let a = prompt("Один из последних просмотренных фильмов?", "");
    let b = prompt("На сколько вы его оцените?");

    if(a == null || b == null || a == "" || b == "" || a.legnth > 50){
        i--;
        console.log("No");  
    } else {
        console.log("Yes");
        personalMovieDB.movie[a] = b;
    }
    
}

console.log(personalMovieDB);

