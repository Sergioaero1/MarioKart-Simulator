const player1 = { 
  NOME: "Bowser",
  VELOCIDADE: 5,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

const player2 = {
  NOME: "Donkey Kong",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 2,
  PODER: 5,
  PONTOS: 0,
};

const player3 = {
  NOME: "Peach",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 2,
  PONTOS: 0,
};

const player4 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player5 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};
const player6 = {
  NOME: "Yoshi",
  VELOCIDADE: 2,
  MANOBRABILIDADE: 4,
  PODER: 3,
  PONTOS: 0,
};


async function rollDice() {  // rolar dados
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
  console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
}

async function playRaceEngine(character1, character2, character3, character4, character5, character6) { 
  for (let round = 1; round <= 5; round++) {  
    console.log(`🏁 Rodada ${round}`);

    // sortear bloco 📚 draw block
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // rolar os dados 📚 roll dice
    let diceResult1 = await rollDice(); 
    let diceResult2 = await rollDice();
    let diceResult3 = await rollDice();
    let diceResult4 = await rollDice();
    let diceResult5 = await rollDice();
    let diceResult6 = await rollDice();

    //teste de habilidade 📚 skill test
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;
    let totalTestSkill3 = 0;
    let totalTestSkill4 = 0;
    let totalTestSkill5 = 0;
    let totalTestSkill6 = 0;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE; 
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;
      totalTestSkill3 = diceResult3 + character3.VELOCIDADE;
      totalTestSkill4 = diceResult4 + character4.VELOCIDADE;
      totalTestSkill5 = diceResult5 + character5.VELOCIDADE;
      totalTestSkill6 = diceResult6 + character6.VELOCIDADE;

      await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE);

      await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE);

      await logRollResult(character3.NOME, "velocidade", diceResult3, character3.VELOCIDADE);

      await logRollResult(character4.NOME, "velocidade", diceResult4, character4.VELOCIDADE);

      await logRollResult(character5.NOME, "velocidade", diceResult5, character5.VELOCIDADE);

      await logRollResult(character6.NOME, "velocidade", diceResult6, character6.VELOCIDADE);
    }

    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;
      totalTestSkill3 = diceResult3 + character3.MANOBRABILIDADE;
      totalTestSkill4 = diceResult4 + character4.MANOBRABILIDADE;
      totalTestSkill5 = diceResult5 + character5.MANOBRABILIDADE;
      totalTestSkill6 = diceResult6 + character6.MANOBRABILIDADE;

      await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE);

      await logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE);

      await logRollResult(character3.NOME, "manobrabilidade", diceResult3, character3.MANOBRABILIDADE);

      await logRollResult(character4.NOME, "manobrabilidade", diceResult4, character4.MANOBRABILIDADE);

      await logRollResult(character5.NOME, "manobrabilidade", diceResult5, character5.MANOBRABILIDADE);

      await logRollResult(character6.NOME, "manobrabilidade", diceResult6, character6.MANOBRABILIDADE);
    }

    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;
      let powerResult3 = diceResult3 + character3.PODER;
      let powerResult4 = diceResult4 + character4.PODER;
      let powerResult5 = diceResult5 + character5.PODER;
      let powerResult6 = diceResult6 + character6.PODER;

      console.log(`${character1.NOME} confrontou com ${character2.NOME}, ${character3.NOME}, ${character4.NOME}, ${character5.NOME} e ${character6.NOME}! 🥊`);

      await logRollResult(character1.NOME, "poder", diceResult1, character1.PODER);

      await logRollResult(character2.NOME, "poder", diceResult2, character2.PODER);

      await logRollResult(character3.NOME, "poder",  diceResult3, character3.PODER);

      await logRollResult(character4.NOME, "poder", diceResult4, character4.PODER);

      await logRollResult(character5.NOME, "poder", diceResult5, character5.PODER);

      await logRollResult(character6.NOME, "poder", diceResult6, character6.PODER);

      if (powerResult1 > powerResult2 && powerResult1 > powerResult3 && powerResult1 > powerResult4 && 
        powerResult1 > powerResult5 && powerResult1 > powerResult6 && character2.PONTOS > 0 &&  character3.PONTOS > 0 && 
        character4.PONTOS > 0 &&  character5.PONTOS > 0 &&  character6.PONTOS > 0) {

        console.log(`${character1.NOME} venceu o confronto! ${character2.NOME}, ${character3.NOME}, ${character4.NOME}, ${character5.NOME} e ${character6.NOME} perderam 1 ponto 🐢`);
        character2.PONTOS --, character3.PONTOS --, character4.PONTOS --, character5.PONTOS --, character6.PONTOS --;
      }

      if (powerResult2 > powerResult1 && powerResult2 > powerResult3 && powerResult2 > powerResult4 && 
        powerResult2 > powerResult5 && powerResult2 > powerResult6 && character1.PONTOS > 0 &&  character3.PONTOS > 0 && 
        character4.PONTOS > 0 &&  character5.PONTOS > 0 &&  character6.PONTOS > 0) {

        console.log(`${character2.NOME} venceu o confronto! ${character1.NOME}, ${character3.NOME}, ${character4.NOME}, ${character5.NOME} e ${character6.NOME} perderam 1 ponto 🐢`);
        character1.PONTOS --, character3.PONTOS --, character4.PONTOS --, character5.PONTOS --, character6.PONTOS --;
      }

      if (powerResult3 > powerResult1 && powerResult3 > powerResult2 && powerResult3 > powerResult4 && 
        powerResult3 > powerResult5 && powerResult3 > powerResult6 && character1.PONTOS > 0 &&  character2.PONTOS > 0 && 
        character4.PONTOS > 0 &&  character5.PONTOS > 0 &&  character6.PONTOS > 0) {

        console.log(`${character3.NOME} venceu o confronto! ${character1.NOME}, ${character2.NOME}, ${character4.NOME}, ${character5.NOME} e ${character6.NOME} perderam 1 ponto 🐢`);
        character1.PONTOS --, character2.PONTOS --, character4.PONTOS --, character5.PONTOS --, character6.PONTOS --;
      }

      if (powerResult4 > powerResult1 && powerResult4 > powerResult2 && powerResult4 > powerResult3 && 
        powerResult4 > powerResult5 && powerResult4 > powerResult6 && character1.PONTOS > 0 &&  character2.PONTOS > 0 && 
        character3.PONTOS > 0 &&  character5.PONTOS > 0 &&  character6.PONTOS > 0) {

        console.log(`${character4.NOME} venceu o confronto! ${character1.NOME}, ${character2.NOME}, ${character3.NOME}, ${character5.NOME} e ${character6.NOME} perderam 1 ponto 🐢`);
        character1.PONTOS --, character2.PONTOS --, character3.PONTOS --, character5.PONTOS --, character6.PONTOS --;
      }

      if (powerResult5 > powerResult1 && powerResult5 > powerResult2 && powerResult5 > powerResult3 && 
        powerResult5 > powerResult4 && powerResult5 > powerResult6 && character1.PONTOS > 0 &&  character2.PONTOS > 0 && 
        character3.PONTOS > 0 &&  character4.PONTOS > 0 &&  character6.PONTOS > 0) {

        console.log(`${character5.NOME} venceu o confronto! ${character1.NOME}, ${character2.NOME}, ${character3.NOME}, ${character4.NOME} e ${character6.NOME} perderam 1 ponto 🐢`);
        character1.PONTOS --, character2.PONTOS --, character3.PONTOS --, character4.PONTOS --, character6.PONTOS --;
      }

      if (powerResult6 > powerResult1 && powerResult6 > powerResult2 && powerResult6 > powerResult3 && 
        powerResult6 > powerResult4 && powerResult6 > powerResult5 && character1.PONTOS > 0 &&  character2.PONTOS > 0 && 
        character3.PONTOS > 0 &&  character4.PONTOS > 0 &&  character5.PONTOS > 0) {

        console.log(`${character6.NOME} venceu o confronto! ${character1.NOME}, ${character2.NOME}, ${character3.NOME}, ${character4.NOME} e ${character5.NOME} perderam 1 ponto 🐢`);
        character1.PONTOS --, character2.PONTOS --, character3.PONTOS --, character4.PONTOS --, character5.PONTOS --;
      }
      if ( powerResult1 === powerResult2 && powerResult1 === powerResult3 && 
           powerResult1 === powerResult4 && powerResult1 === powerResult5 && 
           powerResult1 === powerResult6) {

         console.log("Confronto empatado! Nenhum ponto foi perdido");
      }
    }

    // verificando o vencedor 📚 checking the winner
    if (totalTestSkill1 > totalTestSkill2 && totalTestSkill1 > totalTestSkill3 && totalTestSkill1 > totalTestSkill4 && 
        totalTestSkill1 > totalTestSkill5 && totalTestSkill1 > totalTestSkill6) {
      console.log(`${character1.NOME} marcou 1 ponto! ${character2.NOME}, ${character3.NOME}, ${character4.NOME}, ${character5.NOME} e ${character6.NOME} não marcaram pontos nesta rodada.`);
      character1.PONTOS ++;
    } else if (totalTestSkill2 > totalTestSkill1 && totalTestSkill2 > totalTestSkill3 && totalTestSkill2 > totalTestSkill4 && 
               totalTestSkill2 > totalTestSkill5 && totalTestSkill2 > totalTestSkill6) {
      console.log(`${character2.NOME} marcou 1 ponto! ${character1.NOME}, ${character3.NOME}, ${character4.NOME}, ${character5.NOME} e ${character6.NOME} não marcaram pontos nesta rodada.`);
      character2.PONTOS ++;
    } else if(totalTestSkill3 > totalTestSkill1 && totalTestSkill3 > totalTestSkill2 && totalTestSkill3 > totalTestSkill4 &&
              totalTestSkill3 > totalTestSkill5 && totalTestSkill3 > totalTestSkill6) {
      console.log(`${character3.NOME} marcou 1 ponto! ${character1.NOME}, ${character2.NOME}, ${character4.NOME}, ${character5.NOME} e ${character6.NOME} não marcaram pontos nesta rodada.`);
      character3.PONTOS ++;
    } else if(totalTestSkill4 > totalTestSkill1 && totalTestSkill4 > totalTestSkill2 && totalTestSkill4 > totalTestSkill3 &&
              totalTestSkill4 > totalTestSkill5 && totalTestSkill4 > totalTestSkill6) {
      console.log(`${character4.NOME} marcou 1 ponto! ${character1.NOME}, ${character2.NOME}, ${character3.NOME}, ${character5.NOME} e ${character6.NOME} não marcaram pontos nesta rodada.`);
      character4.PONTOS ++;
    } else if(totalTestSkill5 > totalTestSkill1 && totalTestSkill5 > totalTestSkill2 && totalTestSkill5 > totalTestSkill3 &&
              totalTestSkill5 > totalTestSkill4 && totalTestSkill5 > totalTestSkill6) {
      console.log(`${character5.NOME} marcou 1 ponto! ${character1.NOME}, ${character2.NOME}, ${character3.NOME}, ${character4.NOME} e ${character6.NOME} não marcaram pontos nesta rodada.`);
      character5.PONTOS ++;
    } else if(totalTestSkill6 > totalTestSkill1 && totalTestSkill6 > totalTestSkill2 && totalTestSkill6 > totalTestSkill3 &&
              totalTestSkill6 > totalTestSkill4 && totalTestSkill6 > totalTestSkill5) {
      console.log(`${character6.NOME} marcou 1 ponto! ${character1.NOME}, ${character2.NOME}, ${character3.NOME}, ${character4.NOME} e ${character5.NOME} não marcaram pontos nesta rodada.`);
      character6.PONTOS ++;
    }

    console.log("-------------------------------------------");
  }
}

