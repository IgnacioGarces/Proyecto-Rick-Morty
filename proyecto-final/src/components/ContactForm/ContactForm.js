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
            <h2>Contact</h2>

            <div className="form-container d-flex flex-column flex-wrap">
                <h3>Leave us your information so we can contact you</h3>
                <form>
                    <div className='d-flex flex-row align-items-center justify-content-around'>
                        <div className='d-flex flex-column align-items-center w-50 '>
                        <label htmlFor='Name'>Name</label>
                        <input type='text' value={inputName} onChange={changeInputName}></input>
                        </div>
                        <div className='d-flex flex-column align-items-center w-50 ' >
                        <label htmlFor='Email'>Email</label>
                        <input type='text'></input>
                        </div>
                    </div>
                    
                    <div className='message d-flex flex-column align-items-center '>
                        <label htmlFor='Message'>Message</label>
                        <input type='text' className='message-box'></input>
                    </div>
                    <div className='button-container'>
                    <button className='button-signIn'>Sign in</button>
                    </div>
                </form>
            </div>
        </section>
    )
}