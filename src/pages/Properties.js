import Header from '../componants/partials/Header';
import Footer from '../componants/partials/Footer';
import { useEffect } from "react";
import Properties from '../componants/Properties';

export default function Home(){
    const pageName = 'home', pageTitle = 'Sama Courtier', pageSubTitle = 'Plateforme N°1 des immobiliers';
    useEffect(()=>{
    },[]);
    return(
        <div className="properties">
            <Header page={pageName} title={pageTitle} subtitle={pageSubTitle}/>
            <Properties/>
            <Footer/>
        </div>
    );
}