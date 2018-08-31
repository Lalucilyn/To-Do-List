import React from 'react';
import '../css/form.css'
const MyInput = (props) => {
	return (<form>
				<input type="text" onChange={props.add} value={props.valor} maxlength="45"/>
				<button onClick={props.submit}>agregar</button>
			</form>);
}

export default MyInput