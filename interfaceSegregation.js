// Interface Segregation Principle (ISP):

// No cumplimiento
class Animal {
    walk();
    swim();
    fly();
}

class Dog extends Animal {
    walk() {
        console.log("El perro camina");
    }
    
    swim() {
        console.log("El perro nada");
    }
    
    fly() {
        throw new Error("Los perros no vuelan");
    }
}

const dog = new Dog();
dog.walk();
dog.swim();
dog.fly(); // output: Error: Los perros no vuelan

// Cumplimiento del principio ISP
class TerrestrialAnimal {
    walk() {
        throw new Error("Método 'walk' no implementado");
    }
}

class AquaticAnimal {
    swim() {
        throw new Error("Método 'swim' no implementado");
    }
}

class Doggie extends TerrestrialAnimal {
    walk() {
        console.log("El perro camina");
    }
}

const doggie = new Dog();
dog.walk(); // output: El perro camina

class Fish extends AquaticAnimal {
    swim() {
        console.log("El pez nada");
    }
}

const fish = new Fish();
fish.swim(); // output: El pez nada