import './ContactForm.css'

export default function ContactForm() {
    
    return(
        <section className='contact-container d-flex flex-column align-items-center'>
            <h2>Contact</h2>

            <div className="form-container d-flex flex-column flex-wrap">
                <h3>Leave us your information so we can contact you</h3>
                <form>
                    <div className='d-flex flex-row align-items-center justify-content-around'>
                        <div className='w-50'>
                        <label htmlFor='Name'>Name</label>
                        <input type='text'></input>
                        </div>
                        <div className='w-50 m-4' >
                        <label htmlFor='Email'>Email</label>
                        <input type='text'></input>
                        </div>
                    </div>
                    
                    <div className='message d-flex flex-column align-items-center '>
                        <label htmlFor='Message'>Message</label>
                        <input type='text' className='message-box'></input>
                    </div>
                    <button>Sign in</button>
                </form>
            </div>
        </section>
    )
}