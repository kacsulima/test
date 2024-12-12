// Policz sume produktow
const products = [
  {
    name: "Chleb",
    price: 4.99,
  },
  {
    name: "Pomidory",
    price: 9.99,
  },
  {
    name: "Olowek",
    price: 1.2,
  },
];

// for (let product of products) {
//   suma += product.price;
// }

let sum = products.reduce((sum, product) => {
  return sum + product.price;
}, 0);

console.log(sum);
