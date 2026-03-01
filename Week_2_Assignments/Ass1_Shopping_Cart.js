//You are building a shopping cart summary for an e-commerce website.

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//1. Filter to get only in-stock products
const stock = cart.filter(item => item.inStock === true)
console.log("In-stock products: ", stock)

//2. Map to create a new array with: {name, totalPrice}
const totalPrice = cart.map(item => {
    return {
        name: item.name,
        totalPrice: item.price * item.quantity
    }
})
console.log("Products with total price: ", totalPrice)

//3. Reduce to calculate grand total of the cart
const grandTotal = cart.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0)
console.log("Grand total of the cart: ", grandTotal)

//4. Find the details of the Mouse using find()
const mouse = cart.find(item => item.name === "Mouse")
console.log("Details of the Mouse: ", mouse)

//5. Use findIndex to find the position of the keyboard
const index = cart.findIndex(item => item.name === "Keyboard")
console.log("Index of the Keyboard: ", index)
