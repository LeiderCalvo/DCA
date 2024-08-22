###### Class 06

# Web components 🧑‍💻

![Web components](https://ionic.io/blog/wp-content/uploads/2019/02/5-reasons-web-components-design-systems.png)

**What are Web Components?**

Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.

[check more on the documentation](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

<br />

---

<br />

### **Here's the list of general steps to create a web component:**

![Web components](https://pbs.twimg.com/media/C5N8xVZXUAAvNgb.jpg:large)

- Plan the component: Before starting to write code, it's important to have a clear plan about what the component should do and how it will be used. This includes defining the properties and methods the component will need, as well as how it will communicate with the rest of the page.

- Create the HTML file: The first step is to create an HTML file that contains the structure of the component. This file should include all the necessary tags and attributes to create the component's interface.

- Create the JavaScript file: Next, create a JavaScript file that will contain the component's logic. This file should import the HTML file and create a class that extends the HTMLElement class.

- Define the properties and methods: Once the class has been created, define the properties and methods the component will need to function properly. This includes event handling logic and any other component-specific functionality.

- Register the component: To be able to use the component on a page, it must be registered using the `customElements.define()` method. This method takes two arguments: the name of the component and the class that defines it.

- Use the component: Once the component is registered, it can be used in any HTML page by simply adding the custom tag that has been defined.

[check more on the documentation](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

<br />

---

<br />

### **File System**

![File system](https://cdn.ttgtmedia.com/rms/onlineImages/TT_tree_mobile.jpg)

A file system is a set of rules and procedures used to create, read, modify, and delete files and folders.

File systems have a hierarchical structure, where each file and folder is located at a specific location within the file system. This allows the operating system and applications to access files efficiently, since each file is located in a known location.

[check more on the documentation](https://www.geeksforgeeks.org/file-systems-in-operating-system/)
