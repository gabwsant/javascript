let Carro = function () {
  this.cor = "Amarelo";
  this.modelo = "Chevette";
  this.velocidadeAtual = 0;
  this.velocidadeMaxima = 180;

  this.acelerar = function () {
    let velocidade = this.getVelocidadeAutal() + 10;
    this.setVelocidadeAtual(velocidade);
  };
  this.getVelocidadeAutal = function () {
    return this.velocidadeAtual;
  };
  this.setVelocidadeAtual = function (velocidadeAtual) {
    this.velocidadeAtual = velocidadeAtual;
  };
};

let carro = new Carro();
