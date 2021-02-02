const favFoods = [
  'tacos',
  {
    healthy: ['carrots, peppers, avocado'],
    notHealthy: ['pizza, cheese curds, fried chicken sandwich'],
  },
  'bacon',
  'cucumber',
];

let scream = require('./scream');

console.log('hello', scream('world'));

// let counter = require('./counter');
// console.log(counter());
// console.log(counter());
// console.log(counter());

let favoriteNumber = require('./myFavoriteNumber');

let cullenites = require('./cullenites');

// console.log(cullenites.students);
// console.log(cullenites.instructor);

cullenites.makeStudent('josh');
console.log(cullenites.students);
// console.log(favoriteNumber);

// for (let i = 0; i < favFoods.length; i++) {
//   console.log(favFoods[i]);
//   if (typeof favFoods[i] !== 'string' && typeof favFoods[i] !== 'number') {
//     console.log('this is not a string or a number');
//   }
// }
