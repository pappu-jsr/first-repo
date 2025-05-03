////// Array - part-1

const MyHeroes=[" mom","brother","dad"]
const other_heroes=["superman","batman","spiderman"]
console.log(MyHeroes);

// MyHeroes.push(other_heroes)
// console.log(MyHeroes);
// console.log(MyHeroes[3][1]);

// const both_heroes=MyHeroes.concat(other_heroes)
// console.log(both_heroes);

const all_heroes=[...MyHeroes,...other_heroes]
console.log(all_heroes);

const another_Array=[1,2,3,[4,5],6,[7,8,[9,10]]]
const real_another_Array=another_Array.flat(2)
console.log(real_another_Array);

console.log(Array.isArray("hitesh"));
console.log(Array.from("priyansh"))

console.log(Array.from({name:"priyansh"}));  //intersting

let score=100
let score1=200
let score2=300

console.log(Array.of(score,score1,score2));








