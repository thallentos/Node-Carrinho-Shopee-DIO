import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to your Shopee Cart!");

const item1 = await createItem("PS5", 5000, 2);
const item2 = await createItem("Xbox Series X", 4000, 4);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.deleteItem(myCart, item1.name);
await cartService.deleteItem(myCart, item2.name);

console.log(`Shopee Cart TOTAL IS:`);
await cartService.calculateTotal(myCart);
