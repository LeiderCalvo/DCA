###### Class 04

# Node 🧑‍💻

![Node JS](https://www.startechup.com/wp-content/uploads/January-11-2021-Nodejs-What-it-is-used-for-and-when-where-to-use-it-for-your-enterprise-app-development.jpg)

**What is Node JS?**

Node.js is a JavaScript runtime environment. This real-time runtime environment includes everything needed to run a program written in JavaScript. Node.js is designed to build scalable network applications. Node.js is designed to work without threads, you are free to worry about blocking the process.

Both JavaScript and Node.js run on the V8 JavaScript runtime engine (V8 is the name of the JavaScript engine that powers Google Chrome. It's what takes our JavaScript and runs it while you browse with Chrome). This engine takes JavaScript code and turns it into faster machine code. Machine code is lower-level code that the computer can execute without needing to interpret it first, bypassing compilation and thus increasing its speed.

##### Check the [Node Docs](https://nodejs.org/en/) for more information
---

## Modules vs Package vs Library vs Framework

- Modules
  - A set of JavaScript objects and functions that external applications can use.

- Package
  - A package is one or more files. js (modules) grouped (or packaged) together
   
- Library
  - They allow us to reuse code that other developers have written and published. Packages in node

- Library
  - A framework is a scheme or framework that offers a structure basis for developing a project with specific objectives

##### Check the [Modules,Package,Library,Framework Docs](https://dev.to/hamza/framework-vs-library-vs-package-vs-module-the-debate-3jpp) for more information
---

## NPM (Node Package Manager)

Node Package Manager is the default JavaScript tool for the task of sharing and installing packages. Npm also has command-line tools to help you install the different packages and manage their dependencies. npm is free and relied on by over 11 million developers worldwide.

##### Check the [NPM Docs](https://www.npmjs.com/) for more information
---

## Package.json vs package-lock.json

- Package.json
  - This file tells npm that the directory it is in is indeed a project or npm package. This file contains the package information including the description of it, version, author and most importantly dependencies. This file is generated automatically by the running an npm script: npm init

- Package-lock.json
  - It is auto generated by npm install and is a descriptive and exact list of the versions installed during your process. Information about the installed versions of the packages.
---

## npm init vs npm init -y

It will ask you a bunch of questions, and then write a package.json for you. It will attempt to make reasonable guesses based on existing fields, dependencies, and options selected. It is strictly additive, so it will keep any fields and values that were already set. You can also use -y/--yes to skip the questionnaire altogether.
---

## NPM Scripts

This section defines a list of properties that allow executing commands within the context of your project including: commands from other packages listings as dependencies, custom scripts, bash scripts, etc.

- Start the server
  - npm start
- Run custom script
  - npm run "name of script"
---

## NPM Scripts

This section defines a list of properties that allow executing commands within the context of your project including: commands from other packages listings as dependencies, custom scripts, bash scripts, etc.

- Start the server
  - `npm start`
- Run custom script
  - `npm run "name of script"`
---

## Dependencies vs dev-dependencies

Dependencies is intended to be used in production and devDependencies define packages that are needed only during the development of your project.

- Install on devDependency: `npm install <package-name> --save-dev`
---