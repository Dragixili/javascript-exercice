document.addEventListener("DOMContentLoaded", (event) => {
    const commencer = document.querySelector(".play");
    commencer.addEventListener("click", start);
    function start(){
        alert("commencer");
    }
});