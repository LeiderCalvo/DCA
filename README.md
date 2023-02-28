###### Class 09

# Typescript 🧑‍💻

![Typescript](https://serokell.io/files/0u/0ufu1q21.js-ts.jpg)

**What is Typescript?**

TypeScript is a programming language that is based on JavaScript and is mainly used for web and mobile application development. It is a statically-typed programming language, which means that it provides a way to define the data types used in an application. This allows programming errors to be detected at compile time and improves code quality.

[check more on the documentation](https://www.typescriptlang.org/)

<br />

---

<br />

### **How to use it?**

![How to use](https://miro.medium.com/max/1076/1*RHYOovcpUMZZDXG-gBLuhA.png)

To use TypeScript in a development project, you can follow these steps:

1. **Install TypeScript**: The first thing you should do is install the TypeScript compiler on your system. You can do this through the command line using the package manager npm by typing the following commands:

    - `npm install typescript -g`
    - `npm install typescript -D`

<br>

2. **Create a tsconfig.json configuration file**: This file defines the configuration for the TypeScript compiler and allows you to specify options such as the TypeScript version, directories where source files are located, and directories where compiled files are generated. To create a `tsconfig.json` file, open the command line in the project directory and type the following command:

    - `tsc --init`

    <br>

    This will create a `tsconfig.json` file in the project directory.

<br>

3. **Write TypeScript code**: Once you've created the `tsconfig.json` file, you can start writing TypeScript code in your source files. These files should be saved with the `.ts` extension.

<br>

4. **Compile TypeScript code**: Once you've written your TypeScript code, you need to compile it to JavaScript so that it can be executed in the browser or on the server. To compile your code, open the command line in the project directory and type the following command:

    - `tsc`
    
    <br>

    This command compiles all TypeScript files in the directory and its subdirectories, according to the configuration set in the tsconfig.json file. The compiled files are saved in the output directory specified in the tsconfig.json file.
<br>

5. **Run the JavaScript code**: Once you've compiled your TypeScript code, you can run the resulting JavaScript code in the browser or on the server.

<br />

[check more on the documentation](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html)

<br />

---

<br />

### **Compilation vs Transpilation**

![Compilation vs Transpilation](https://devopedia.org/images/article/19/9014.1528048190.png)

In the context of TypeScript, compilation and transpilation are similar processes but with some key differences.

- **Compilation** refers to the process of converting the source code from one programming language to another, typically to a lower-level language that can be directly understood by the machine. In the case of TypeScript, the TypeScript compiler converts TypeScript code into JavaScript code, which is the language understood by the browser or server engine.

- **Transpilation**, on the other hand, refers to the process of converting the source code from one language to another language at the same level. In the case of TypeScript, the TypeScript compiler converts TypeScript code into JavaScript code, which is a similar, but not identical, language to TypeScript.

So why is TypeScript considered a transpilation and not a compilation? The reason is that TypeScript is a superset of JavaScript, which means that all of the functions and features of JavaScript are available in TypeScript. Additionally, TypeScript does not introduce new concepts or features that do not exist in JavaScript. All TypeScript code can be written in JavaScript seamlessly, but not vice versa. Therefore, the process of converting TypeScript to JavaScript is considered a transpilation, as it is not being passed to a lower-level language.

[check more on the documentation](https://dev.to/kealanparr/compiling-vs-transpiling-3h9i)

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
