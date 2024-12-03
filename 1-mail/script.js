/*Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email.
NON POTETE UTILIZZARE NESSUN METODO COME:
- includes
- indexOf
- find
- search
- ecc...*/

// |Creare| lista utenti

const mailList = [
    "mario.rossi@casual.it",
    "john.doe@casual.en",
    "jean.dupont@casual.fr",
    "juan.perez@example.es",
    "jane.smith@example.au"
]



// |Chiedere| indirizzo email all'utente

const userMail = prompt("Inserisci il tuo indirizzo mail per verificare se abilitato al servizio")
// console.log(userMail)



// |Confrontare| la mail inserita con gli elementi della lista 

let isUserMailValid = false
for (let i = 0; i < mailList.length && mailList[i] === userMail; i++) {
    isUserMailValid = true
}



// |Se| presente in lista
//      |Informa| - accesso effettuato
// |Altrimenti|
//      |Informa| - accesso fallito
if (isUserMailValid === true) {
    alert("L'indirizzo inserito è abilitato all\'accesso al servizio")
} else {
    alert("L'indirizzo inserito non è valido, registrazione necessaria")
}