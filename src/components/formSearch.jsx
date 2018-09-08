import React from 'react';

const Form = () => {
	console.log('Form - Renderizado');
	render(){
		return (
			<div id="buttons">
			<label> <input id="query" value='' type="text" placeholder="Buscar" />
			<button id="search-button" disabled onclick="search()">Buscar</button>
			</label>
			</div>
			);
	}
}

export default Form;