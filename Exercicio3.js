const faturamentoDiario = [1000, 2000, 500, 1500, 800, 1200, 0, 0, 1800, 1000, 900, 1300, 1600, 2000, 2500, 2200, 1900, 1700, 1200, 900, 1100, 300, 0, 0, 1000, 1400, 1800, 2000, 2100, 2200];

const menorFaturamentoDiario = Math.min(...faturamentoDiario);
const maiorFaturamentoDiario = Math.max(...faturamentoDiario);
const faturamentoDiarioValido = faturamentoDiario.filter(valor => valor > 0);
const mediaFaturamentoDiario = faturamentoDiarioValido.reduce((acc, valor) => acc + valor, 0) / faturamentoDiarioValido.length;
const numDiasAcimaDaMedia = faturamentoDiario.filter(valor => valor > mediaFaturamentoDiario).length;

console.log(`Menor faturamento diário: R$ ${menorFaturamentoDiario.toFixed(2)}`);
console.log(`Maior faturamento diário: R$ ${maiorFaturamentoDiario.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média mensal: ${numDiasAcimaDaMedia}`);
