document.addEventListener("DOMContentLoaded", (event) => {
    const proposition = document.querySelector(".choix");
    const aléa = document.querySelector(".value_aléatoire");
    const para = document.querySelector(".resultat");
    aléa.addEventListener("click", randomizer);
    function randomizer(){
        const réponse =  Math.floor(Math.random() * 1000);
        return réponse;
    }
    console.log(réponse);
    proposition.addEventListener("keydown", (event) => {
        if(event.key === "Enter"){
            const valeur = proposition.value;
            console.log(valeur);
            if(valeur === réponse){
                resultat.value = "réponse juste";
            }
        }
    });
});