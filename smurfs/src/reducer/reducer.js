import axios from 'axios';
import React, { useState, useEffect } from "react";

axios.get('http://localhost:3333/smurfs')
  .then((response) => {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

