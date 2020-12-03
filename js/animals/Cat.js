import { Animal } from './Animal.js';

class Cat extends Animal {
    constructor(name, furColor) {
        super(name, furColor);

        this.voice = 'Miau miau!';
    }
}

export { Cat }