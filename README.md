###### Class 15

# Global State / Single Source of Truth 🧑‍💻

![Global State](https://i.stack.imgur.com/qDpID.jpg)

**What is the Flux concept?**

In the programming context, the term "flux" refers to a design pattern architecture for building web applications. Flux is a design pattern architecture developed by Facebook that is used to build web applications in a more organized and scalable way.

The Flux design pattern is based on three main components: actions, dispatchers, and stores.

The Flux architecture is used to separate the flow of data from the user interface. This makes it easier to maintain the app and scale it as it grows. By separating the business logic from the user interface, it becomes easier to maintain each component and change it without affecting the others.

[check more on the documentation](https://carlosazaustre.es/como-funciona-flux)

<br />

---

<br />

### **What is an action, a reducer and a store?**

![How to use](https://www.freecodecamp.org/news/content/images/2022/06/2.png)

Actions are the objects that describe what has happened in the application, for example, when the user clicks a button or when a form is submitted. The dispatchers receive the shares and send them to the corresponding stores.

The stores are the objects that contain the state of the application. When they receive an action from the dispatcher, they update their state accordingly. They then emit an event that notifies the views that the state has changed, allowing them to update the UI accordingly.

[check more on the documentation](https://www.freecodecamp.org/news/what-is-redux-store-actions-reducers-explained/)

<br />

---

<br />

### **Single Source of Truth**

![Single Source of Truth](https://www.venasolutions.com/hubfs/03%20Blog%20Files/single-source-of-truth-principles.webp)

The concept of "single source of truth" (SSOT) refers to having a single reliable and consistent source of data or information in a system or in an organization. This means that all data and information used in decision-making must come from a single source that is considered to be the authoritative and up-to-date source of the information.

In an organization or system, having an SSOT helps ensure that all users have access to the same accurate and up-to-date information, which can improve decision making and reduce errors.

To have an SSOT, it is necessary to identify and define which is the authoritative source of information in the organization or system. This source must be reliable, up-to-date, and accessible to all users who need to use it.

[check more on the documentation](https://www.mulesoft.com/resources/esb/what-is-single-source-of-truth-ssot)

<br />

---