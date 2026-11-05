// ===== HERÓI =====
const prompt = require('prompt-sync')({ sigint: true });

console.log("=== INICIANDO O JOGO ===");

let nome = prompt("Qual é o nome do seu herói? ");
if (!nome || nome.trim() === "") {
  nome = "Herói";
}
nome = nome.trim();

let vidaMax = 10;
let vida = 10;
let veneno = 0;
const inventario = [];
let pocoSeco = false;

console.log("");
console.log(nome + ", o farol da costa apagou. Alguém precisa chegar lá antes do anoitecer.");
console.log("Vida: " + vida + "/" + vidaMax + " | Veneno: " + veneno + " | Inventário: vazio");
console.log("");

// ===== MENU DA VILA =====
let jogando = true;
while (jogando) {
  console.log("--- MENU DA VILA ---");
  console.log("1 - Ir para a Floresta");
  console.log("2 - Ir para a Taverna");
  console.log("3 - Ir para a Masmorra");
  console.log("4 - Sair do jogo");
  let escolha = prompt("Escolha: ");

  if (escolha === "1") {
    console.log("Você foi para a Floresta!");
  } else if (escolha === "2") {
    console.log("Você foi para a Taverna!");
  } else if (escolha === "3") {
    console.log("Você foi para a Masmorra!");
  } else if (escolha === "4") {
    console.log("Saindo... Até mais, " + nome + "!");
    jogando = false;
  } else {
    console.log("Opção inválida! Digita 1, 2, 3 ou 4.");
  }
  console.log("");
}