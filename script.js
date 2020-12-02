"use strict";

const number0fFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: number0fFilms,
    movie: {},
    actors: {},
    genres: [],
    private: false
};

let a = prompt("Один из последних просмотренных фильмов?", "");
personalMovieDB.movie[a] = prompt("На сколько оцените его?");

let b = prompt("Второй из последних просмотренных фильмов?", "");
personalMovieDB.movie[b] = prompt("На сколько оцените его?");

console.log(personalMovieDB.count);
console.log(personalMovieDB.movie);
console.log(personalMovieDB.private);

