let x = document.querySelector(".ui");
let y = document.querySelector("#login");
let z = document.querySelector("#signe");
let r = document.querySelector(".si");

console.log(x, y, z, r);

if (x && y && z) {
    x.onclick = function() {
        z.classList.add("login");
        y.classList.remove("login");
    };
}
