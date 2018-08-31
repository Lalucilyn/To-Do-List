import React, { Component } from 'react';
import './App.css';
import Heading from './components/header';
import MyInput from './components/form'
import PostIt from './components/postit'
import "./css/animate.css"

class App extends Component {
  state = {
    notas:[],
    notaNueva:""
  };

  //Saves the value of the input when it changes
  handleTaskInput = (event) => {
    event.preventDefault();
    this.setState({notaNueva:event.target.value});
  }

  //Creates a new post-it with the current input value
  handleButtonInput = (event) => {
    if(this.state.notaNueva != ""){
      let nuevasNotas = this.state.notas;
      const colors = ["#73cac4","#e3e546", "#f2788f", "#f69dbb", "#fbad4b"];
      let randomColor = Math.floor(Math.random() * colors.length);
      let color = colors[randomColor]
      
      let style = {
        backgroundColor:color
      }
  
      var nuevaNota = {nota:this.state.notaNueva, estilo:style}
      nuevasNotas.push(nuevaNota)
      this.setState({notas:nuevasNotas});
      this.setState({notaNueva:""})
      event.preventDefault();
    }else{
      event.preventDefault();
    }
  }

  //Deletes a postit when the trashcan is clicked
  handleDeleteInput = (event) => {
    let target = event.currentTarget.parentNode;
    target.remove()
  }

  render() {
    const tasks = this.state.notas;
    const that = this
    
    return (
      <div className="App">
        <Heading/>
        <MyInput add={this.handleTaskInput} submit={this.handleButtonInput} valor={this.state.notaNueva}/>
        <div className="board">
          {tasks.map(function(name, index){return <PostIt key={name+index} task={name.nota} color={name.estilo} borrar={that.handleDeleteInput}/>})}
        </div>
      </div>
    );
  }
}

export default App;
