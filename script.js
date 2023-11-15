/* const bars = document.quarySelector(".fa-solid fa-bars");
bars.onclick = function () {
    const navBar = document.quarySelector(".nav-bar");
    navBar.classList.toggle("select");
}
menu.onclick = () => {
    navBar.classList.toggle('nav-bar-show');
}*/


const menu = document.getElementById('menu');
const navBar = document.getElementById('nav-bar');

menu.onclick = () => {
    navBar.classList.toggle('nav-bar-show');
};
