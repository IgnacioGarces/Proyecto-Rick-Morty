import '../SectionCards/SectionCards.css'
import Card from "../Card/Card";
import {useState} from 'react';


export default function SectionCards(){

let [datos, setDatos] = useState([])
    
    const traerInfo = async ()=>{
        let info= await fetch('https://rickandmortyapi.com/api/character')
                .then(respuesta => respuesta.json())
                .catch(error => console.log(error))
        return info;
    }
    
    const mostrarInfo = async ()=>{
        let dato = await traerInfo()
        let infoPersonajes= dato.results
        console.log(infoPersonajes)
        setDatos(infoPersonajes)
    }
        
    return(
        <div>
            <button onClick={mostrarInfo}>click</button>
            <section className='sectionCards'>
                {datos.map((dato) => {
                    return(
                        <Card key={dato.id} info={dato}/>
                    )
                })}
            </section>
        </div>
    )
}