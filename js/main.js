/*MAIN*/


//BOTTONE GENERA
var btnClick = document.getElementById("genera");
btnClick.addEventListener("click",
    function() {
    var nome = document.getElementById("nome").value;
    console.log(nome);
    var km = document.getElementById("numero").value;
    var fasciaEta = document.getElementById("fasciaEta").value;
    var prezzoKm = 0.21;
    var prezzoLordo = prezzoKm * km;
    var scontoMinorenne = (prezzoLordo * (20 / 100));
    var scontoOver65 = (prezzoLordo * (40 / 100));
    var prezzoMinorenne = (prezzoLordo - scontoMinorenne);
    var prezzoOver65 = (prezzoLordo - scontoOver65);
    if (fasciaEta == "minorenne") {
        console.log(prezzoMinorenne)
    } else if ( fasciaEta == "over65") {
        console.log(prezzoOver65);
    } 
    else {
        console.log(prezzoLordo);
    }
}
);



//BIGLIETTO

//Creiamo un finto biglietto del treno con:
// 1 - Nome passeggero
// 2 - Codice treno (numero casuale tra 90000 e 100000 escluso)
// 3 -Numero carrozza
// 4 - Prezzo calcolato
// 5 - Categoria selezionata dall'utente
/* 6 - Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", 
se clicchiamo su annulla dobbiamo ripulire il form.*/