// Estudando sobre Inteligência Artificial, me interessei pelo
// tópico de algoritmos evolutivos e tentei fazer o meu.

// Objetivo (fitness): encontrar a maximização da função com valores aleatórios

function fitness(x) {
  return x * x + 1;
}

function criarPopulacao(tamanho, valorMaximo) {
  const populacao = new Array();
  for (i = 0; i < tamanho; i++) {
    populacao.push(Math.floor(Math.random() * valorMaximo));
  }
  return populacao;
}

function selecaoPorTorneio(populacao, quantidadeParticipantes) {
  const indices = new Set();
  while (indices.size < quantidadeParticipantes) {
    indices.add(Math.floor(Math.random() * populacao.length));
  }
  const selecionados = [...indices].map((i) => populacao[i]);
  let vencedor = selecionados[0];
  for (let i = 1; i < selecionados.length; i++) {
    if (fitness(selecionados[i]) > fitness(vencedor)) {
      vencedor = selecionados[i];
    }
  }
  return vencedor;
}

function crossoverAritmetico(pai1, pai2) {
  let w = Math.random();
  return w * pai1 + (1 - w) * pai2;
}

function randomGaussian() {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  // Box-Muller
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function gerarMutacaoGaussiana(individuo) {
  if (Math.random() < 0.1) {
    individuo = individuo + randomGaussian() * 50;
  }
  if (individuo < 0) individuo = 0;
  if (individuo > 1000) individuo = 1000;
  return individuo;
}

function substituir(populacao, individuo) {
  let menorFitness = populacao[0];
  populacao.forEach((element) => {
    if (fitness(element) < fitness(menorFitness)) {
      menorFitness = element;
    }
  });
  populacao.splice(populacao.indexOf(menorFitness), 1);
  populacao.push(individuo);
  return populacao;
}

function melhorIndividuo(populacao) {
  return populacao.reduce((a, b) => (fitness(a) > fitness(b) ? a : b));
}

function executarAlgoritmoEvolutivo(quantidadeGeracoes) {
  let tamanhoPopulacao = 20;
  let valorMaximo = 1000;
  let quantidadeParticipantesTorneio = 3;
  let populacao = criarPopulacao(tamanhoPopulacao, valorMaximo);
  console.log(populacao);
  for (i = 0; i < quantidadeGeracoes; i++) {
    let pai1 = selecaoPorTorneio(populacao, quantidadeParticipantesTorneio);
    let pai2 = selecaoPorTorneio(populacao, quantidadeParticipantesTorneio);
    let filho = crossoverAritmetico(pai1, pai2);
    filho = gerarMutacaoGaussiana(filho);
    populacao = substituir(populacao, filho);
  }
  return populacao;
}

const individuosEvoluidos = executarAlgoritmoEvolutivo(100);
const melhor = melhorIndividuo(individuosEvoluidos);
console.log(individuosEvoluidos);
console.log("Melhor indivíduo:", melhorIndividuo(individuosEvoluidos));
