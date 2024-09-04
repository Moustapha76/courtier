import {useState, useContext, useEffect} from 'react';
import { GlobalContext } from '../componants/partials/GlobalContext';
import { Slider } from 'antd';
import { Radio } from 'antd';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import SearchImg from '../images/search.gif';

export default function Properties(){
    const { propertiesType, products, prices, formatNumber } = useContext(GlobalContext);
    const [propertyValue, setPropertyValue] = useState('tout');
    const [searchStatut, setSearchStatut] = useState('tout');
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setPropertyValue(e.target.value);
    };
    const onChangeStatut = (e) => {
        console.log('radio checked', e.target.value);
        setSearchStatut(e.target.value);
    };
    const [stepsCount, setStepsCount] = useState(1000);
    const [FilteredProperties, setFilteredProperties] = useState([...products]);
    const leng = prices.length-1;
    prices.sort(function(a, b){return a - b});;
    let minVal = parseInt(prices[0]);
    let maxVal = parseInt(prices[leng]);
    const tab = [...products];
    function searchProperty(budget){
        setFilteredProperties(tab.filter((property) =>{
            if(searchStatut === propertyValue){ return (property.price >= budget)}
            else{
                if(propertyValue !== 'tout' && searchStatut === 'tout'){ return (property.price >= budget && property.type === propertyValue)}
                else if(searchStatut !== 'tout' && propertyValue === 'tout'){ return (property.price >= budget && property.statut === searchStatut)}
                else{return(property.price >= budget && property.type === propertyValue && property.statut === searchStatut)}
            }
        }
        ))
    }
    useEffect(()=>{
        searchProperty(minVal);
    },[])
    return(
       <main>
         <section className="properties">
            <div className="filter">
                <div className="part1">
                    <span>Propriétés</span>
                    <Radio.Group onChange={onChange} defaultValue={propertyValue}>
                        <Radio value='tout'>Tout</Radio>
                        {propertiesType.map((property, key)=>{
                            return(<Radio id={key} value={property.value}>{property.name}</Radio>)
                        })}
                    </Radio.Group>
                </div>
                <div className="part2">
                    <span>Statut</span>
                    <Radio.Group onChange={onChangeStatut} defaultValue={searchStatut}>
                        <Radio value='tout'>Tout</Radio>
                        <Radio value='vente'>Vente</Radio>
                        <Radio value='location'>Location</Radio>
                    </Radio.Group>
                </div>
                <div className="Budget">
                    <span>Buget</span>
                    <Slider min={minVal} max={maxVal} value={stepsCount}  onChange={setStepsCount} />
                    <div className='minmax'>
                        <span className='minVal'>{formatNumber(minVal)}</span>
                        <span className='maxVal'>{formatNumber(maxVal)}</span>
                    </div>
                    <div className='myBudget'>Mon budget : <strong> {formatNumber(stepsCount)} FcFA </strong></div>
                </div>
                <button className="searchBtn" onClick={()=>searchProperty(stepsCount)}>Rechercher</button>
            </div>
            <div className="list-properties">
                {FilteredProperties.length > 1 && <span className='searchResult'><strong>{FilteredProperties.length}</strong> resultats trouvés pour votre recherche</span>}
                {FilteredProperties.length === 1 && <span className='searchResult'><strong>{FilteredProperties.length}</strong> resultat trouvé pour votre recherche</span>}
                {FilteredProperties.length === 0 && 
                <><span className='searchResult'>Aucun resultat trouvé pour votre recherche</span><br/>
                <img src={SearchImg}/>
                </>
                }
                <div className='container'>
                        {FilteredProperties.map((property, key)=>{
                            return(
                                <a href='/' className='card' id={key}>
                                    <span className='statut'>{property.statut}</span>
                                    <img src={property.image} alt={property.name} />
                                    <div className='infos'>
                                        <span className='prix'>{formatNumber(property.price)} FcFA</span>
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