import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


const InfoSerie = ( { match } ) => {
    const [name, setName] = useState('')
    const [sucess, setSucess] = useState(false)

    const [data , setData] = useState({})

    useEffect(() => {
        axios
        .get('/api/series/' + match.params.id)
        .then(res => {
            setData(res.data)
        })
    }, [match.params.id])

    const changeState = evt => {
        setName(evt.target.value)
    }

    

    const save = () => {
        axios.post('/api/series', {
            name: name
        }).then(res => {
            setSucess(true)
        })
    }

    if(sucess) {
       return <Redirect to= '/series' />
    }
    return (
        <div className='container'>
            <h1>Nova Série</h1>
            <pre>{JSON.stringify(data)}</pre>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' value={name} onChange={changeState} className='form-control' id='name'  placeholder='Nome da série' />
                </div>
                <button type='button' onClick={save} className='btn btn-primary'>Adicionar Série</button>
            </form>

        </div>
    )
}


export default InfoSerie