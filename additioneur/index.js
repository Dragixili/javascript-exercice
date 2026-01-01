let resultat = 0;

document.addEventListener("DOMContentLoaded", (event) =>{
    const Add = document.querySelector(".add");
    const Sub = document.querySelector(".sub");
    const value = document.querySelector(".valeur");

    //2 méthodes
    
    Sub.addEventListener("click", soustraction);
    function soustraction(){
        resultat --;
        value.textContent = resultat;
    }

    Add.addEventListener("click", addition);
    function addition(){
        resultat ++;
        value.textContent = resultat;
    }
});