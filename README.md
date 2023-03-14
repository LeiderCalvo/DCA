###### Class 13

# Asynchronism 🧑‍💻

![Asynchronism](https://cdn.buttercms.com/hmirWTF7TBCsX6mncY0P)

**What is Asynchronism?**

Asynchronism in JavaScript refers to the ability to perform multiple tasks simultaneously without having to wait for one task to complete before starting another task. Instead of blocking the execution of a task while waiting for another task to complete, techniques such as callbacks and promises are used to manage the execution of tasks that may take some time to complete, such as network operations or file loading.

Instead of waiting for one task to complete before starting another task, multiple tasks are executed concurrently, and tasks that need to wait for another task to complete are temporarily suspended. When the suspended task completes, the corresponding code is executed and the execution of the suspended task resumes.

Asynchronism is important because it allows applications to be more efficient by executing multiple tasks at the same time, rather than blocking the execution of one task while waiting for another task to complete. This enables a smoother user experience and better utilization of computer resources.

[check more on the documentation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)

<br />

---

<br />

### **What is a Callback**
---

![V8](https://www.freecodecamp.org/news/content/images/2021/09/pizza.png)

A callback is a function that is passed as an argument to another function and is called asynchronously after an operation has completed. The use of callbacks is common in JavaScript due to the asynchronous nature of the platform.

A common example of using callbacks in JavaScript is with network requests. When a network request is made, the response is not received immediately, and instead a callback function is called after the response has been received from the server. The code that is executed after receiving the response from the server is passed as a callback function.

[check more on the documentation](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

<br />

---

### **What is V8**
---

![V8](https://res.cloudinary.com/practicaldev/image/fetch/s--xFne0XOM--/c_imagga_scale,f_auto,fl_progressive,h_900,q_66,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/mjfb9kyd3sguclntkrn6.gif)

The V8 engine is an open-source JavaScript engine developed by Google that is used in the Google Chrome browser and the Node.js JavaScript runtime environment. The V8 engine is responsible for interpreting and executing JavaScript code at runtime.

The V8 engine works by compiling JavaScript code into highly optimized machine code that can be executed directly by the computer's processor. The V8 engine uses advanced optimization techniques such as just-in-time (JIT) compilation and incremental garbage collection to improve the performance of JavaScript code.

JIT compilation is a technique that compiles JavaScript code into native machine code at runtime. This means that the V8 engine can optimize JavaScript code in real-time, which can significantly improve the performance of the code.

Incremental garbage collection is another technique used by the V8 engine to improve performance. Garbage collection is a process that removes unused objects from memory to free up space for new objects. Incremental garbage collection divides memory into small sections and performs garbage collection on each section separately. This allows garbage collection to be performed more efficiently and without negatively impacting the performance of the application.

In summary, the V8 engine is a high-performance JavaScript engine that uses advanced optimization techniques to improve the speed and efficiency of JavaScript code execution at runtime.

[check more on the documentation](https://v8.dev/)

<br />

---

<br />

### **Event loop**
---
![Event loop](https://miro.medium.com/v2/resize:fit:1400/1*XVqPA2z1dTHJWm2TwIAsBw.gif)

The event loop is a fundamental mechanism in JavaScript that allows the language to handle asynchronous operations efficiently. Simply put, the event loop is a loop that manages the task queue and execution stack in JavaScript.

When a JavaScript program is executed, all synchronous operations are executed on the execution stack in order. However, when an asynchronous operation such as a network request or animation is performed, the operation is added to the task queue instead of the execution stack.

The event loop constantly monitors the execution stack and task queue. When the execution stack is empty, the event loop checks the task queue and, if there is a task in the queue, the task is moved to the execution stack and executed.

This means that asynchronous operations in JavaScript do not block the execution of other operations. Instead, they are handled in the background and processed only when the execution stack is empty. In this way, the event loop ensures that the program remains responsive and does not freeze during the execution of asynchronous operations.

[check more on the documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)

<br />

**Call stack**

![Call stack](https://geekflare.com/wp-content/uploads/2019/10/stack.jpg)

A stack is a data structure in which the last item added is always the first to be removed from the stack, you could think of it as a one-dish stack in which only the first dish that was last added can be removed first . A call stack is nothing more than a stack data structure where tasks or code are executed accordingly.

<br />

---

### **What is a Promise**
---

![Promises](https://www.alexlintu.com/content/images/2021/04/Group-74.png)

Promises in JavaScript are a mechanism used to handle asynchronous operations in a more readable and understandable way. Promises represent value that may be available now, in the future, or never. Promises allow you to write code that waits for a response and performs an action once the response is available.

Promises are created using the JavaScript Promise class, which accepts a function that has two arguments: resolve and reject. The **resolve** function is used to return the promise value when the asynchronous operation completes successfully, while the **reject** function is used to return an error when the asynchronous operation fails.


[check more on the documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

<br />

---