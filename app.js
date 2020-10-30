//console.log('Time to code!!');
function sum(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 7;
var number2 = 1.8;
var printResult = true;
var phrase = "Output: ";
var result = sum(number1, number2, printResult, phrase);
console.log(result);
