import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { UserContext } from '../src/contexts/context'
import axios from "axios";


class Smurfs extends React.Component {
    constructor() {
        super();
        this.state = {
            smurfData: []

        };
    }
    componentDidMount() {
        fetch('http://localhost:3333/smurfs')
            .then(res => console.log(res.json()))
            .then(resTwo => {
                this.setState({
                    ...this.state, smurfData: resTwo

                })
                console.log(this.state.smurfData)
            })

            .catch(err => { console.log("there was an error", err) })
            
}


    render() {
        return (
            <div>
                {this.state.playerData.map(i => {
                    return (<App
                        name={i.name}
                        country={i.height}
                        searches={i.age}
                    />)
                })}
            </div>

        )


    }

}

ReactDOM.render(<App />, document.getElementById("root"));





