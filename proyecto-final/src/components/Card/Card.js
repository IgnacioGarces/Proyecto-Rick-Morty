import '../Card/Card.css';
import {useState} from 'react'
export default function Card({info}) {
    const [ocultar, setOcultar] = useState(true)
    const mostrar = ()=> {
        setOcultar(!ocultar)
    
    }

    
    return (
        <div className='card-container'>
        <div className='card'>
            <img src={info.image} alt={info.name}/>
            <h2 key={info.name}> {info.name} </h2>
            <button onClick={mostrar} >{ocultar=== true?'Now More..':'Close'}</button>
        </div>
        {ocultar===false?
        <div>
            <ul className='list-group'>
                <li className='list-group-item'>Character Status {info.status}</li>
                <li className='list-group-item'>Species {info.species}</li>
                <li className='list-group-item'>Origins {info.origin.name}</li>
                <li className='list-group-item'>Gender {info.gender}</li>
            </ul>
        </div>: ''}
        </div>
    )
}