import '../Navegation/Navegation.css'
import { Link } from 'react-router-dom'
export default function Navegation() {
    
    return(
        <header>
            <nav className='navbar navbar-expand-lg w-100 '>
                <div className='container'>
                    <a className='name'>Rick & Morty</a>
                    <ul className='d-flex flex-row navbar-nav nav-pills'>
                       <li className='nav-item '><Link className='btn btn-primary title' to='/'>Home</Link></li>
                       <li className='nav-item '><Link className='btn btn-primary title' to='/characters'>Characters</Link></li>
                       <li className='nav-item '><Link className='btn btn-primary title' to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}