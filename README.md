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

1. **Install TypeScript**: The first thing you should do is install the TypeScript compiler on your system. You can do this through the command line using the package manager npm by typing the following commands: [Docs](https://webpack.js.org/guides/typescript/)

    - `npm install typescript -g`
    - `npm install typescript ts-loader --D`

<br>

2. **Create a tsconfig.json configuration file**: This file defines the configuration for the TypeScript compiler and allows you to specify options such as the TypeScript version, directories where source files are located, and directories where compiled files are generated. To create a `tsconfig.json` file, open the command line in the project directory and type the following command:

    - `tsc --init`
    - make sure that the following options are setup like this:
    ```
    {
        "outDir": "./dist/",
        "module": "es6",
        "target": "es6",
    }
    ```

    <br>

    This will create a `tsconfig.json` file in the project directory.

<br>

3. **Create a Webpack config file**: Once you've created the `tsconfig.json` file, let's configure webpack to handle TypeScript by creating a `webpack.config.js` with this content:

    ```
        const path = require('path');

        module.exports = {
        entry: './src/index.ts',
        module: {
            rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        };
    ```

<br>

4. **Write TypeScript code**: These files should be saved with the `.ts` extension.

<br>

5. **Run your static file**: Once you've compiled your TypeScript code, you can run the resulting JavaScript code in the browser or on the server.

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
