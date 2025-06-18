//ações do meu carrinho

//Casos de usos do carrinho
// ✅ 1- adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// ✅ 2- deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// ✅ 3- remover um item - diminui um item
async function removeItem(userCart, item) {
  //1. Encontrar o índice do item
  const indexFound = userCart.findIndex((p) => p.name === item.name);

  //2. Caso não encontre o item
  if (indexFound == -1) {
    console.log("Item não encontrado...");
    return;
  }

  //3. Diminuir o item caso ele seja maior do que 1
  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity -= 1;
    userCart[indexFound].subtotal = () =>
      userCart[indexFound].price * userCart[indexFound].quantity;
    return;
  }

  //4. Deletar o item caso ele seja igual a 1
  if (userCart[indexFound].quantity == 1) {
    userCart.splice(indexFound, 1);
    return;
  }
}

// ✅ 4- calcular o total do carrinho
async function calculateTotal(userCart) {
  /**
   * o reduce vai percorrer o carrinho e vai somando os subtotais
   * começando pelo valor anterior "total" e vai somando com o "item" atual
   */
  console.log(`\nShopee Cart TOTAL IS:`);
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`🎁 Total: ${result}`);
}

// ✅ 5- exibir o carrinho
async function displayCart(userCart) {
  console.log("\nShopee Cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$${item.price} | ${
        item.quantity
      }x | Subtotal: R$${item.subtotal()}`
    );
  });
}

export { addItem, deleteItem, removeItem, calculateTotal, displayCart };
