import { SingleDog } from './SingleDog.js';

const suo1 = new SingleDog('Rexas', 'rudas', 'Vokieciu aviganis');  //suns tipo objektas
const suo2 = new SingleDog('Brisius', 'pilkas', 'Lietuvos lencuginis');        //blynas

console.log(suo1);
console.log(suo2);

console.log(suo1.breed);
console.log(suo2.breed);

suo1.introduce();
suo2.introduce();

suo1.move(5);

suo1.addLovedPeople('Zymantas');
suo1.addLovedPeople('Andre');
suo1.addLovedPeople('Kate');

/*
Gyvunai kaip objektai:
-turi:
    -varda
    -spalva
    -veisle
    -judejimo greitis = 0
-gali:
    -prisistatyk
    -isskleisti garsa
    -judeti

*/