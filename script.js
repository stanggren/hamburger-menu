const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger-content")
const pList = document.querySelectorAll("p");
toggleHamburger = () => {
    // header.style.height = '100vh';
    header.classList.toggle('hamburger');
    hamburger.classList.toggle('display-hamburger-content');
}

enlargeFontSize = () => {
    for (let i = 0; i < pList.length; i++){
        console.log(pList[i]);
        let computedFontSize = window.getComputedStyle(pList[i]).fontSize;
        let px = computedFontSize.substring(0, computedFontSize.length - 2);
        pList[i].style.fontSize = px * 1.2 + "px"; 
    }
}