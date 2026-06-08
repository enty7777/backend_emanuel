function executarCallback(callback) {
    console.log("Executando...");
    callback();
}

function mensagem() {
    console.log("Callback executado!");
}

executarCallback(mensagem);