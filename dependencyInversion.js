// Dependency Inversion Principle (DIP):

// Cumplimiento del principio DIP
class Animal {
  constructor(sound) {
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

class Dog {
  constructor(animal) {
    this.animal = animal;
  }

  bark() {
    this.animal.makeSound();
  }
}

const dog = new Dog(new Animal("Guau"));
dog.bark(); // output: Guau
