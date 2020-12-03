import { Dog } from './animals/Dog.js';
import { Cat } from './animals/Cat.js';

const rikis = new Dog('Rikis', 'baltas');
rikis.sound();

const burbon = new Cat('Burbon', 'juoda');
burbon.sound();

rikis.introduce();
burbon.introduce();