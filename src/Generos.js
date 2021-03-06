import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { isTSEnumMember } from '@babel/types';

const Generos = () => {
	const [data, setData] = useState([])
	useEffect(() => {
		axios
			.get('/api/genres')
			.then(res => {
				setData(res.data.data)
			})
	}, [])

	const renderizaLinha = record => {
		return (
			<tr key={record.id}>
				<th scope='row'>{record.id}</th>
				<td>{record.name}</td>
				<td>
					<button className='btn btn-danger' onClick={() => deleteGenero(record.id)}>Remover</button>
					<Link className='btn btn-secondary ml-3' to={'/generos/' + record.id}>Editar</Link>
				</td>
			</tr>
		)
	}

	const deleteGenero = id => {
		axios.delete('api/genres/' + id).then(res => {
			const filtrado = data.filter(item => item.id !== id)
			setData(filtrado)
		})
	}


	if (data.length === 0) {
		return (
			<div className='container'>
				<h1>Genêros</h1>
				<Link className='btn btn-primary mb-3' to='generos/novo'>Novo Genêro</Link> <br></br>
				<div className='alert alert-warning' role='alert'>
					Você não possui nenhum genêro criado
				</div>
			</div>
		)
	}

	return (
		<div className='container'>
			<h1>Genêros</h1>
			<Link className='btn btn-primary mb-3' to='generos/novo'>Novo Genêro</Link> <br></br>
			<table className='table table-dark'>
				<thead>
					<tr>
						<th scope='col'>ID</th>
						<th scope='col'>Nome</th>
						<th scope='col'>Ações</th>
					</tr>
				</thead>
				<tbody>
					{data.map(renderizaLinha)}
				</tbody>
			</table>
		</div>
	)
}

export default Generos