const balanceElm = document.querySelector(".balance") as HTMLElement;
const balanceAmountElm = document.querySelector("#balance-amount") as HTMLElement;

const coinAddSoundElm = document.querySelector("audio.coin-add") as HTMLAudioElement;
const coinRemoveSoundElm = document.querySelector("audio.coin-remove") as HTMLAudioElement;

const historyElm = document.querySelector(".history") as HTMLElement;

function updateBalance(amount : number, remove : boolean) : void {
    let balance : number = Number(balanceAmountElm.textContent);
    balance += (remove) ? -amount : amount; 
    balanceAmountElm.textContent = balance.toFixed(2);

    let soundElm : HTMLAudioElement = remove ? coinRemoveSoundElm : coinAddSoundElm;
    soundElm.currentTime = 0; //restarts the sound
    soundElm.play();
}

function handleCoinClick(event : MouseEvent) {
    let clickedElm = event.currentTarget as HTMLElement;
    updateBalance( Number(clickedElm.dataset.amount), event.shiftKey);
    addToHistory(clickedElm, event.shiftKey);
}

document.querySelectorAll<HTMLElement>(".coin").forEach(function(element : HTMLElement) {
    element.addEventListener("click", handleCoinClick); 
})

document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.repeat)
        return;
    //get some .coin element with data-letter matching event.key
    let elm = document.querySelector(`.coin[data-letter='${event.key.toLowerCase()}']`) as HTMLElement | null
    if (!elm){ //elm === null
        return;
    }
    elm.classList.add("keypress");
    let doIRemove : boolean = event.shiftKey;

    updateBalance(Number(elm.dataset.amount), doIRemove);
    addToHistory(elm, doIRemove);
});

document.addEventListener("keyup", (event: KeyboardEvent) => {
    //get some .coin element with data-letter matching event.key
    let elm = document.querySelector(`.coin[data-letter='${event.key.toLowerCase()}']`) as HTMLElement | null
    if (!elm){ //elm === null
        return;
    }
    elm.classList.remove("keypress");
})

function addToHistory(coinElement : HTMLElement, negative : boolean) {
    let liElm : HTMLLIElement = document.createElement("li");
    liElm.textContent = coinElement.dataset.letter as string;
    if (negative) 
        liElm.classList.add("negative");
    historyElm.appendChild(liElm);

    liElm.addEventListener("click", function(event : MouseEvent){
        liElm.remove();
        updateBalance(Number(coinElement.dataset.amount), ! negative);
    });
}