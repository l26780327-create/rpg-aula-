 // ===== LOCAL: VILA =====
  if (local === "cidade") 
    console.log("");
    if (inventario.includes("moeda furada") === false && inventario.includes("corda") === false) {
      console.log("[cidade] Um desconhecido te entrega uma moeda furada: 'Não vale nada. Guarde mesmo assim.'");
      inventario.push("moeda furada");
    } else {
      console.log("[cidade] um desconhecido desejando boa sorte.");
    }
    
    console.log("1 - ir para a floresta   2 - ir para o rio tiete");
    let escolha = prompt("> ");
    if (escolha === "1") local = "floresta";
    if (escolha === "2") local = "rio tiete";          