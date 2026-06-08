const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 900 }
];

const produtosCaros = produtos.filter(produto => produto.preco > 500);

console.log(produtosCaros);