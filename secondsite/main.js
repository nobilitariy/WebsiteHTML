// function sumNum(num1, num2) {
//     return (num1 + num2).toFixed(2);
// }
// const num1 = Number.parseFloat(prompt("first number: "));
// const num2 = Number.parseFloat(prompt("second number: "));
// alert(`result ${num1} + ${num2} = ${sumNum(num1, num2)}`);
// const num3 = 0.424;
// const reundedNum3 = Math.reumd(num3 * 100) / 100;
//confirm("da?") ? alert("ok") : alert("no");
// const pr = prompt("cto?").toLowerCase();
// switch (pr) {
//     case 'mand':
//         alert(100);
//         break;
//     case 'ban':
//     case 'gr':
//         alert(70);
//         break;
//     default:
//         alert("no");
// }
function getMaxEl(arr) {
    let max = arr[0];
    for (let index = 1; index < arr.length-1; index++) {
        if (arr[index]<arr[index+1]){
            max = arr[index+1];
        }
    }
    return max;
    
}
console.log(getMaxEl([1,2,3,4,5,6,7,8,4,34,2,1,1]));