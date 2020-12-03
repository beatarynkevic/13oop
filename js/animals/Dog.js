import { Animal } from './Animal.js';

class Dog extends Animal {
    constructor(name, furColor) {
        super(name, furColor)

        this.voice = 'Au au!';
    }
}

export { Dog }