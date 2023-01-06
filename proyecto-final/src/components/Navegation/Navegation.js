import '../Navegation/Navegation.css'
export default function Navegation() {
    
    return(
        <header>
            <nav>
                <div className='container'>
                    <a className='title'>Rick & Morty</a>
                    <ul className='navbar-nav nav-pills'>
                       <li className='nav-item'><a class="title">Home</a></li>
                       <li className='nav-item'><a class="title">Characters</a></li>
                       <li className='nav-item'><a class="title">Contact</a></li>
                       
                    </ul>
                </div>
            </nav>
        </header>
    )
}