async function declareWinner(character1, character2, character3, character4, character5, character6) {
  console.log("Resultado final:");
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);
  console.log(`${character3.NOME}: ${character3.PONTOS} ponto(s)`);
  console.log(`${character4.NOME}: ${character4.PONTOS} ponto(s)`);
  console.log(`${character5.NOME}: ${character5.PONTOS} ponto(s)`);
  console.log(`${character6.NOME}: ${character6.PONTOS} ponto(s)`);

  if (character1.PONTOS > character2.PONTOS && character1.PONTOS > character3.PONTOS && character1.PONTOS > character4.PONTOS &&
      character1.PONTOS > character5.PONTOS && character1.PONTOS > character6.PONTOS)
    console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
  else if (character2.PONTOS > character1.PONTOS && character2.PONTOS > character3.PONTOS && character2.PONTOS > character4.PONTOS &&
           character2.PONTOS > character5.PONTOS && character2.PONTOS > character6.PONTOS)
    console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
  else if (character3.PONTOS > character1.PONTOS && character3.PONTOS > character2.PONTOS && character3.PONTOS > character4.PONTOS &&
           character3.PONTOS > character5.PONTOS && character3.PONTOS > character6.PONTOS)
    console.log(`\n${character3.NOME} venceu a corrida! Parabéns! 🏆`);
  else if (character4.PONTOS > character1.PONTOS && character4.PONTOS > character2.PONTOS && character4.PONTOS > character3.PONTOS &&
           character4.PONTOS > character5.PONTOS && character4.PONTOS > character6.PONTOS)
    console.log(`\n${character4.NOME} venceu a corrida! Parabéns! 🏆`);
  else if (character5.PONTOS > character1.PONTOS && character5.PONTOS > character2.PONTOS && character5.PONTOS > character3.PONTOS &&
           character5.PONTOS > character4.PONTOS && character5.PONTOS > character6.PONTOS)
    console.log(`\n${character5.NOME} venceu a corrida! Parabéns! 🏆`);
  else if (character6.PONTOS > character1.PONTOS && character6.PONTOS > character2.PONTOS && character6.PONTOS > character3.PONTOS &&
           character6.PONTOS > character4.PONTOS && character6.PONTOS > character5.PONTOS)
    console.log(`\n${character6.NOME} venceu a corrida! Parabéns! 🏆`);
  else console.log("A corrida terminou em empate");

}

(async function main() {  // function main - função de entrada, ela chama todas as outras funções
  console.log(`🎉🏁🎉Corrida entre ${player1.NOME} , ${player2.NOME}, ${player3.NOME}, ${player4.NOME}, ${player5.NOME} e ${player6.NOME} começando...\n`);

  await playRaceEngine(player1, player2, player3, player4, player5, player6); // chama a função playRaceEngine passando os jogadores como parâmetros
  await declareWinner(player1, player2, player3, player4, player5, player6);  ""
})(); // função auto invocada. Repare que a 'async function' esta toda entre (). estudar sobre 📚 self-invoked function. Note that the 'async function' is all between (). study about
