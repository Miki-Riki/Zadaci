// 1.

export const products = [
  { name: "CPU", price: 80, stock: 50, inStock: true, category: "Hardware" },
  { name: "GPU", price: 560, stock: 10, inStock: false, category: "Hardware" },
  { name: "PC", price: 1220, stock: 5, inStock: true, category: "Računala" },
  { name: "Mouse", price: 10, stock: 2, inStock: false, category: "Periferija" },
  { name: "Phone", price: 300, stock: 1, inStock: true, category: "Telefoni" },
];

// 2.

export function inStockProducts(products) {
  return products.filter((product) => product.inStock != false);
}

// 3.

export function totalStockValue(products) {
  return products.reduce((total, product) => {
    return total + product.price * product.stock;
  }, 0);
}

// 4.

export function addVat(products) {
  return products.map((product) => ({
    ...product,
    priceWithVat: product.price * 1.25,
  }));
}

// 5.

const URL = "https://jsonplaceholder.typicode.com/todos";

export async function fetchTodos() {
  try {
    const response = await fetch(URL);
    const todos = await response.json();
    return todos.slice(0, 5).map((todo) => todo.title);
  } catch (error) {
    console.log("Greška:", error);
    return [];
  }
}

// BONUS

export function groupByCategory(products) {
  return products.reduce((groups, product) => {
    if (!groups[product.category]) {
      groups[product.category] = [];
    }
    groups[product.category].push(product);
    return groups;
  }, {});
}
