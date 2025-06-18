//ações do meu carrinho

//Casos de usos do carrinho
// ✅ 1- adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// 2- deletar item do carrinho
async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// 3- remover um item - diminui um item
async function removeItem(userCart, index) {}

// ✅ 4- calcular o total do carrinho
async function calculateTotal(userCart) {
  /**
   * o reduce vai percorrer o carrinho e vai somando os subtotais
   * começando pelo valor anterior "total" e vai somando com o "item" atual
   */
  //   return
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(result);
}

export { addItem, deleteItem, removeItem, calculateTotal };
