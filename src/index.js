import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

// Criando um carrinho
const myCart = [];

// Criando uma lista de desejos
const myWishList = [];

console.log("Welcome to your Shopee Cart!");

// Criando itens
const item1 = await createItem("PS5", 5000, 2);
const item2 = await createItem("Xbox Series X", 4000, 4);

// Adicionando esses itens ao carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// Mostrando os itens antes de qualquer alteração
await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart);
console.log("-------------------------------");

// Opção abaixo para deletar um item do carrinho
await cartService.deleteItem(myCart, item1.name);
// Mostrando os itens após uma alteração
await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart);
console.log("-------------------------------");

// Opção abaixo para remover um item do carrinho
await cartService.removeItem(myCart, item2);
await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart);
console.log("-------------------------------");

// Removendo de novo
await cartService.removeItem(myCart, item2);
await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart);
