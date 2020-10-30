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
var num1 = 7.8;
var num2 = 1.8;
var print_Result = true;
var resPhrase = "Output: ";
var resultPh = sum(num1, num2, print_Result, resPhrase);
console.log(resultPh);
