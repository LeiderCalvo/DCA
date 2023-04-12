// checking for existence
if (Storage === undefined) {
  console.info("polyfill required");
} else {
  console.log(Storage); // ƒ Storage() { [native code] }
  // This means that the Storage API exist and is a JS built-in tool
}






/** Session Storage */
const token = "53gf8d0b-6b80-4e49-v60d-5b3ca2ce6678";

sessionStorage.setItem("token", token);
console.log(sessionStorage.getItem("token"));

// before moving forward, comment the line that set the key, close the browser tab and open it again to see it is removed

// Uncomment following to check on the application panel how the data is being automatically deleted
/**
 * setTimeout(() => sessionStorage.removeItem("token"), 3000);
 * setTimeout(() => sessionStorage.clear(), 9000);
 */







/** Local Storage */
const key = "shopping-cart";
const shoppingCart = {
  items: [
    {
      id: 1,
      name: "Nike Air Zoom Pegasus 38",
      price: 120.0,
      quantity: 1,
    },
    {
      id: 2,
      name: "Apple Watch Series 7",
      price: 399.0,
      quantity: 2,
    },
    {
      id: 3,
      name: "Sony WH-1000XM4 Wireless Noise-Cancelling Headphones",
      price: 349.99,
      quantity: 1,
    },
  ],
};

localStorage.setItem(key, JSON.stringify(shoppingCar));
console.log(localStorage.getItem(key));

// before moving forward, comment the line that set the key, close the browser tab and open it again to see it remains

// Uncomment following to check on the application panel how the data is being automatically deleted
/**
 * setTimeout(() => localStorage.removeItem(key), 3000);
 * setTimeout(() => localStorage.clear(), 9000);
 */




// TODO: create a web component counter that persist the count even after closing the browser