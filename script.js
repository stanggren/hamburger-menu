const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger-content")

toggleHamburger = () => {
    // header.style.height = '100vh';
    header.classList.toggle('hamburger');
    hamburger.classList.toggle('display-hamburger-content');
}