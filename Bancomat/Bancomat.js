let utenti = [{
    username: "Robert",
    password: "plant",
    saldo: 1000,
    iban:"abcd1234"
  },
  {
    username: "Roger",
    password: "waters",
    saldo: 2000,
    iban:"abcd12345"
  },
  {
    username: "Elisabetta",
    password: "ciao",
    saldo: 5000,
    iban:"abcd12346"
  }
];

let num=prompt("Inserire 1 per continuare e 0 per uscire");

if (num==1){
  
    let username=prompt("Inserire username");
    let password=prompt("Inserire password");

    let user = utenti.find(item => item.username == username );
    // console.log(user==undefined);

    let pass = utenti.find(item => item.password == password );
    // console.log("pass: ", pass==undefined);

    while(user==undefined || pass==undefined){
        alert("Attenzione! Username o password errati")
        username=prompt("Inserire username corretto");
        password=prompt("Inserire password corretta");
        
        user = utenti.find(item => item.username == username );
        // console.log(typeof user);
        // console.log(user==undefined);
        
        pass = utenti.find(item => item.password == password );
        
    }

    
    for (let element of utenti) {
        if (username==element.username && password==element.password) {
          
          let messaggio= "Benvenuto, " + element.username + ".";
          
          console.log(messaggio);
          
          let num1=prompt(messaggio + "\nInserisci 1 per depositare 2 per prelevare 3 per fare un bonifico");
        
          if (num1==1){
                let somma=parseInt(prompt("Inserire importo da depositare"));
                element.saldo=somma+element.saldo;
                alert("Nuovo saldo: " + element.saldo);
                console.log("Nuovo saldo: ", element.saldo);
          
            } else if(num1==2){
                let prelievo=parseInt(prompt("Inserire importo da prelevare"));
                if(prelievo<element.saldo){
                    element.saldo=element.saldo-prelievo;
                    alert("Nuovo saldo: " + element.saldo);
                    console.log("Nuovo saldo: ", element.saldo);
                } else {
                    alert("Attenzione! Credito insufficiente.");
                    console.log("credito insufficiente");
                }
            } else {
                let deposito=parseInt(prompt("Inserire importo per il bonifico"));
                let iban=prompt("Inserisci l'iban a cui vuoi fare il bonifico");

                let destinatario=utenti.find(item => item.iban == iban);
                

                while(destinatario==undefined || destinatario.iban==element.iban){
                    alert("Attenzione! Iban non corretto")
                    iban=prompt("Inserisci iban corretto");
                    
                    destinatario=utenti.find(item => item.iban == iban);
                    
                }

                element.saldo=element.saldo-deposito;
                destinatario.saldo=destinatario.saldo+deposito;

                alert("Nuovo saldo: " + element.saldo);
                console.log("nuovo saldo", element.username ,":", element.saldo);
                console.log("nuovo saldo", destinatario.username ,":", destinatario.saldo);
            }
        }

    }


} else{
    alert("Ciao!");
}