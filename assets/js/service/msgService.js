const API_URL2 = "http://localhost:3000/messages";

// Fonction pour ajouter un produit dans l' api

async function ajouterMsgAPI(msgObj) {
    
    const reponse = await fetch(API_URL2, {
        method: "POST",

        headers: {
            "content-Type": "application/json"
        },

        body: JSON.stringify(msgObj)
    });

    if (!reponse.ok) {
        throw new Error("Erreur lors de l' envoi du message !");
    }

    return await reponse.json();
}