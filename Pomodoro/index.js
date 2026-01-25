document.addEventListener("DOMContentLoaded", (event) => {
    const commencer = document.querySelector(".play");
    commencer.addEventListener("click", start);

    let number_click = 0;
    let intervalID;

    function start(){
        const minutes = document.querySelector(".min");
        const secondes = document.querySelector(".sec")
        let valeur = parseInt(minutes.innerHTML) * 60 + parseInt(secondes.innerHTML);
        let temps = valeur;
        number_click += 1;
        
        function diminuerTemps(){
            let minute = parseInt(temps / 60, 10);
            let seconde = parseInt(temps % 60, 10);

            minute = minute < 10 ? "0" + minute : minute;
            seconde = seconde < 10 ? "0" + seconde : seconde; 

            minutes.innerHTML = minute;
            secondes.innerHTML = seconde;
            temps = temps <= 0 ? 0 : temps - 1;
        }
        
        function start_interval(){
            intervalID ??= setInterval(diminuerTemps, 1000);
        }
        function stop_interval(){
            clearInterval(intervalID);
            intervalID = null;
        }
        if(number_click % 2 === 1){
            start_interval();
        } else {
            stop_interval();
        }
    }
});