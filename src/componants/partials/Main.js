import { useContext, useEffect } from 'react';
import { GlobalContext } from "./GlobalContext";
import { Carousel } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HouseIcon from '@mui/icons-material/House';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ChairIcon from '@mui/icons-material/Chair';
import AOS from 'aos';
import { Image } from 'antd';
// Import Swiper React components
// import { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

  export default function Main(){
    // const [controlledSwiper, setControlledSwiper] = useState(null);
    const { products, cityproperties, partenaires } = useContext(GlobalContext);
    useEffect(() => {
        AOS.init({
          duration: 1000, // Durée de l'animation en millisecondes
          once: true,     // Si true, l'animation ne se déclenche qu'une seule fois
        });
      }, []);
    return (
        <main>  
            <section className='about'>
                <div className='bloc-left' data-aos="fade-up" >
                    <h2 className='title sans'>Sen Courtier<span className="subtitle">Qui sommes-nous ?</span></h2>
                    <div className='container scollbar'>
                        <p>Sen courtier est une plateforme digitale innovante dédiée à la mise en relation des clients avec des professionnels de l'immobilier à travers tout le Sénégal. Que vous soyez à la recherche de votre future résidence, d'un bien commercial, ou d'un investissement rentable, Sen courtier simplifie votre quête en vous connectant directement avec les meilleures offres disponibles sur le marché.</p>
                        <p>Grâce à une interface conviviale et des outils de recherche avancés, notre plateforme vous permet de parcourir une large sélection de propriétés soigneusement sélectionnées pour répondre à vos besoins. De plus, Sen courtier vous accompagne à chaque étape, en vous fournissant des conseils personnalisés et un service client réactif pour garantir une expérience fluide et sécurisée.</p>
                        <p>Avec Sen courtier, l'immobilier au Sénégal devient plus accessible, plus transparent, et surtout, plus efficace. Faites confiance à notre expertise pour trouver le bien qui correspond parfaitement à vos attentes.</p>
                    </div>
                    {/* <button className='btn'>Lire plus</button> */}
                </div>
                <div className='bloc-right' data-aos="fade-up" >
                    <Image.PreviewGroup
                        preview={{
                        onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }} >
                        <Image src={`/${products[3].image}`} alt="Maison de luxe" />
                        <Image src={`/${products[4].image}`} alt="Maison de luxe" />
                    </Image.PreviewGroup>
                    {/* <img src="../images/about-banner-1.jpg" alt="Maison de luxe" />
                    <img src="../images/house-3.jpg" alt="Maison de luxe" /> */}
                </div>
            </section>
            <section className='advantages'>
                <h2 className="title" data-aos="fade-up" >Que recherchez-vous ? <span className="subtitle">Nous offrons un service complet à chaque étape.</span></h2>
                <div className='container' data-aos="fade-up" >
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
            <section className='featured' data-aos="fade-up" >
                <h2 className="title">Propriétés en vedette <span className="subtitle">Propriétés sélectionnées par notre équipe.</span></h2>
                <div className='container'>
                    <Carousel dots={true} arrows={true} autoplay={true} infinite={true} slidesToShow={3} draggable={true} >
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
            <section className='propertypercity hidden'>
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
            <section className='favoris' data-aos="fade-up" >
                <div className='bloc-left'>
                    <h2 className='title sans'>Appartement moderne à Dakar plateau<span className="subtitle">A louer</span></h2>
                    <h3>5000 FcFa / nuit</h3>
                    <p>Appartement moderne meublé et bien équipé de dernière génération. Profitez d'un luxe sur mesure à de bas prix.</p>
                    <button className='btn'>Réservez maintenant</button>
                </div>
                <div className='bloc-right'>
                    <img src="../images/hero-banner.png" alt="Maison de luxe" />
                </div>
            </section>
            <section className='news' data-aos="fade-up" >
            <h2 className='title'>Actualités<span className="subtitle">Nos dernières actualités.</span></h2>
            <div className='container'>
                <div className='article'>
                    <div className='article-img'>
                        <img src="../images/blog-1.jpg" alt="Maison de luxe" />
                    </div>
                    <div className='dscription'>
                        <h4 className='title'>Meilleure inspiration de design intérieure</h4>
                        <div className='details'>
                            <span className='date'><CalendarOutlined />02 Sept, 2024</span>
                            <a href="/actualites/1">Lire +</a>
                        </div>
                    </div>
                </div>
                <div className='article'>
                    <div className='article-img'>
                        <img src="../images/blog-2.jpg" alt="Maison de luxe" />
                    </div>
                    <div className='dscription'>
                        <h4 className='title'>Top 5 des meilleures immobiliers du Sénégal</h4>
                        <div className='details'>
                            <span className='date'><CalendarOutlined />02 Sept, 2024</span>
                            <a href="/actualites/2">Lire +</a>
                        </div>
                    </div>
                </div>
                <div className='article'>
                    <div className='article-img'>
                        <img src="../images/blog-3.jpg" alt="Maison de luxe" />
                    </div>
                    <div className='dscription'>
                        <h4 className='title'>Villa à vendre aux almadies</h4>
                        <div className='details'>
                            <span className='date'><CalendarOutlined />02 Sept, 2024</span>
                            <a href="/actualites/3">Lire +</a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <section className='partenaires' data-aos="fade-up" >
                <h2 className='title'>Nos partenaires<span className="subtitle">Nous travaillons uniquement avec les meilleures entreprises.</span></h2>
                <div className='container'>
                {/* <Swiper onSwiper={setControlledSwiper} autoplay={{delay: 1000}} modules={[Pagination, Navigation, Scrollbar, A11y, Controller]} slidesPerView={5}  navigation pagination={{ clickable: true }} spaceBetween={40} controller={{ control: controlledSwiper }} className="mySwiper"> */}
                    {partenaires.map((partenaire, key)=>{
                        return(
                        //    <SwiperSlide >
                            <a href={partenaire.link} id={key} className='logo-item'><img src={partenaire.image} alt={partenaire.name}/></a>
                            // {/* </SwiperSlide> */}
                        );
                    })}
                {/* </Swiper> */}
                </div>
            </section>
        </main>
    );
}