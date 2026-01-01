document.addEventListener("DOMContentLoaded", (event) => {
    const couleur = document.querySelector(".aléatoire");
    const corps = document.querySelector(".body");
    const personne = document.getElementById("choix");
    const named_color = [
        "red", "blue", "green", "yellow", "orange", "purple", "pink",
        "black", "white", "gray", "brown", "cyan", "magenta", "lime",
        "teal", "navy", "maroon", "olive", "silver", "gold",
        "coral", "salmon", "tomato", "khaki", "plum", "orchid",
        "turquoise", "violet", "indigo", "crimson",
        "aqua", "chartreuse", "chocolate", "darkblue", "darkgreen",
        "darkred", "deepskyblue", "dodgerblue", "firebrick",
        "hotpink", "lightblue", "lightgreen", "lightsalmon",
        "mediumseagreen", "royalblue", "seagreen", "slateblue"
    ];

    couleur.addEventListener("click", fonction);
    function fonction(){
        console.log("marche")
        const V = Math.floor(Math.random() * named_color.length);
        corps.style.backgroundColor = named_color[V];
    };
    
    personne.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            corps.style.backgroundColor = personne.value;
        }
    });

});