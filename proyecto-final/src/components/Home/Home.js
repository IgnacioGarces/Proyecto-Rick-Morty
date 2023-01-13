import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
    return(
        <div className='main-container'>
            <header className='main'>
                <h1>Proyecto - Rick & Morty</h1>

                <div className='bt-container'>
                <Link to='/characters'>
                <button className='home-bt'>Characters</button>
                </Link>    
                <Link to='/contact'>
                <button className='home-bt'>Contact</button>
                </Link>    
                </div>
            </header>

        </div>
    )
}