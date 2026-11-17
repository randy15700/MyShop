const API_URL = "http://localhost:3000/produits";

// // Fonction pour ajouter un produit dans l' api

// export async function ajouterProduitAPI(produitObj) {
    
//     const reponse = await fetch(API_URL, {
//         method: "POST",

//         headers: {
//             "content-Type": "application/json"
//         },

//         body: JSON.stringify(produitObj)
//     });

//     if (!reponse.ok) {
//         throw new Error("Erreur lors de l' ajout du produit");
//     }

//     return await reponse.json();
// }



// avec axios



export async function ajouterProduitAPI(produitObj) {
    const reponse = await axios.post(API_URL, produitObj);
    return reponse.data;
}

// axios // récupérer produits api

export async function getAllProducts() {
    const reponse = await axios.get(API_URL);
    return reponse.data;
}

//récupérer un produit par son ID

export async function getProductByID(id) {
    const reponse = await axios.get(`${API_URL}/${id}`);
    return reponse.data;
}
