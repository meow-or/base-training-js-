const goods = [
  {
    title: "Кукуруза",
    quantity: 3,
    price: 99,
  },
  {
    title: "Корм для кота",
    quantity: 2,
    price: 113,
  },
];

const sum = goods.reduce((total, product) => total + (product.quantity * product.price), 0);

console.log(sum);


const arr = [5, 2, 3];

const rearr = arr.reduce((total, current) => total + current, 0);

console.log(rearr)

