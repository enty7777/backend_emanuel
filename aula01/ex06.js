const numeroSecreto = Math.floor(Math.random() * 10) + 1;
const palpite = 5; // Troque pelo número desejado

if (palpite === numeroSecreto) {
    console.log("Parabéns! Você acertou.");
} else {
    console.log(`Você errou. O número era ${numeroSecreto}.`);
}