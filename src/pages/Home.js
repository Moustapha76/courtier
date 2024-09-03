import Header from '../componants/partials/Header';
import Main from '../componants/partials/Main';
import Footer from '../componants/partials/Footer';
import { useEffect } from "react";

export default function Home(){
    const pageName = 'home', pageTitle = 'Sama Courtier', pageSubTitle = 'Plateforme N°1 des immobiliers';
    useEffect(()=>{
    },[]);
    return(
        <div className="homepage">
            <Header page={pageName} title={pageTitle} subtitle={pageSubTitle}/>
            <Main/>
            <Footer/>
        </div>
    );
}