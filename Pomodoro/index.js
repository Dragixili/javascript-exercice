document.addEventListener("DOMContentLoaded", (event) => {
    const commencer = document.querySelector(".play");
    commencer.addEventListener("click", start);
    function start(){
        const minutes = document.querySelector(".min");
        const secondes = document.querySelector(".sec")
        console.log(minutes.innerHTML);
        console.log(secondes.innerHTML);
        let valeur = parseInt(minutes.innerHTML) * 60 + parseInt(secondes.innerHTML);
        console.log(valeur);
        let temps = valeur;
        
        
        function diminuerTemps(){
            let minute = parseInt(temps / 60, 10);
            let seconde = parseInt(temps % 60, 10);

            minute = minute < 10 ? "0" + minute : minute;
            seconde = seconde < 10 ? "0" + seconde : seconde; 

            minutes.innerHTML = minute;
            secondes.innerHTML = seconde;
            temps--;
        }
        setInterval(diminuerTemps,1000);
    }
});