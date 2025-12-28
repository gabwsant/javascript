// Função que o neurônio executa e passa o
// resultado para a função de ativação
function funcaoSoma(arr = []) {
  return arr.reduce((a, b) => a + b);
}
console.log("Resultado da função somatória: " + funcaoSoma([8, 3, 1]));

// Função usada para ajustar os pesos de
// uma rede neural para que ela erre cada vez menos.
function gradientDescent(n = 0) {
  return n * (1 - n);
}
console.log("Resultado da função de gradiente: " + gradientDescent(2));

// -- Funções de ativação

// Função binary step
function binaryStep(n = 0) {
  return n >= 0 ? 1 : 0;
}

// Função sigmoid
function sigmoid(n = 0) {
  return 1 / (1 + Math.pow(Math.E, -n));
}

// Função Tanh
function tanh(n = 0) {
  return Math.sinh(n) / Math.cosh(n);
}

// Função ReLU
function relu(n = 0) {
  return Math.max(n, 0);
}

// Função Leaky ReLU
function leakyRelu(n = 0) {
  return Math.max(n, 0.01);
}

function feedForward(
  entradas = [],
  objetivo = 0,
  epocas = 1,
  ativacao = "sigmoid"
) {
  if (objetivo <= 0) objetivo = 0.1;
  else if (objetivo > 1) objetivo = 1;

  let pesos = [];
  for (let i = 0; i < entradas.length; i++) {
    pesos.push(Math.random());
  }

  for (let i = 1; i <= epocas; i++) {
    let multiplicacao = [];
    for (let j = 0; j < entradas.length; j++) {
      if (entradas[j] <= 0) entradas[j] = 0.1;
      multiplicacao.push(entradas[j] * pesos[j]);
    }

    let sum = funcaoSoma(multiplicacao);
    let saidas = 0;
    switch (ativacao) {
      case "tanh":
        saidas = parseFloat(tanh(sum).toFixed(4));
        break;
      case "sigmoid":
        saidas = parseFloat(sigmoid(sum).toFixed(4));
        break;
      case "relu":
        saidas = parseFloat(relu(sum).toFixed(4));
        break;
      case "leakyRelu":
        saidas = parseFloat(leakyRelu(sum).toFixed(4));
        break;
      case "binaryStep":
        saidas = parseFloat(binaryStep(sum).toFixed(4));
        break;
      default:
        saidas = parseFloat(sigmoid(sum).toFixed(4));
    }

    let error = parseFloat(Math.abs(objetivo - saidas).toFixed(4));
    for (let j = 0; j < entradas.length; j++) {
      if (entradas[j] <= 0) entradas[j] = 0.1;
      pesos[j] += entradas[j] * gradientDescent(error);
    }
    let imprime = i.toString().padStart(8, "0");
    console.log(
      `época: ${imprime} - taxa de erro: ${error} - saida: ${saidas}`
    );
  }
}

//feedForward([0], 0.1, 800, "relu");
feedForward([0], 0.1, 800, "sigmoid");
