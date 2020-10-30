//console.log('Time to code!!');
function sum(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 7;
const number2 = 1.8;
const printResult = true;
const phrase = "Output: ";
const result = sum(number1, number2, printResult, phrase);
console.log(result);
