/*MAIN*/


//BOTTONE GENERA
var btnClick = document.getElementById("genera");
btnClick.addEventListener("click",
    function() {
    var nome = document.getElementById("nome").value;
    document.getElementById("nomeInserito").innerHTML = nome;
    var km = document.getElementById("numero").value;
    var fasciaEta = document.getElementById("fasciaEta").value;
    var prezzoKm = 0.21;
    var prezzoLordo = prezzoKm * km;
    var scontoMinorenne = (prezzoLordo * (20 / 100));
    var scontoOver65 = (prezzoLordo * (40 / 100));
    var prezzoMinorenne = (prezzoLordo - scontoMinorenne);
    var prezzoOver65 = (prezzoLordo - scontoOver65);
    if (fasciaEta == "minorenne") {
        document.getElementById("prezzoMinorenne").innerHTML = ("Il prezzo del tuo biglietto è di " + prezzoMinorenne + "  €");
        document.getElementById("scontoMinorenne").innerHTML = ("Sconto applicato: Minorenne");
    } else if ( fasciaEta == "over65") {
        document.getElementById("prezzoOver65").innerHTML = ("Il prezzo del tuo biglietto è di " + prezzoOver65 + "  €");
        document.getElementById("scontoOver65").innerHTML = ("Sconto applicato: Over 65");
    } 
    else {
        document.getElementById("prezzoMaggiorenne").innerHTML = ("Il prezzo del tuo biglietto è di " + prezzoLordo + "  €");
        document.getElementById("noScontoMaggiorenne").innerHTML = ("Nessuno sconto applicato");
    }
    var codiceCP = rndnumero(10000, 9000);
    document.getElementById("codiceCP").innerHTML = codiceCP;
    var numeroCarrozza = rndnumero(15,1);
    document.getElementById("numeroCarrozza").innerHTML = numeroCarrozza;
    
    var bigliettoVisibile = document.getElementById("bigliettoFantasma");
    bigliettoVisibile.style.display = "block";
}
);
    
/*FUNZIONI*/
function rndnumero(max, min) {
    var numeroRandom = Math.floor(Math.random() * (max - min) + min);
    return numeroRandom;
}

/*FINE FUNZIONI*/

//BIGLIETTO

//Creiamo un finto biglietto del treno con:
// 1 - Nome passeggero (ok)
// 2 - Codice treno (numero casuale tra 90000 e 100000 escluso)
// 3 -Numero carrozza
// 4 - Prezzo calcolato (ok)
// 5 - Categoria selezionata dall'utente (ok)
/* 6 - Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", 
se clicchiamo su annulla dobbiamo ripulire il form.*/