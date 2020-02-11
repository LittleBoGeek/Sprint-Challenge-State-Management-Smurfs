import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component  {
    constructor(props)
 { super(props)
    this.state = {
        name: '',
        age: '',
        height:''
    }

 }  
 changeHandler = (e) => {
     this.setState({[e.target.name]: e.target.value})
 } 
 submitHandler = e => {
     e.preventDefault()
     console.log(this.state)
     axios.post('http://localhost:3333/smurfs',this.state)
     .then(response => {
         console.log(response)
     })
     .catch(error => {
         console.log(error)
     })
 }
 
 render(){
     const {name, age, height} = this.state
    return (
        <div>
            <form onSubmit={this.submitHandler}>
                <div><h3> name:</h3>
                <input type="text" name="name" value={name} onChange={this.changeHandler}/>
                </div>
                <div>
                    <h3> age:</h3>
                <br/>
                <input type="text" name="age"  value={age} onChange={this.changeHandler}/>
                </div>
                <div>
                <h3> height:</h3>
                <br/>
                <input type="text" name="height" value={height} onChange={this.changeHandler}/>
                </div>
                <br/>
           <button type="submit">Submit</button>
         

            </form>
        </div>
    )
    }
}

export default Form