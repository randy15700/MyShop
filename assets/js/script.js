import { ajouterAuPanier, getPanier } from "./service/cartService.js";
import { getAllProducts, getProductByID } from "./service/productService.js";

const btnTop = document.querySelector('.scroll-top');
 if (btnTop) {
    btnTop.addEventListener("click", function () {
        window.scrollTo({
       top : 0 ,
       behavior : "smooth"
    });    
});        
}
   
async function afficherProduits() {
    const container = document.querySelector(".product-container");
    console.log(container);
    // let produit1 = {
    //     nom : "Médaillon d'ogma",
    //     description : "Médaillon magique de notre souverain, rain rain!",
    //     prix : 20,
    //     imgURL : "assets/images/medaillon-ogma.jpg"
    // };


    // appel au service

    try {
        const produits = await getAllProducts()

    if (container) {
    produits.forEach(produit => {
    const article = document.createElement("article") ;
    article.classList.add("product-card");

    article.innerHTML = `
                <h3>${produit.nom}</h3>                    
                <img src=${produit.imgURL} alt=${produit.nom}>
                <p id="descriptionP1">${produit.description}</p>
                <p class="price">Prix : ${produit.prix} E </p>
                <button type="button">Ajouter au panier</button>
    `
// evenement au clic
    const btn = article.querySelector("button")
    btn.addEventListener("click", async function(){
        try {
            await ajouterAuPanier(produit.id);
            alert("Produit ajouté au panier!", produit.id);
        } catch (error) {
            console.log(error);
        
        alert("erreur ajout produit au panier");
        }
        
    });

    container.appendChild(article)
});


}
    } catch (error) {
        console.log("erreur récupération produits");
        
        alert("erreur récupération produits")
    }

}


    // let produits =  JSON.parse(localStorage.getItem("listeProduits")) || [];
    //  console.log("liste de produits à partir de LS :", produits);


     
    //  [
    //     {
    //     nom : "Médaillon d'ogma",
    //     description : "Médaillon magique de notre souverain, rain rain!",
    //     prix : 26,
    //     imgURL : "assets/images/medaillon-ogma.jpg"
    // },
    //     {
    //     nom : "Bavoir",
    //     description : "Votre enfant a failli s' étouffer avec un os de caille et a gerbé partout, on a ce qu' il lui faut!",
    //     prix : 10,
    //     imgURL : "assets/images/bavoir-couillère.webp"
    // },
    // {
    //     nom : "Graal",
    //     description : "Non, le graal n' est ni un bocal à anchois, ni une pierre incandescante, mais bien un verre à bière.",
    //     prix : 55,
    //     imgURL : "assets/images/graal.webp"
    // },
    // ];

    // injection HTML produit
//     // produits.forEach(produit => {
//     //     container.innerHTML += `
//     //             <article class="product-important">                    
//     //                 <h3>${produit.nom}</h3>                    
//     //                 <img src=${produit.imgURL} alt=${produit.nom}>
//     //                 <p id="descriptionP1">${produit.description}</p>
//     //                 <p class="price">Prix : ${produit.prix} E </p>
//     //                 <button type="button">acheter</button>
//     //             </article>
//     // `;
//     // });
    
// }


// création élément article

async function afficherPanier() {
    const panierBody = document.querySelector("panier-body");


    if (!panierBody) return;
        try {
            const panier = await getPanier();
            console.log(panier);

            for(const elt of panier) {
                //récupération pdt par ID
                const produit = await getProductByID(elt.produitID)


                const tr = document.createElement("tr");

                tr.innerHTML = `
                <td></td>
                        <td>${elt.produitID}</td>
                        <td>${produit.nom} </td>
                        <td>${produit.prix}</td>
                        <td>${elt.quantite}</td>                        
                        <td><button type="button">supprimer</button></td>
                `;

                panierBody.appendChild(tr);

            };

            const trSomme = document.createElement("tr")

            trSomme.innerHTML =`
                        <td colspan="4">Total</td>
                        <td>65 E </td>
                        <td><button type="button">Commander</button></td>
            `
            panierBody.appendChild(trSomme);

            
        } catch (error) {
            
        }
    }

afficherPanier()

afficherProduits();


// fonction badge produit

const prix = document.querySelectorAll('.price');
console.log(prix);


prix.forEach((elt) => {
    let txtPrix = elt.innerText ;
    // let nbrPrix = txtPrix.replace("prix", "").trim();
    // let nbrPrix2 = Number(nbrPrix.replace("e", "").trim());     // version longue HD 4K  // trim supprimme espaces
    // console.log(nbrPrix2);
    let nbrPrix = Number(txtPrix.match(/\d+/));                    //  version plus courte  // (/\d+/) extrait uniquement les nombres
    
    const carte = elt.closest('article')

    console.log(nbrPrix);   

    if (nbrPrix < 25) {        
        carte.insertAdjacentHTML("afterbegin", `<span class="badge">Bonne affaire</span>`);

    }else if (nbrPrix > 50) {
        carte.insertAdjacentHTML("afterbegin", `<span class="badge">Top produit</span>`) ;
    }
});




