
const titulo = document.getElementById ('titulo');
titulo.innerHTML += '<h2>Produto em Destaque</h2>';
titulo.innerHTML += '<p>Este é um produto incrível que você vai adorar!</p>';
titulo.innerHTML += '<p>Preço: R$ 99,99</p>';


const produtoContainer = document.createElement('div');
produtoContainer.classList.add('produto');

const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Produto em Destaque';

const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Este é um produto incrível que você vai adorar!';

const precoProduto = document.createElement('p');
precoProduto.textContent = 'Preço: R$ 99,99';

produtoContainer.appendChild(nomeProduto);
produtoContainer.appendChild(descricaoProduto);
produtoContainer.appendChild(precoProduto);

document.body.appendChild(produtoContainer);
