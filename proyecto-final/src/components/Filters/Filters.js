import '../Filters/Filters.css'
export default function Filters() {
    
    return (
        <section className='row section-filters py-5'>
            <h2>Filters</h2>
            <div className='filters d-flex justify-content-between flex-wrap'>
                <div className='form-check form-switch px-5 py-2'>
                    <input className='form-check-input' type='checkbox' role='switch' id='Alive'></input>
                    <label className='form-check-label' for='Alive'>Characters Alive</label>
                </div>
                <div className='form-check form-switch px-5 py-2'>
                    <input className='form-check-input' type='checkbox' role='switch' id='Dead'></input>
                    <label className='form-check-label' for='Dead'>Characters Dead</label>
                </div>
                <div className='form-check form-switch px-5 py-2'>
                    <input className='form-check-input' type='checkbox' role='switch' id='Male'></input>
                    <label className='form-check-label' for='Male'>Male</label>
                </div>
                <div className='form-check form-switch px-5 py-2'>
                    <input className='form-check-input' type='checkbox' role='switch' id='Female'></input>
                    <label className='form-check-label' for='Female'>Female</label>
                </div>
                <div className='form-check form-switch px-5 py-2'>
                    <input className='form-check-input' type='checkbox' role='switch' id='Unknown'></input>
                    <label className='form-check-label' for='Unknown'>Origin Unknown</label>
                </div>
            </div>
        </section>
    )
}