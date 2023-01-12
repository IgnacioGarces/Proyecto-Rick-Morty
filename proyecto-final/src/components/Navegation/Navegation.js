import '../Navegation/Navegation.css'
export default function Navegation() {
    
    return(
        <header>
            <nav className='navbar navbar-expand-lg  w-100'>
                <div className='container'>
                    <a className='name'>Rick & Morty</a>
                    <ul className='d-flex flex-row navbar-nav nav-pills'>
                       <li className='nav-item'><a className="btn btn-primary title">Home</a></li>
                       <li className='nav-item'><a className="btn btn-primary title">Characters</a></li>
                       <li className='nav-item'><a className="btn btn-primary title">Contact</a></li>
                       
                    </ul>
                </div>
            </nav>
        </header>
    )
}