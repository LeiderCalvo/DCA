###### Class 08

# Good practices 🧑‍💻

![Good practices](https://miro.medium.com/v2/resize:fit:720/format:webp/1*wrxj0oBKpA_GXb8LPhXOeg.png)

**SOLID Principles**

"SOLID principles" is an acronym referring to a set of five object-oriented programming (OOP) principles that are used to write clean, maintainable, and scalable code. Below is a brief description of these principles and how they apply to JavaScript:

[check more on the documentation](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898)

- Single Responsibility Principle (SRP):

    - Each object or function should have a single responsibility. In JavaScript, this means that a function should do one thing and do it well. If a function has too many responsibilities, it becomes harder to understand, modify, and debug.

    <br>
    
    ![Single Responsibility Principle](https://miro.medium.com/v2/resize:fit:720/format:webp/1*P3oONz9Da3Tc1w97fMV73Q.png)

- Open/Closed Principle (OCP):

    - Objects or functions should be open for extension but closed for modification. This means that new functionality should be able to be added without having to change existing code. In JavaScript, this can be achieved using classes and inheritance.

    <br>

    ![Open/Closed Principle](https://miro.medium.com/v2/resize:fit:720/format:webp/1*0MtFBmm6L2WVM04qCJOZPQ.png)

- Liskov Substitution Principle (LSP):

    - Objects of a base class should be replaceable with objects of their derived classes without affecting the program's functionality. In JavaScript, this applies to using classes and ensuring that subclasses follow the same contract as the base class.

    <br>

    ![Liskov Substitution Principle](https://miro.medium.com/v2/resize:fit:720/format:webp/1*yKk2XKJaCLNlDxQMx1r55Q.png)

- Interface Segregation Principle (ISP):

    - A class should not depend on interfaces it does not use. In JavaScript, this means that interfaces (or contracts) should be specific and small, so that classes only depend on the interfaces they need.

     <br>

    ![Interface Segregation Principle](https://miro.medium.com/v2/resize:fit:720/format:webp/1*2hmyR9L43Vm64MYxj4Y89w.png)

- Dependency Inversion Principle (DIP):

    - High-level classes should not depend on low-level classes. Instead, both should depend on abstractions. In JavaScript, this can be achieved using dependency injection and separating business logic from infrastructure logic.

    <br>
    
    ![Dependency Inversion Principle](https://miro.medium.com/v2/resize:fit:720/format:webp/1*Qk8tDmjQlyvwKxNTfXIo0Q.png)

<br />

---

<br />

### **Clean code**

![Clean code](https://blog.knoldus.com/wp-content/uploads/2018/06/cleancode.png)

Refers to a programming style that emphasizes readability, maintainability, and simplicity of code. It's about writing code that not only works, but is also easy to read and understand for other programmers, and can be modified or extended without causing errors or issues.

In the context of JavaScript, some of the principles of clean code include:

- **Writing modular code**: dividing code into small units of functionality and using modules to keep coupling under control.

- **Naming variables and functions meaningfully**: using variable and function names that are descriptive and clear so any other programmer can understand what each part of the code does.

- **Commenting code appropriately**: including comments that explain the functionality of each part of the code, as well as any assumptions or limitations that apply to each part of it.

- **Eliminating duplicate code**: avoiding code repetition by writing reusable functions and using third-party libraries where possible.

- **Keeping code simple**: avoiding complex or clever solutions that may be hard to understand or maintain.

- **Writing unit tests**: creating unit tests to ensure the code works as expected and to detect any issues as code is being written.


[check more on the documentation](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/clean-code-que-es-el-codigo-limpio/)

<br />

---

<br />

### **Pure functions**

![Pure functions](https://cdn-media-1.freecodecamp.org/images/0*a_yub2gTwY-1eK8j.png)

Pure functions are important in functional programming because they make code more predictable and easier to reason about and test. Because a pure function doesn't depend on any state outside of its scope and doesn't modify any state outside of its scope, it can be called at any time and in any order without affecting the program's behavior. Additionally, because a pure function only depends on its inputs to produce an output, it can be easily tested with different input values to verify its behavior without having to worry about side effects or changes to global state.

[check more on the documentation](https://www.geeksforgeeks.org/pure-functions-in-javascript/)

<br />

---

<br />

### **Design patterns**

Design patterns in JavaScript can help developers write clearer, more modular, and scalable code while also improving development efficiency. By utilizing common design patterns, developers can leverage documented best practices and create tested solutions for common programming problems.

Design patterns can be applied to many aspects of programming in JavaScript, including code structure, data management, and user interface. Some of the most common design patterns in JavaScript include:

- **Module pattern**: This pattern is used to encapsulate related functionality into a single object or module. This helps to avoid global namespace pollution and allows for modular and scalable code creation.

- **Constructor pattern**: This pattern is used to create objects that have properties and methods. A constructor is used to create new object instances, and properties and methods can be defined on the constructor's prototype to be shared by all created instances.

- **Observer pattern**: This pattern is used to allow one object to observe changes in another object and respond accordingly. This is achieved by creating an observer-subject relationship between the objects.

- **Factory pattern**: This pattern is used to create objects in a more flexible and dynamic way. A factory is used to create objects instead of creating them directly, which allows for greater flexibility and customization in object creation.

- **Decorator pattern**: This pattern is used to add functionality to an existing object dynamically. A decorator object is created that wraps the original object and adds additional functionality as needed.

[check more on the documentation](https://refactoring.guru/design-patterns)
