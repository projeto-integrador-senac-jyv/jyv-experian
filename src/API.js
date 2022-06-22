import React from 'react';

const API = () => {
    const axios = require('axios').default;

    const [usuarios, alterausuarios]=React.useState([])
    React.useEffect(()=>{

        axios.get('http://localhost:3001')
  .then(function (response) {
    const dados = response.data
    alterausuarios(dados)
  })
  .catch(function (error) {
    
    console.error(error);
  })

    },[])

  
  
    return ( <div><h1>{usuarios==0?"Loading...": usuarios[0].nome}</h1>
    
    
    
     </div>
    
    
    
    );
}
 
export default API;
