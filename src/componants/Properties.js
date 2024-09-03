import {useState, useContext} from 'react';
import { GlobalContext } from '../componants/partials/GlobalContext';
import { Slider } from 'antd';
import { Radio } from 'antd';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
export default function Properties(){
    const { propertiesType, products } = useContext(GlobalContext);
    const [propertyValue, setPropertyValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setPropertyValue(e.target.value);
    };
    const [stepsCount, setStepsCount] = useState(5);
    return(
       <main>
         <section className="properties">
            <div className="filter">
                <div className="part1">
                    <span>Propriétés</span>
                    <Radio.Group onChange={onChange} defaultValue={propertyValue}>
                        {propertiesType.map((property, key)=>{
                            return(<Radio id={key} value={property.value}>{property.name}</Radio>)
                        })}
                    </Radio.Group>
                </div>
                <div className="part2">
                    <span>Statut</span>
                    <ul>
                        <li><a href="/">Vente</a></li>
                        <li><a href="/">Location</a></li>
                    </ul>
                </div>
                <div className="Budget">
                    <span>Buget</span>
                    <Slider min={1} max={20} value={stepsCount} onChange={setStepsCount} />
                </div>
                <a href="/" className="searchBtn">Rechercher</a>
            </div>
            <div className="list-properties featured">
                <div className='container'>
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
                </div>
            </div>
        </section>
       </main>
    )
}