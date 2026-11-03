









































































































































































































































// A trilha do farol · jogo de demonstração do Jovem Tech (E15) - Versão Antitravamento
const prompt = require("prompt-sync")({ sigint: true }); // O { sigint: true } impede que o terminal congele na tela branca

// ===== CONTROLE DO JOGO =====
let local = "vila";        
let jogando = true;        
const TESTE = false;       

// ===== HERÓI =====
// Movido para dentro de um console.log para forçar o terminal a desenhar o texto antes de travar esperando o teclado
console.log("=== INICIANDO O JOGO ===");
let nome = prompt("Qual é o nome do seu herói? ");
if (!nome) nome = "Herói"; // Se o usuário der enter em branco, evita bugs

let vida = 10;
let veneno = 0;            
const inventario = [];
let pocoSeco = false; 

console.log("");
console.log(nome + ", o farol da costa apagou. Alguém precisa chegar lá antes do anoitecer.");

while (jogando) {
  // A cada passo, o veneno tira 1 de vida
  if (veneno > 0) {
    vida = vida - 1;
    veneno = veneno - 1;
    console.log("AVISO: O veneno arde. Vida atual: " + vida);
  }

  // Checagem de Game Over imediata
  if (vida <= 0) {
    console.log("\nFIM DE JOGO: Você caiu no caminho.");
    jogando = false;
    break; 
  }

  // ===== LOCAL: VILA =====
  if (local === "vila") {
    console.log("");
    if (inventario.includes("moeda furada") === false && inventario.includes("corda") === false) {
      console.log("[VILA] Um velho pescador te entrega uma moeda furada: 'Não vale nada. Guarde mesmo assim.'");
      inventario.push("moeda furada");
    } else {
      console.log("[VILA] O velho pescador acena de longe, desejando boa sorte.");
    }
    
    console.log("1 - ir para a floresta   2 - ir para o poço");
    let escolha = prompt("> ");
    if (escolha === "1") local = "floresta";
    if (escolha === "2") local = "poco";

  // ===== LOCAL: FLORESTA =====
  } else if (local === "floresta") {
    console.log("");
    console.log("[FLORESTA] Galhos fechados. Algo se mexe no chão.");
    
    let sorte = Math.random();
    if (TESTE) sorte = 0.5;

    // Chance justa de 30%
    if (sorte < 0.3) {
      console.log("Uma aranha te morde! Você está envenenado por 3 passos.");
      veneno = 3;
    } else {
      console.log("Era só o vento batendo nas folhas.");
    }

    console.log("1 - seguir para a ponte   2 - voltar para a vila");
    let escolha = prompt("> ");
    if (escolha === "1") local = "ponte";
    if (escolha === "2") local = "vila";

  // ===== LOCAL: POÇO =====
  } else if (local === "poco") {
    console.log("");
    console.log("[POÇO] Um poço antigo. Não dá para ver o fundo.");
    
    console.log("1 - voltar para a vila");
    if (pocoSeco === false) {
      console.log("2 - beber água (recupera 3 de vida)");
    }
    if (inventario.includes("moeda furada")) {
      console.log("3 - jogar a moeda furada no poço");
    }

    let escolha = prompt("> ");
    if (escolha === "1") {
      local = "vila";
    } else if (escolha === "2" && pocoSeco === false) {
      vida = vida + 3;
      if (vida > 10) vida = 10; 
      pocoSeco = true;
      console.log("A água é gelada e revigorante. Vida: " + vida);
    } else if (escolha === "3" && inventario.includes("moeda furada")) {
      console.log("A moeda cai sem fazer barulho... Uma corda sobe do fundo do poço, sozinha.");
      
      inventario.pop(); 
      inventario.push("corda"); 
      
      console.log("Inventário atual: [" + inventario + "]");
    }

  // ===== LOCAL: PONTE =====
  } else if (local === "ponte") {
    console.log("");
    console.log("[PONTE] A ponte para o farol caiu. Do outro lado, o farol apagado.");
    
    if (inventario.includes("corda")) {
      console.log("1 - amarrar a corda e atravessar   2 - voltar para a floresta");
    } else {
      console.log("Não tem como atravessar sem uma corda.   2 - voltar para a floresta");
    }

    let escolha = prompt("> ");
    if (escolha === "1" && inventario.includes("corda")) {
      inventario.pop(); 
      local = "farol";
    } else if (escolha === "2") {
      local = "floresta";
    }

  // ===== LOCAL: FAROL (VITÓRIA) =====
  } else if (local === "farol") {
    console.log("");
    console.log("[FAROL] Você sobe a escada e acende a luz. Lá embaixo, os barcos voltam para casa.");
    console.log("Fim: " + nome + " salvou a costa com " + vida + " de vida.");
    jogando = false;
  }
}
