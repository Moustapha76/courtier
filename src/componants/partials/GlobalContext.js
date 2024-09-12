import React, { createContext } from "react";
// Créez un contexte
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const propertiesType = [
    { name:'Appartement' , value: 'Appartement' },
    { name: 'Chambre' , value: 'Chambre' },
    { name: 'Maison' , value: 'Maison' },
    { name: 'Studio' , value: 'Studio' }, 
    { name: 'Bureau' , value: 'Bureau' } 
  ];
  const products = [
    { id: 1, name: "Villa de luxe", price: 10000, image: "../images/house-1.jpg", statut: 'vente', bed: 4, room: 1, location: 'Dakar', type: 'Maison' },
    { id: 2, name: "Chambre à louer", price: 60000, image: "../images/house-2.jpg", statut: 'location', bed: 1, room: 1, location: 'Dakar', type: 'Chambre' },
    { id: 3, name: "Appartement moderne", price: 300000, image: "../images/house-3.jpg", statut: 'vente', bed: 3, room: 1, location: 'Kaolack', type: 'Appartement' },
    { id: 4, name: "Studio moderne", price: 140000, image: "../images/house-4.jpg", statut: 'vente', bed: 5, room: 5, location: 'Fatick', type: 'Studio' },
    { id: 5, name: "Bureau à vendre", price: 45000, image: "../images/house-5.jpg", statut: 'vente', bed: 7, room: 4, location: 'Kédougou', type: 'Bureau' },
    { id: 6, name: "Maison de luxe", price: 500000, image: "../images/house-6.jpg", statut: 'vente', bed: 2, room: 2, location: 'Kolda', type: 'Maison' },
    { id: 7, name: "Maison moderne avec piscine", price: 200000, image: "../images/house-7.jpg", statut: 'location', bed: 3, room: 2, location: 'Louga', type: 'Maison' },
    { id: 8, name: "Appartement haut standing", price: 500000, image: "../images/house-8.jpg", statut: 'location', bed: 2, room: 2, location: 'Thiès', type: 'Appartement' },
    { id: 9, name: "Très bel appartement", price: 550000, image: "../images/house-9.jpg", statut: 'location', bed: 5, room: 4, location: 'Tambacounda', type: 'Appartement' },
    { id: 10, name: "Beau chambre à louer", price: 10000, image: "../images/house-10.jpg", statut: 'location', bed: 2, room: 1, location: 'Matam', type: 'Chambre' },
  ],
  cityproperties = [
    { id: 1, name: "Dakar", properties: 1, image: "../images/villes/dakar.jpg"},
    { id: 2, name: "Kaolack", properties: 4, image: "../images/villes/kaolack.webp"},
    { id: 3, name: "Thiès", properties: 10, image: "../images/villes/thies.webp"},
    { id: 4, name: "Kaffrine", properties: 21, image: "../images/villes/Kaffrine.webp"},
    { id: 5, name: "Tambacounda", properties: 11, image: "../images/villes/tamba.webp"},
    { id: 6, name: "Kédougou", properties: 19, image: "../images/villes/kedougou.jpg"},
    { id: 7, name: "Ziguinchor", properties: 1, image: "../images/villes/casamance.webp"},
    { id: 8, name: "Matam", properties: 0, image: "../images/villes/matam.jpg"},
    { id: 9, name: "Saint-Louis", properties: 7, image: "../images/villes/ndar.webp"},
    { id: 10, name: "Mbour", properties: 3, image: "../images/villes/mbour.webp"},
    { id: 11, name: "Kolda", properties: 7, image: "../images/villes/kolda.webp"},
    { id: 12, name: "Fatick", properties: 20, image: "../images/villes/fatick.jpg"},
    { id: 13, name: "Louga", properties: 3, image: "../images/villes/louga.webp"},
    { id: 14, name: "Sédhiou", properties: 2,   image: "../images/villes/sedhiou.jpg"},
    { id: 14, name: "Gorée", properties: 10,   image: "../images/villes/goree.jpg"},
  ],
  
  partenaires = [
    {id: 1, name:'', link: '',image: '../images/partenaires/client-1.png'},
    {id: 2, name:'', link: '',image: '../images/partenaires/client-2.webp'},
    {id: 3, name:'', link: '',image: '../images/partenaires/client-3.webp'},
    {id: 4, name:'', link: '',image: '../images/partenaires/client-4.webp'},
    {id: 5, name:'', link: '',image: '../images/partenaires/client-5.webp'},
    {id: 6, name:'', link: '',image: '../images/partenaires/client-6.webp'},
    {id: 7, name:'', link: '',image: '../images/partenaires/client-7.webp'},
    {id: 8, name:'', link: '',image: '../images/partenaires/client-8.webp'},
  ]
  const newsData = [
    { id: 1, title: 'Actualité 1', content: 'Contenu de l’actualité 1', image: '../images/house-1.jpg', pub : '14/09/20024' },
    { id: 2, title: 'Actualité 2', content: 'Contenu de l’actualité 2', image: '../images/house-2.jpg', pub : '14/09/20024' },
    { id: 3, title: 'Actualité 3', content: 'Contenu de l’actualité 3', image: '../images/house-3.jpg', pub : '14/09/20024' },
    { id: 4, title: 'Actualité 4', content: 'Contenu de l’actualité 4', image: '../images/house-4.jpg', pub : '14/09/20024' },
    { id: 5, title: 'Actualité 5', content: 'Contenu de l’actualité 5', image: '../images/house-5.jpg', pub : '14/09/20024' },
    { id: 6, title: 'Actualité 6', content: 'Contenu de l’actualité 6', image: '../images/house-6.jpg', pub : '14/09/20024' },
    { id: 7, title: 'Actualité 7', content: 'Contenu de l’actualité 7', image: '../images/house-7.jpg', pub : '14/09/20024' },
    { id: 8, title: 'Actualité 8', content: 'Contenu de l’actualité 8', image: '../images/house-8.jpg', pub : '14/09/20024' },
    { id: 9, title: 'Actualité 9', content: 'Contenu de l’actualité 9', image: '../images/house-9.jpg', pub : '14/09/20024' },
    { id: 10, title: 'Actualité 10', content: 'Contenu de l’actualité 10', image: '../images/house-10.jpg', pub : '14/09/20024' },
    // Ajoutez autant d'actualités que nécessaire
  ];
    // Détermine la propriété qui a le prix minimal
    const prices = [];
    products.map((property, id)=>{
      return prices[id] = property.price;
    })
    function formatNumber(number){return number.toLocaleString('fr-FR')}
  return (
    <GlobalContext.Provider value={{ products, cityproperties, partenaires, propertiesType, prices, formatNumber, newsData }}>
      {children}
    </GlobalContext.Provider>
  );
};
