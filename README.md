###### Class 18

# Databases / Firebase 🧑‍💻

![Databases](https://www.aceinfoway.com/blog/wp-content/uploads/2020/03/Best-Database-to-work-with-in-2020.jpg)

**What is a Database?**

A database is an organized and structured set of information stored in a computer system that can be queried and updated by multiple users simultaneously. Databases are essential for the efficient storage and management of large amounts of information.

[check more on the documentation](https://developer.mozilla.org/en-US/docs/Glossary/Database)

<br />

---

<br />

### **Types of Databases**

![Types of Databases](https://www.acte.in/wp-content/uploads/2020/08/noSql.png)

There are several types of databases, some of the most common ones are:

- Relational databases: these databases store information in tables that are interrelated with each other through keys or common fields. This type of database is widely used in companies and organizations to manage customer, supplier, inventory, and other types of information.

- NoSQL databases: these databases use data models that are different from the relational model. Instead of tables, they use data models such as documents, graphs, key-value, among others. This type of database is used for web and mobile applications that require high scalability and availability.

- Search databases: these databases are used to search for specific information within a data set, such as web search. These databases use search algorithms to find relevant information.

- In-memory databases: these databases store information in RAM instead of the hard drive, allowing for much faster access to data. This type of database is used in applications that require fast access to information, such as online games and real-time data analysis applications.

[check more on the documentation](https://www.geeksforgeeks.org/types-of-databases/)

<br />

---

<br />

### **What is Firebase?**

![Firebase](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201125145805/Firebase-2-1.png)

Firebase is a mobile and web application development platform that offers a variety of cloud-based services, including real-time database, authentication, storage, hosting, messaging, and analytics. It provides developers with easy-to-integrate tools that are highly scalable and secure. The real-time database is one of its most popular services, allowing developers to store and sync data in real-time between clients. Firebase is a powerful platform that helps developers build and scale their apps.

To install the Firebase modules it is necessary that our webpack config have the following property to be able to use the await in our code when making the requests.

- `experiments: {
topLevelAwait: true
},`

[check more on the documentation](https://firebase.google.com/docs?hl=es-419)

<br />

---
