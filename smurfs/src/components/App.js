//import React, { Component } from "react";
import React, { useContext, useEffect , useState } from "react";
import { UserContext } from '../contexts/context'
import axios from 'axios'
import "./App.css";
import Display from '../components/Display'
import Form from '../components/Form'
const App = () => {
  const [data, setData] = useState([]);


useEffect(() => {
  axios.get('http://localhost:3333/smurfs')
  .then(res => setData(res.data))
  // .then(resTwo => {
  //    setData(resTwo)
  //     console.log(resTwo)
  // } )

  .catch(err => { console.log("there was an error", err) })
  
},[])

  
    return (
      <UserContext.Provider value={data}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
         <Display />
         <Form  />
      </div>
      </UserContext.Provider>
    );
  

    }
export default App;


    