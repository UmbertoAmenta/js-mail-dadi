/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?*/


// |Chiedere| all'utente di avviare la sfida lanciando il suo dado a 6 facce
let isReady = confirm("Sfiderai la sorte a dadi")
if (isReady) {
    alert("Si LANCIA!")
} else {
    alert("Troppo tardi, la mia non era una domanda")
}



// |Generare| un numero randomico tra 1 e 6 per il giocatore

const userRoll = Math.floor(Math.random() * 6) +1
console.log("lancio giocatore", userRoll)



// |Generare| un numero randomico tra 1 e 6 per il computer

const cpuRoll = Math.floor(Math.random() * 6) +1
console.log("lancio cpu", cpuRoll)



// |Confrontare| il risultato dei dadi
//      |Comunicare| il vincitore (chi pesca il numero più alto)
if (userRoll > cpuRoll) {
    alert(`Tu:${userRoll} vs CPU:${cpuRoll}     Complimenti, nessuno può nulla contro la tua fortuna (stavolta)`)
} else if (userRoll < cpuRoll) {
    alert(`Tu:${userRoll} vs CPU:${cpuRoll}     Impegnati di più la prossima volta`)    
} else {
    alert(`${userRoll}-${cpuRoll} Pari     Quasi, ma non abbastanza`)
}