import * as rl from 'readline-sync'

let lower : number = Number(rl.question("Give me the lower limit of the range: "))
let higher : number = Number(rl.question("Give me the upper limit of the range: "))
let sum : number = 0;
for (let i = lower; i <= higher; i++){
    sum += i;
}

console.log(`The sum of all integers in the range [${lower},${higher}] is ${sum}`);