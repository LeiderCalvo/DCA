# Web Storage

Web storage is a feature in modern web browsers that allows web applications to store data in the user's web browser. This is due to the interface of the `Storage API` that expose the `Local` and `Session Storage`.
[Ref. Web Storage](https://developer.mozilla.org/es/docs/Web/API/Storage)

![Application screenshot](./imgs/application.png)

### **Local Storage**

Local Storage is a type of web storage that allows web applications to **store data with no expiration date**. The data stored in Local Storage will persist even after the browser window is closed or the computer is restarted.

To store data in Local Storage, you can use the localStorage object in JavaScript. Here is an example:

```
// Store data in Local Storage
localStorage.setItem('key', 'value');

// Retrieve data from Local Storage
const value = localStorage.getItem('key');
````

[Ref. Local Storage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)

----

### **Session Storage**

Session Storage is another type of web storage that allows web applications to **store data for the duration of a session**. A session lasts as long as the user's browser is open and the web application is running. Once the user closes the browser or navigates away from the page, the session ends and the data is deleted.

To store data in Session Storage, you can use the sessionStorage object in JavaScript. Here is an example:

```
// Store data in Session Storage
sessionStorage.setItem('key', 'value');

// Retrieve data from Session Storage
const value = sessionStorage.getItem('key');
```
[Ref. Session Storage](https://developer.mozilla.org/es/docs/Web/API/Window/sessionStorage)

----
### **Local Storage vs Session Storage**

- Local Storage data is available across all browser windows and tabs, while Session Storage data is only available within the current session and current tab.

- Data stored in local storage has no expiration date, meaning it will persist even after the user closes their browser and reopens it at a later time. While Session Storage is only available for the duration of the user's session, meaning that it will be cleared when the user closes their browser.

- Local Storage has a larger storage capacity than Session Storage. Most browsers allow up to 5-10MB of data to be stored in Local Storage, while the maximum capacity for Session Storage is usually around 5MB.

----
### **Common use cases**

#### Local Storage:

- Storing user preferences or settings that need to persist across sessions
- Storing data that needs to be shared between different parts of a website, such as a shopping cart or a user's browsing history
- Caching data to improve website performance, such as images or other resources that don't change frequently

#### Session Storage:

- Storing temporary data that only needs to be available for the duration of a user's session, such as form data or temporary authentication tokens.

