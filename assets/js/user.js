class classeUtilisateur {
    constructor(nom, email, mdp, genre, interets, pays) {
        this.nom = nom;
        this.email = email;
        this.mdp = mdp;
        this.genre = genre;
        this.interet = interets;
        this.pays = pays;
    }
}

function addUser() {
    const inscriptionform = document.getElementById('inscription-form');

    if (!inscriptionform) return ;

        inscriptionform.addEventListener("submit", function (Event) {
        Event.preventDefault()  //annule actualisation auto page

        //récupérer valeurs formulaire
        let nom = document.getElementById('nom').value;
        let email = document.getElementById('email').value;
        let mdp = document.getElementById('pwd').value;
        let genre = document.querySelector('input[name=genre]:checked').value;
        let interets = [];
        let interetsChecked = document.querySelectorAll('input[name=interets]:checked');
        console.log(interetsChecked);
        for (let i = 0; i < interetsChecked.length; i++) {
            interets.push(interetsChecked[i].value);
        };
        let pays = document.getElementById('pays').value;
                
        //regrouper les valeurs du formulaire dans un objet
    let objetUser = new classeUtilisateur(nom, email, mdp, genre, interets, pays);
    console.log(objetUser);
    
        //sauvegarder dans local storage
    const userText = JSON.parse(localStorage.getItem("userList")) || [];
    userText.push(objetUser) ;
    localStorage.setItem("userList", JSON.stringify(userText))    
    inscriptionform.reset()        
    })
    }



// connexion utilisateur

function connexionUser() {
    const connexionForm = document.getElementById('connexionForm');

    if (!connexionForm) return ;

        connexionForm.addEventListener("submit", function (Event) {
        Event.preventDefault()
        
        
        let emailCo = document.getElementById('email').value;
        let mdpCo = document.getElementById('pwd').value;

        const userText = JSON.parse(localStorage.getItem("userList")) || [];


    //    for (let i = 0; i < userText.length; index++) {
    //     if (userText[i].email === emailCo && userText[i].mdp === mdpCo) {
    //         window.location.href = "../index.html";
    //         return;
    //     }
         
    //    };
    //         alert("email ou mot de passe incorrect")

        // recherche avec find

        const userConnected = userText.find((utilisateur)=>{
            return utilisateur.email === emailCo && utilisateur.mdp === mdpCo;
        });
        if (userConnected) {
            window.location.href = "../index.html";
        } else {
            alert("email ou mot de passe incorrect")
        }

 })
}
addUser()
connexionUser()