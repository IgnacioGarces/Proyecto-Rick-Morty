import '../Card/Card.css';

export default function Card({info}) {
    
    return (
        <div className='card-container'>
        <div className='card'>
            <img src={info.image} alt={info.name}/>
            <h2 key={info.name}> {info.name} </h2>
            <button>Now More..</button>
        </div>
        </div>
    )
}