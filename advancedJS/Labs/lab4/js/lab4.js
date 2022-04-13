const init = () => {
    let btnGood = document.querySelector("#good");
    let btnAverage = document.querySelector("#average");
    let btnexcellent = document.querySelector("#excellent");

    btnGood.onclick = dotNotation;
    btnAverage.onclick = dotNotation;
    btnexcellent.onclick = dotNotation;

    let btnTall = document.querySelector("#tall");
    let btnAvgHeight = document.querySelector("#averageHeight");
    let btnShort = document.querySelector("#short");

    btnTall.addEventListener("click", w3c)
    btnAvgHeight.addEventListener("click", w3c)
    btnShort.addEventListener("click", w3c)

}

const inline = control => {
   console.log(control.getAttribute("value"));
}

const dotNotation = event => {
    console.log(event.currentTarget.getAttribute("value"));
}

const w3c = event => {
    console.log(event.currentTarget.getAttribute("value"));
}