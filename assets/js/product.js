import {ajouterProduitAPI} from "./service/productService.js";

class Produit {
    constructor(nom, description, prix, imgURL) {
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.imgURL = imgURL;
    }
}

// const produit1 = new produit("veste", "jolie veste bleue", 56, "assets/images/tatie.jpg");
// console.log(produit1);

//Ajout produit


function ajouterProduit() {
    const form = document.getElementById('formProduct');

    if (form) {
        form.addEventListener("submit", async function (Event) {
        Event.preventDefault()  //annule actualisation auto page

        //récupérer valeurs formulaire
        let nom = document.getElementById('nom').value;
        let prix = document.getElementById('prix').value;
        let description = document.getElementById('description').value;
        let imgURL = document.getElementById('imgURL').value;
        console.log(nom, prix, description, imgURL);
        
        //regrouper les valeurs du formulaire dans un objet
    let objetProduit = new Produit(nom, description, prix, imgURL);
    console.log(objetProduit);
    console.log(window.axios);
    
    
    //     //sauvegarder dans local storage
    // const produits = JSON.parse(localStorage.getItem("listeProduits")) || [];
    // produits.push(objetProduit) ;
    // localStorage.setItem("listeProduits", JSON.stringify(produits))       
    //         console.log("liste produits : ", produits);
    // form.reset()        

            // Appel du service

            try {
                const nouveauProduit = await ajouterProduitAPI(objetProduit);
                console.log(nouveauProduit);

                form.reset();
                
                alert("Produit ajouté !")
            } catch (error) {
                console.log(error);
                alert("Erreur lors d l' ajout du produit !")
                
            }

    })
    }

    
}
ajouterProduit()
