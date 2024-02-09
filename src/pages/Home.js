import React from 'react'; 
import { Card } from 'primereact/card';
import '../assets/Home.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import myphoto from '../assets/img/landing.jpg';
import Menu from '../component/Menu';
import Produit from './Produit';

export default function Home() {
    return (
        <div className="card">
            <div className='menuse'>
                <Menu></Menu>
            </div>
            <div className='entete'>
                <Card className='image'>
                    <img src={myphoto} className='photo'></img>                    
                </Card>
                <Card  className='texte'>
                    <h2>Votre Prochaine Aventure Automobile Commence Ici!</h2>
                        <p className="m-0">
                            Bienvenue sur <span className='logo'>Occasion'Auto</span>, votre destination incontournable pour l'achat de voitures d'occasion de qualité. Nous sommes passionnés par les véhicules qui racontent des histoires et nous sommes déterminés à vous aider à trouver la voiture d'occasion parfaite qui s'aligne sur vos besoins, votre style de vie et votre budget.
                        </p>
                </Card>
            </div>
            <Card title="Aperçu de nos produits">
                <Produit></Produit>
            </Card>
        </div>
    )
}
        
        
        