import { Select, Button } from 'antd';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
export default function SearchBar(){
    const formStyle = {
        height: 45,
        letterSpacing: 1
    }
    const villes = [
        { value: 'Dakar', label: 'Dakar' },
        { value: 'Diourbel', label: 'Diourbel' },
        { value: 'Fatick', label: 'Fatick' },
        { value: 'Kaffrine', label: 'Kaffrine' },
        { value: 'Kaolack', label: 'Kaolack' },
        { value: 'Kédougou', label: 'Kédougou' },
        { value: 'Kolda', label: 'Kolda' },
        { value: 'Louga', label: 'Louga' },
        { value: 'Matam', label: 'Matam' },
        { value: 'Saint-Louis', label: 'Saint-Louis' },
        { value: 'Sédhiou', label: 'Sédhiou' },
        { value: 'Tambacounda', label: 'Tambacounda' },
        { value: 'Thiès', label: 'Thiès' },
        { value: 'Ziguinchor', label: 'Ziguinchor' }
    ],
    properties = [
        { value: 'Maison', label: 'Maison' },
        { value: 'Appartement', label: 'Appartement'},
        { value: 'Chambre', label: 'Chambre'},
        { value: 'Bureau', label: 'Bureau'},
        { value: 'Studio', label: 'Studio'},
    ],
    rooms = [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 },
        { value: 4, label: 4 },
        { value: 5, label: 5 },
    ],
    statuts = [
        { value: 'vente', label: 'A vendre' },
        { value: 'location', label: 'A louer' }
    ]
    const handleChange = (value)=>{
        console(value);
    }
    
    return(
        <form className='searchForm'>
            <Select style={formStyle} onChange={handleChange} name='ville' defaultValue="Location" options={[...villes]}/>
            <Select style={formStyle} onChange={handleChange} name='property' defaultValue="Type de propriétés" options={[...properties]}/>
            <Select style={formStyle} onChange={handleChange} name='room' defaultValue="Chambres" options={[...rooms]}/>
            <Select style={formStyle} onChange={handleChange} name='statut' defaultValue="Statut" options={[...statuts]}/>
            <Button style={formStyle} type="primary">Rechercher</Button>
        </form>
    )
}