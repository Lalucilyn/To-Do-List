import React from 'react';
import '../css/postit.css'
const PostIt = (props) => {

	return (<div style={props.color} className="postIt">
				<i className="fa fa-trash" aria-hidden="true" onClick={props.borrar}></i>
				<h3>{props.task}</h3>


			</div>);
}

export default PostIt