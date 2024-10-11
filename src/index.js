const player1 = {  
  NOME: "Bowser",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Donkey Kong",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

const player3 = {
  NOME: "Peach",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 2,
  PONTOS: 0,
};

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() { 
  let random = Math.random();
  let result;

  switch (true) { 
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
  }

  return result; 
}
      
async function logRollResult(characterName, block, diceResult, attribute) { 
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2, character3) { 
  for (let round = 1; round <= 5; round++) {  
    console.log(`🏁 Rodada ${round}`);

    // sortear bloco 📚 draw block
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // rolar os dados 📚 roll dice
    let diceResult1 = await rollDice(); //
    let diceResult2 = await rollDice();
    let diceResult3 = await rollDice();

    //teste de habilidade 📚 skill test
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;
    let totalTestSkill3 = 0;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE; 
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;
      totalTestSkill3 = diceResult3 + character3.VELOCIDADE;

      await logRollResult(
        character1.NOME,
        "velocidade",
        diceResult1,
        character1.VELOCIDADE
      );

      await logRollResult(
        character2.NOME,
        "velocidade",
        diceResult2,
        character2.VELOCIDADE
      );

      await logRollResult(
        character3.NOME,
        "velocidade",
        diceResult3,
        character3.VELOCIDADE
      );
    }

    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;
      totalTestSkill3 = diceResult3 + character3.MANOBRABILIDADE;

      await logRollResult(
        character1.NOME,
        "manobrabilidade",
        diceResult1,
        character1.MANOBRABILIDADE
      );

      await logRollResult(
        character2.NOME,
        "manobrabilidade",
        diceResult2,
        character2.MANOBRABILIDADE
      );

      await logRollResult(
        character3.NOME,
        "manobrabilidade",
        diceResult3,
        character3.MANOBRABILIDADE
      );
    }

    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;
      let powerResult3 = diceResult3 + character3.PODER;

      console.log(`${character1.NOME} confrontou com ${character2.NOME} e ${character3.NOME}! 🥊`);

      await logRollResult(
        character1.NOME,
        "poder",
        diceResult1,
        character1.PODER
      );

      await logRollResult(
        character2.NOME,
        "poder",
        diceResult2,
        character2.PODER
      );

      await logRollResult(
        character3.NOME,
        "poder",
        diceResult3,
        character3.PODER
      );

      if (powerResult1 > powerResult2 && powerResult1 > powerResult3 && character2.PONTOS > 0 &&  character3.PONTOS > 0) {
        console.log(
          `${character1.NOME} venceu o confronto! ${character2.NOME} e ${character3.NOME} perderam 1 ponto 🐢`
        );
        character2.PONTOS--, character3.PONTOS--;
      }

      if (powerResult2 > powerResult1 && powerResult2 > powerResult3 && character1.PONTOS > 0 && character3.PONTOS > 0) {
        console.log(
          `${character2.NOME} venceu o confronto! ${character1.NOME} e ${character3} perderam 1 ponto 🐢`
        );
        character1.PONTOS--, character3.PONTOS--;
      }

      if (powerResult3 > powerResult1 && powerResult3 > powerResult2 && character1.PONTOS > 0 && character2.PONTOS > 0) {
        console.log(
          `${character3.NOME} venceu o confronto! ${character1.NOME} e ${character2.NOME} perderam 1 ponto 🐢`
        );
        character1.PONTOS--, character2.PONTOS--;
      }

    
      console.log(
        powerResult2 === powerResult1 === powerResult3
          ? "Confronto empatado! Nenhum ponto foi perdido"
          : ""
      );
    }

    // verificando o vencedor 📚 checking the winner
    if (totalTestSkill1 > totalTestSkill2 && totalTestSkill1 > totalTestSkill3) {
      console.log(`${character1.NOME} marcou 1 ponto!`);
      character1.PONTOS++;
    } else if (totalTestSkill2 > totalTestSkill1 && totalTestSkill2 > totalTestSkill3) {
      console.log(`${character2.NOME} marcou 1 ponto!`);
      character2.PONTOS++;
    } else if(totalTestSkill3 > totalTestSkill1 && totalTestSkill3 > totalTestSkill2) {
      console.log(`${character3.NOME} marcou 1 ponto!`);
      character3.PONTOS++;
    }

    console.log("-----------------------------");
  }
}

async function declareWinner(character1, character2, character3) {
  console.log("Resultado final:");
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);
  console.log(`${character3.NOME}: ${character3.PONTOS} ponto(s)`);

  if (character1.PONTOS > character2.PONTOS && character1.PONTOS > character3.PONTOS)
    console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
  else if (character2.PONTOS > character1.PONTOS && character2.PONTOS > character3.PONTOS)
    console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
  else if (character3.PONTOS > character1.PONTOS && character3.PONTOS > character2.PONTOS)
    console.log(`\n${character3.NOME} venceu a corrida! Parabéns! 🏆`);
  else console.log("A corrida terminou em empate");

}

(async function main() {  // function main - função de entrada, ela chama todas as outras funções
  console.log(
    `🎉🏁🎉Corrida entre ${player1.NOME} , ${player2.NOME} e ${player3.NOME} começando...\n`
  );

  await playRaceEngine(player1, player2, player3); 
  await declareWinner(player1, player2, player3);  ""
})(); // função auto invocada. Repare que a async function esta toda entre () estudar sobre 📚 self-invoked function. Note that the async function is all between () study about
