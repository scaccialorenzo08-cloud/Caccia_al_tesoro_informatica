let tentativi = 0;
let vinto = false;

// 1. MAPPA DELLA GRIGLIA (5x5)
// T = Tesoro (Posizione 12)
// FS = Freccia Su, FG = Freccia Giù, FD = Freccia Destra, FSN = Freccia Sinistra
// A = Acqua
const mappa = [
    "A", "A", "A", "A", "A",
    "A", "A", "FG", "A", "A",
    "A", "FD", "T", "FSN", "A",
    "A", "A", "FS", "A", "A",
    "A", "A", "A", "A", "A"
];

//Prendiamo tutte le immagini presenti nell'HTML
const immagini = document.querySelectorAll("img");

//visione di base egestione Click
immagini.forEach((img, i) => {

    img.onclick = function () {
        // Se hai già vinto o la casella è già stata scoperta
        if (vinto || img.src.includes("copertura.jpg") === false) return;

        tentativi++; // Aumenta i tentativi

        //SCOPRIRE LE IMMAGINI
        if (mappa[i] === "T") {
            img.src = "tesoro.jpg"; // tesoro baule con monete
            vinto = true;
            setTimeout(fineGioco, 100); // Aspetta un attimo e mostra il messaggio di fine
        }
        else if (mappa[i] === "FG") {
            img.src = "freccia_giu.jpg";
        }
        else if (mappa[i] === "FS") {
            img.src = "freccia_su.jpg";
        }
        else if (mappa[i] === "FD") {
            img.src = "freccia_destra.jpg";
        }
        else if (mappa[i] === "FSN") {
            img.src = "freccia_sinistra.jpg";
        }
        else {
            img.src = "acqua.jpg"; // Tutte le caselle vuote
        }
    };
});

//Funzione per i messaggi finali
function fineGioco() {
    let messaggio = "Hai trovato il tesoro in " + tentativi + " tentativi!\n";

    if (tentativi <= 5) {
        messaggio += "Sei bravissimo!";
    } else if (tentativi <= 10) {
        messaggio += "Ottimo intuito!";
    } else if (tentativi <= 15) {
        messaggio += "Ce l'hai fatta, ma potevi fare meglio.";
    } else {
        messaggio += "Finalmente! Hai cercato quasi ovunque.";
    }

    alert(messaggio);
}