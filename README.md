**Carrinho de Compras da Shopee**
=======================

**Descrição**
---------------

Este é um projeto de carrinho de compras que permite adicionar, remover uma quantidade de um item em específico, deletá-lo, calcular o total de itens no carrinho e exibir o carrinho.

**Funcionalidades**
-------------------

* Adicionar itens ao carrinho
* Remover itens do carrinho
* Diminuir a quantidade de um item em específico do carrinho
* Calcular o total do carrinho
* Exibir o carrinho

**Arquivos**
-------------

* `cart.js`: arquivo principal do projeto que contém as funções para adicionar, remover, deletar, calcular o total do carrinho e exibir o carrinho
* `item.js`: arquivo que contém a classe Item que representa um item no carrinho

**Funções**
-------------

* `addItem(userCart, item)`: adiciona um item ao carrinho
* `removeItem(userCart, item)`: remove um item do carrinho
* `deleteItem(userCart, name)`: deleta um item do carrinho
* `calculateTotal(userCart)`: calcula o total do carrinho
* `displayCart(userCart)`: exibe o carrinho

**Exemplo de Uso**
-------------------

```javascript
// Criando um carrinho
const myCart = [];

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
```

**Licença**
------------

Este projeto é licenciado sob a licença MIT adaptada por mim

**Contato**
------------

Se você tiver alguma dúvida ou precisar de ajuda, por favor, entre em contato comigo através do meu email: [thallescmarques@gmail.com](mailto:thallescmarques@gmail.com)