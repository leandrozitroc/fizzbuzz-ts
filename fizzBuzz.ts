function fizzbuzz(numero: number): string | number {
  if (numero % 15 === 0) return 'FizzBuzz';
  if (numero % 5 === 0) return 'Buzz';
  if (numero % 3 === 0) return 'Fizz';
  return numero;
}

for (let i: number = 1; i <= 100; i++) console.log(fizzbuzz(i));
