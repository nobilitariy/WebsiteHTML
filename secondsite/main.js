// function sumNum(num1, num2) {
//     return (num1 + num2).toFixed(2);
// }
// const num1 = Number.parseFloat(prompt("first number: "));
// const num2 = Number.parseFloat(prompt("second number: "));
// alert(`result ${num1} + ${num2} = ${sumNum(num1, num2)}`);
// const num3 = 0.424;
// const reundedNum3 = Math.reumd(num3 * 100) / 100;
//confirm("da?") ? alert("ok") : alert("no");
const pr = prompt("cto?")
switch (pr) {
    case 'mand':
        alert(100);
        break;
    case 'ban':
    case 'gr':
        alert(70);
        break;
    default:
        alert("no");
}