// Défi numéro un
let message = "There is no war in Ba Sing Se";
let words = message.split(" ");
let wordCount = words.length;
console.log("Le message contient " + wordCount + " mots.");

// Défi numéro deux
let countries = ['China','Japan','South Korea','Vietnam','Malaysia'];
let capitals = ['Beijing','Tokyo','Seoul','Hanoi','Kuala Lumpur'];
for (let i = 0; i < countries.length; i++) {
    console.log("Votre pays : " + countries[i] + " a pour capitale : " + capitals[i] + ".");
}

// Défi numéro trois
let randomizer = Math.floor(Math.random() * 3);
let fate;
if (randomizer === 0) {
    fate = "Une victoire certaine";
} else if (randomizer === 1) {
    fate = "Une victoire pas si certaine";
} else if (randomizer === 2) {
    fate = "Une victoire difficile";
} else {
    fate = "Votre destin est incertain, ô élu non-mort";
}
console.log("Votre destin est : " + fate);

// Défi numéro quatre
function checkSeason(month) {
    switch (month) {
        case 1:
        case 2:
        case 12:
            return "Hiver";
        case 3:
        case 4:
        case 5:
            return "Printemps";
        case 6:
        case 7:
        case 8:
            return "Été";
        case 9:
        case 10:
        case 11:
            return "Automne";
        default:
            return "Mois invalide";
    }
}
let currentMonth = 3;
let currentSeason = checkSeason(currentMonth);
console.log("Nous sommes en " + currentSeason + ".");
