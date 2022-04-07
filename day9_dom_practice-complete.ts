/* USING document.querySelector */

// A: Make the title heading yellow
(document.querySelector("h1") as HTMLElement).classList.add('exciting');
// B : Make line 19 says "- Martin Fowler"
(document.querySelector(".author") as HTMLElement).textContent = "- Martin Fowler";
// C: Make line 12 blue
(document.querySelector("li#best") as HTMLElement).classList.add("cool");
// D: Make line 2 red
(document.querySelector("li[data-sentiment='negative']") as HTMLElement).classList.add("scary");
// E: Make line 8 monospace / spaced-out
(document.querySelector("li[data-sentient='no']") as HTMLElement).classList.add("robotic");
// F: Make line 11 green and uppercase - but ONLY after you click on it
(document.querySelector("li[data-sentiment='positive']") as HTMLElement).addEventListener('click', (event : Event) => {
    (event.currentTarget as HTMLElement).classList.add("yay")
});

/* USING document.querySelectorAll */

// G: Make lines 2, 5, 8, 12, 14, and 16 ALL bold
document.querySelectorAll("li.noun").forEach(function(x ){
    x.classList.add('standout');
});
// H: Make both lines 12 and 16 cursive and italic
document.querySelectorAll("li[data-sentient='yes']").forEach(function(x ){
    x.classList.add('human');
});

// I: Make ALL numbered lines respond to being clicked on by
// *toggling* having a yellow background or not. 
document.querySelectorAll("li").forEach(function(x) {
    x.addEventListener("click", function(event) {
        x.classList.toggle("highlight");
    });
})