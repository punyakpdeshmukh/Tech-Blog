const button  = document.querySelector('button');
const input1  = document.getElementById('num1')! as HTMLInputElement; //TS syntax
const input2  = document.getElementById('num2')! as HTMLInputElement;

function sum(num1:number, num2:number){
    return num1+num2;
    }

button.addEventListener('click', function(){
    console.log(sum(+input1.value,+input2.value));
});




