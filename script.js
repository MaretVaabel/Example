// Funktsioon, mis arvutab ja väljastab ühe nädala eeldatava ajakulu
function calculateWeeklyWorkload() {
    // Küsib kasutajalt ainepunktide arvu ja nädalate arvu
    let points = Number(prompt("Sisestage ainepunktide arv:"));
    let weeks = Number(prompt("Sisestage nädalate arv:"));
    
    // Kontrollib, kas sisend on kehtiv täisarv
    if (isNaN(points) || points <= 0 || isNaN(weeks) || weeks <= 0) {
        console.log("Palun sisestage kehtivad täisarvud ainepunktide ja nädalate jaoks.");
        return;
    }
    
    // Arvutab ühe nädala eeldatava ajakulu
    let totalHours = points * 26;
    let weeklyWorkload = totalHours / weeks;
    
    // Ümardab ajakulu täisarvuni
    let roundedWorkload = Math.round(weeklyWorkload);
    
    // Kuvab tulemuse
    console.log("Ühe nädala eeldatav ajakulu on: " + roundedWorkload + " tundi.");
}

// Käivitame funktsiooni
calculateWeeklyWorkload();
