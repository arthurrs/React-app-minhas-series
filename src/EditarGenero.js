import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const EditarGenero = ({ match } ) => {
    const [name, setName] = useState('')
    const [sucess, setSucess] = useState(false)

    useEffect(() => {
        axios
        .get('/api/genres/' + match.params.id)
        .then(res => {
            setName(res.data.name)
        })
    }, [match.params.id])

    console.log(match)

    const changeState = evt => {
        setName(evt.target.value)
    }

    const save = () => {
        axios.put('/api/genres/' + match.params.id, {
            name: name
        }).then(res => {
            setSucess(true)
        })
    }

    if(sucess) {
       return <Redirect to= '/generos' />
    }
    return (
        <div className='container'>
            <h1>Editar Genêro</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome do Genêro</label>
                    <input type='text' value={name} onChange={changeState} className='form-control' id='name'  placeholder='Nome do genêro' />
                </div>
                <button type='button' onClick={save} className='btn btn-primary'>Salvar</button>
            </form>

        </div>
    )
}


export default EditarGenero
