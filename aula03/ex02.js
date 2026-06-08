const produtos = [
    { nome: "Notebook", preco: 3500 },
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 }
];

produtos.forEach(produto => {
    console.log(`${produto.nome} - R$ ${produto.preco}`);
});