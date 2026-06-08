const pessoas = [];

function cadastrarPessoa(nome, idade) {
    pessoas.push({ nome, idade });
}

cadastrarPessoa("João", 16);
cadastrarPessoa("Maria", 18);
cadastrarPessoa("Pedro", 20);

console.log("Pessoas cadastradas:");
console.log(pessoas);ggi5