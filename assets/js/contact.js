class Message {
    constructor(nom, email, msg) {
        this.nom = nom
        this.email = email
        this.message = msg
    }
}

function ajoutMsg() {
    const formMsg = document.getElementById('formContact');

    if (formMsg) {
        formMsg.addEventListener("submit", async function (Event) {
        Event.preventDefault()  //annule actualisation auto page

        //récupérer valeurs formulaire
        let nom = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
                
        //regrouper les valeurs du formulaire dans un objet
    let objetMsg = new Message(nom, email, message);

            // Appel du service

            try {
                const nouveauMsg = await ajouterMsgAPI(objetMsg);

                formMsg.reset();
                
                alert("Message envoyé !")
            } catch (error) {
                console.log(error);
                alert("Erreur lors de l'envoi du message !")
                
            }

    })
    }

    
}
ajoutMsg()