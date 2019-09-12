import React, { useState } from 'react';


const NovoGenero = () => {
    const [name, setname] = useState('')

    const onChange = evt => {
        console.log(evt)
    }

    return (
        <div className='container'>
            <h1>Novo Genêro</h1>
            <form>
                <div className='row'>
                    <div className='col'>
                        <label htmlFor='name'>Nome</label>
                        <input type='text' value={name} onChange={onChange} className='form-control' id='name'  placeholder='Genêro' />
                    </div>
                </div> <br />
                <button type="button" className="btn btn-primary">Adicionar Genêro</button>
            </form>
            
        </div>
    )
}
            
            
export default NovoGenero