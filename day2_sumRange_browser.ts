//This is not a Node program! This is intended for the browser.
function sumRange() : void {
    let inputElementA = document.querySelector("input.A") as HTMLInputElement;
    let inputElementB = document.querySelector("input.B") as HTMLInputElement;
    
    let lower : number = Number(inputElementA.value)
    let higher : number = Number(inputElementB.value)
    let sum : number = 0;
    for (let i = lower; i <= higher; i++){
        sum += i;
    }

    let header1 = document.querySelector("h1") as HTMLHeadingElement;
    let header2 = document.querySelector("h2") as HTMLHeadingElement;
    header1.textContent = `The sum of all integers in the range [${lower},${higher}] is:`;
    header2.textContent = `${sum}`;
}
// console.log(`The sum of all integers in the range [${lower},${higher}] is ${sum}`);

let buttonElement = document.querySelector("button") as HTMLButtonElement;
buttonElement.onclick = sumRange;
