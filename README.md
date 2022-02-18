## Esercizi React - Intermediate

1. prerequisiti: chiamata REST che ritorna un array di oggetti utili per popolare una tabella
	      		 chiamata REST che permette l'update e l'insert di un singolo di questi oggetti

A partire da una tabella popolata tramite una chiamata REST a tuo piacere, al momento del click
su una riga della tabella prevedere l'apertura di un modale con un form avente le informazioni della
riga selezionata, ci sarà quindi la possibilità di modificare i campi del form ed, al sumbit, inviare
(tramite chiamata REST) il nuovo oggetto aggiornato al backend. Prevedere a fine tabella un
bottone che apre lo stesso modale che in questo caso ha i campi vuoti 
e permette quindi l'inserimento di un nuovo record.
Il modale deve poter essere chiuso cliccando fuori dallo stesso e/o cliccando una classica x.
Badare un minimo allo stile.
La tipicizzazione dei dati è altamente richiesta.
Usare dei loader durante l'attesa delle chiamate al server.
Extra: Rendere riutilizzabile il componente del modale.
Extra: Rendere riutlizzabile il componente della tabella.

2. prerequisiti:
buona conoscenza di redux toolkit
servizio REST che ritorna un array di oggetti.

Impostare Redux toolkit in modo tale da poter fare il dispatch di una chiamata API.
Gestire il caso di caricamento, errore e successo tutto all'interno di uno slice.
Da un componente consumare l'API attraverso Redux gestendo quindi a livello di UI i casi di loading ed errore.
Mostrare in pagina una proprietà di ogni singolo oggetto risultante.

3. prerequisiti:
buona conoscenza di redux toolkit
servizio REST che supporta la paginazione (altrimenti vedi: https://api.instantwebtools.net/v1/passenger?page=0&size=10)

Utilizzando RTK query implementare una tabella con paginazione.
Disabilitare il bottone per la pagina successiva se raggiunta la massima pagina disponibile, idem per il bottone pagina precedente.
CSS, Typescript necessari
