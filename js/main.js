pepsi1.addEventListener("click", function() { getPepsi(1) });
pepsi2.addEventListener("click", function() { getPepsi(2) });
pepsi3.addEventListener("click", function() { getPepsi(3) });

let main = document.querySelector(".main");

function getPepsi(num) {
    main.classList = `main main${num}`;
    productImg.src = `image/pepsi00${num}.png`;
}