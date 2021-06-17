// Iteration 1: All directors? - Get the array of all directors.

//We need to get the array of all directors. Since this is a warm up, we will 
//give you a hint: you have to map through the array of 
//movies and get all the directors into one array as a final result. 
//Go ahead and create a function named getAllDirectors() that 
//receives an array of movies as an argument and returns a new (mapped array).

const movies = require("./data");

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


//const getAllDirectors = (movies) => movies.map((movie) =>
//movie.director);

 function getAllDirectors(movies) {
     return movies.map(function(movie){
         return movie.director
     })
}

//(movie) is the elements of the movies array


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//Go ahead and create a howManyMovies() function that receives an array as a parameter and filter
//the array so we can have only the drama movies where Steven Spielberg is the director.

function howManyMovies(movies) {
  let dramaMoviesOnly = movies.filter (function(movie) {
    return movie.director === "Steven Spielburg" && movie.genre.includes("drama")
  })
  return dramaMoviesOnly.length;
 // return counterOfMovies += 1;
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
//These are the best movies based on their scores, so supposedly all of them have a remarkable score. 
//In this iteration, we want to know the average score of all of them and display it on the console. 
//Create a scoresAverage() function that receives an array as a parameter and solves the challenge.

//The score must be returned rounded to 2 decimals!

//Maybe you want to "reduce" the data to a single value. 😉


function scoresAverage(movies) {
  if (!movies.length) {
    return 0;
  };
  const scoreAvg = movies.reduce((total, movie) => {
    if (movie.score) {
      return total + movie.score / movies.length;} 
      0})
  return scoreAvg;
}
//use roundedToTwo ()
//let roundedToTwo = Math.round(anyNumber*100)/100;
//console.log(roundedToTwo); // <== 5.68


/*
function sum (movies) {
  const scoreSum = movies.reduce((total, movie) => {

  })
  if (!movies.length) return;

  for (let sum = 0, i = 0; i < movies.length; i++)
  sum += array[i];
}
return sum;
}

function ScoresAvg (movies) {
  if (!movies.length) return;

  return sum(movies) / movies.length;
}
*/
//of
/*
function avg(array) {
  if (!array.length) return;

  for (let sum = 0, i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
*/


// Iteration 4: Drama movies - Get the average of Drama Movies
//Create a dramaMoviesScore() function that receives an array as a parameter 
//to get the average score of all drama movies! Let's see if it is better than 
//the general average.
//Again, rounded to 2 decimals!

//use filter and include for drama
function dramaMoviesScore(movies) {
const only = {

}

  return 
}
//use roundedToTwo ()
//let roundedToTwo = Math.round(anyNumber*100)/100;
//console.log(roundedToTwo); // <== 5.68






// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//We need to sort the movies in ascending order by their release year. 
//This should be easy using one of the methods we have just learned. 😉 
//Create a function orderByYear() that receives an array as parameter and
// returns a new sorted array.

//use .filter and .sort and include.year
function orderByYear(movies) {
  //if (movie.year) {

  }
  movies.sort((a, b) => a - b);

console.log(movies);
}

/*basic .sort():
  let Year = movies.sort(function (a, b) => {
    if (a<b) {
      return -1;
    }
    else {
      return 1;
    }
    })
}
console.log(orderByYear)


/* basic .sort() by numerical order:
const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

// ES5
numbers.sort(function (a, b) {
  return a - b;
});

// ES6
numbers.sort((a, b) => a - b);

console.log(numbers);
// [ 0, 1, 9, 18, 22, 23, 64, 68, 99, 112, 223 ]
*/



/*
return values in an array:

function orderByYear(movies, movies1, movies2) {
  const movie = [movies, movies1, movies2];
  
  return movie;
}
orderByYear('Shawshank Redemption', 'Cathedral', 'Moonspirit');
*/

//ik ben heel dom


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
/*
Another popular way to order the movies is to sort them alphabetically 
using the title key. However, in this case, we only need to print the title 
of the first 20. Easy peasy for an expert like you. 😉
Create a orderAlphabetically() function, that receives an array and 
returns an array of first 20 titles, alphabetically ordered. 
Return only the title of each movie, and if the array you receive has 
less than 20 movies, return all of them.
*/

function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
