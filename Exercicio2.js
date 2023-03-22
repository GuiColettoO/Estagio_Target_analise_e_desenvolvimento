const Num = parseInt(prompt("Digite um número: "));

let fib = [0, 1];
while (fib[fib.length - 1] < Num) {
  const proxfib = fib[fib.length - 1] + fib[fib.length - 2];
  fib.push(proxfib);
}

if (fib.includes(Num)) {
  console.log(`${Num} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${Num} não pertence à sequência de Fibonacci.`);
}