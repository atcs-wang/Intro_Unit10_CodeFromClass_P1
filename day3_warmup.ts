let s : string = "";
for (let i = 30; i >= 10; i--){
    s = s + i + " "; //s += i + " ";
}
console.log(s);

let s2 : string = "";
for (let i = 30; i <= 50; i += 2) {
    s2 += i + " ";
}
console.log(s2);
