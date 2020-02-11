import React, { useContext, useEffect , useState } from "react";

import { UserContext } from '../contexts/context'

const Display  = () => {
     const user = useContext(UserContext);
console.log(user)

 return (
     <div>
  {user.map(smurf => <h1> name: {smurf.name}  height: {smurf.height}  age: {smurf.age} </h1> )}
     </div>
 )
}


export default Display

// var result = arr.map(person => ({ value: person.id, text: person.name }));
