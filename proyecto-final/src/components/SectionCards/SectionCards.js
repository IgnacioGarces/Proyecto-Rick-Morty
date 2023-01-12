import '../SectionCards/SectionCards.css'
import Card from "../Card/Card";
import {useState} from 'react';


export default function SectionCards({datos}){


    return(
        <div>
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