//Liskov Substitution Principle (LSP):

class Bird {
  fly(speed) {
    return `Flying at ${speed} km/h`;
  }
}

class Eagle extends Bird {
  dive() {
    // ...
  }

  fly(speed) {
    return `Soaring through the sky at ${speed}`;
  }
}

// LSP Violation:
class Penguin extends Bird {
  fly() {
    return new Error("Sorry, I cant fly");
  }
}

/* The Penguin class violates the LSP in three ways:
  
    - The overridden fly method does not have the same number of arguments.
    - The return type of the fly method is not the same.
    - The types of exceptions thrown are not the same. 
  */
