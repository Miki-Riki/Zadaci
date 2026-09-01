import {
    products,
    inStockProducts,
    totalStockValue,
    addVat,
    groupByCategory,
    fetchTodos,
} from "./catalog.js";

console.log("=== Svi proizvodi ===");
console.log(products);

console.log("\n=== Dostupni proizvodi (zadatak 2) ===");
console.log(inStockProducts(products));

console.log("\n=== Ukupna vrijednost zaliha (zadatak 3) ===");
console.log(totalStockValue(products));

console.log("\n=== Proizvodi s PDV-om, original nepromijenjen (zadatak 4) ===");
console.log(addVat(products));
console.log("Originalno polje (bez izmjene):", products);

console.log("\n=== Prvih pet naslova s javnog API-ja (zadatak 5) ===");
const main = async () => {
    const titles = await fetchTodos();
    titles.forEach((title) => console.log(title));
};

console.log("\n=== Proizvodi grupirani po kategoriji (bonus) ===");
console.log(groupByCategory(products));

main();
