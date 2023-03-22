const faturamentoMensal = {
  "SP": 67836.43,
  "RJ": 36678.66,
  "MG": 29229.88,
  "ES": 27165.48,
  "Outros": 19849.53
};

const total = Object.values(faturamentoMensal).reduce((acc, curr) => acc + curr, 0);

const representacao = {};
for (let estado in faturamentoMensal) {
  representacao[estado] = (faturamentoMensal[estado] / total) * 100;
}

console.log(representacao);