import './Home.css'

export default function Home() {
    return(
        <div className='main-container'>
            <header className='main'>
                <h1>Proyecto - Rick & Morty</h1>

                <div className='bt-container'>
                <button className='home-bt'>Characters</button>
                <button className='home-bt'>Contact</button>
                </div>
            </header>

        </div>
    )
}