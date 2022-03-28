const lowInput = document.querySelector("input.low") as HTMLInputElement;
const highInput = document.querySelector("input.high") as HTMLInputElement;
const numbersElement = document.querySelector("p.numbers") as HTMLParagraphElement;
const countUpButton = document.querySelector("button.up") as HTMLButtonElement;
const countDownButton = document.querySelector("button.down") as HTMLButtonElement;

function countUp() {
    let low : number = Number(lowInput.value);
    let high : number = Number(highInput.value);

    let s : string = "";
    for (let i = low; i <= high; i++){
        s = s + i + " "; //s += i + " ";
    }

    numbersElement.textContent = s;
}

countUpButton.onclick = countUp;

function countDown() {
    let low : number = Number(lowInput.value);
    let high : number = Number(highInput.value);

    let s : string = "";
    for (let i = high; i >= low; i--){
        s = s + i + " "; //s += i + " ";
    }

    numbersElement.textContent = s;
}

countDownButton.onclick = countDown;