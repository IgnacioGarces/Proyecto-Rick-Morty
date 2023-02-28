import './ContactForm.css'
import {useState} from 'react'

export default function ContactForm() {
   const [inputName, setInputName] = useState('');

    const changeInputName = (e) => {
        setInputName(e.target.value)
        console.log(inputName)
    }
    return(
        <section className='contact-container d-flex flex-column align-items-center w-100'>

            <div className="form-container d-flex flex-column flex-wrap">
                <h2 className='contact-title'>Contact</h2>
                <h3>Leave us your information so we can contact you</h3>

                <form className='g-3 p-4 d-flex flex-column flex-wrap align-items-center justify-content-evenly'>
                    <div className='d-flex flex-row  '>
                        <div className='d-flex flex-column align-items-start w-50 '>
                        <label htmlFor='Name'>Name</label>
                        <input type='text' value={inputName} onChange={changeInputName}></input>
                        </div>
                        <div className='d-flex flex-column align-items-start w-50' >
                        <label htmlFor='Email'>Email</label>
                        <input type='text'></input>
                        </div>
                    </div>
                    
                    <div className='message d-flex flex-column align-items-center '>
                        <label htmlFor='Message'>Message</label>
                        <input type='text' className='message-box'></input>
                    </div>
                    <div className='button-container d-flex flex-row align-items-start '>
                    <button className='button-signIn btn botones colorW'>Sign in</button>
                    </div>
                </form>
            </div>
        </section>
    )
}