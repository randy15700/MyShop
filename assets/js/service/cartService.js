const API_URL = "http://localhost:3000/cart";

// ajouter pdt au panier

export async function ajouterAuPanier(produitId) {
    return await axios.post(API_URL,{
        produitID:produitId ,
        quantite:1
    });
    
}