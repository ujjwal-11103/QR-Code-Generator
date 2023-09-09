const inputText = document.getElementById("input-text");
const imgArea = document.getElementById("img-area");

const imgSection = document.getElementById("image-section")

const btn = document.getElementById("btn")


function scanner(scannerText) {
    imgArea.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${scannerText}`;
}


btn.addEventListener('click', () => {

    scanner(inputText.value);
    imgArea.style.display = "block";

})
console.log("exited");