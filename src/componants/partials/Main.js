import { useContext } from 'react';
import { GlobalContext } from "./GlobalContext";
import { Carousel } from 'antd';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HouseIcon from '@mui/icons-material/House';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ChairIcon from '@mui/icons-material/Chair';
import { Button } from 'antd';
  export default function Main(){
    const { products, cityproperties, societies } = useContext(GlobalContext);
    return (
        <main>  
            <section className='featured'>
                <h2 className="title">Propriétés en vedette <span className="subtitle">Propriétés sélectionnées par notre équipe.</span></h2>
                <div className='container'>
                    <Carousel dots={true} arrows={true} autoplay={true} infinite={true} slidesToShow={4} draggable={true}>
                        {products.map((property, key)=>{
                            return(
                                <a href='/' className='card' id={key}>
                                    <span className='statut'>{property.statut}</span>
                                    <img src={property.image} alt={property.name} />
                                    <div className='infos'>
                                        <span className='prix'>{property.price} FcFA</span>
                                        <span className='titre'>{property.name}</span>
                                        <span className='location'>{property.location}</span>
                                        <div className='caracteristiques'>
                                            <span><strong><MeetingRoomIcon/></strong> Chambres : {property.room}</span>
                                            <span><strong><SingleBedIcon/></strong> Lits : {property.bed}</span>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                    </Carousel>
                </div>
            </section>
            <section className='about'>
                <div className='bloc-left'>
                    <h2 className='title'>Sen Courtier<span className="subtitle">Qui sommes-nous ?</span></h2>
                    <div className='container'>
                        <p>Sen courtier est une plateforme digitale innovante dédiée à la mise en relation des clients avec des professionnels de l'immobilier à travers tout le Sénégal. Que vous soyez à la recherche de votre future résidence, d'un bien commercial, ou d'un investissement rentable, Sen courtier simplifie votre quête en vous connectant directement avec les meilleures offres disponibles sur le marché.</p>
                        <p>Grâce à une interface conviviale et des outils de recherche avancés, notre plateforme vous permet de parcourir une large sélection de propriétés soigneusement sélectionnées pour répondre à vos besoins. De plus, Sen courtier vous accompagne à chaque étape, en vous fournissant des conseils personnalisés et un service client réactif pour garantir une expérience fluide et sécurisée.</p>
                        <p>Avec Sen courtier, l'immobilier au Sénégal devient plus accessible, plus transparent, et surtout, plus efficace. Faites confiance à notre expertise pour trouver le bien qui correspond parfaitement à vos attentes.</p>
                    </div>
                    <Button type='primary' style={{height: 50, fontSize: 18, letterSpacing: 1}}>Contactez-nous</Button>
                </div>
                <div className='bloc-right'>
                    <img src="../images/about-banner-1.jpg" alt="Maison de luxe" />
                </div>
            </section>
            <section className='advantages'>
                <h2 className="title">Que recherchez-vous ? <span className="subtitle">Nous offrons un service complet à chaque étape.</span></h2>
                <div className='container'>
                    <div className='item'>
                        <span className='icone'><LocationCityIcon/></span>
                        <span>Villa moderne</span>
                        <p>Découvrez les meilleurs villas sénégalais.</p>
                    </div>
                    <div className='item'>
                        <span className='icone'><HouseIcon/></span>
                        <span>Maison familiale</span>
                        <p>Envie de déménager vers une nouvelle maison?</p>
                    </div>
                    <div className='item'>
                        <span className='icone'><HomeWorkIcon/></span>
                        <span>Appartement de luxe</span>
                        <p>Des appartements de luxe à bon prix.</p>
                    </div>
                    <div className='item'>
                        <span className='icone'><ChairIcon/></span>
                        <span>Studio moderne</span>
                        <p>Nos Studios sont de hautes qualités.</p>
                    </div>
                </div>
            </section>
            <section className='propertypercity'>
                <h2 className='title'>Propriétés par villes<span className="subtitle">Trouvez des propriétés dans ces villes.</span></h2>
                <div className='container'>
                    {cityproperties.map((city, key)=>{
                        return(
                            <a href='/' className='city-card'>
                                <div className='city-card-img'><img src={city.image} alt={city.name} /></div>
                                <div className='city-card-info'>
                                    <span>{city.name}</span>
                                    <span><strong>{city.properties}</strong> Propriétés</span>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </section>
            <section className='favoris'>
                <div className='jumbotron'>
                    <h2 className='title'>Appartement moderne<span className="subtitle">5000 FcFa / nuit</span></h2>
                    <p>Appartement moderne meublé et bien équipé de dernière génération. Profitez d'un luxe sur mesure à de bas prix.</p>
                    <Button type='primary' style={{height: 50}}>Réservez maintenant</Button>
                </div>
            </section>
            <section className='societies'>
                <h2 className='title'>Les immobiliers<span className="subtitle">Nous travaillons uniquement avec les meilleures entreprises.</span></h2>
                <div className='container'>
                    {societies.map((society, key)=>{
                        return(
                            <a href={society.link} id={key} className='logo-item'><img src={society.image} alt={society.name}/></a>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}