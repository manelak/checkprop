import logo from './logo.svg';
import './App.css';

import React from 'react';
import User from './Profile/profile'
import './App.css'
import propTypes  from 'prop-types'
function App(){
  const HandleName=(name)=>alert(name);
  return(

    < div className="App">
    <header className="App-header">
    <div className='imm'>
     <User FullName=
     "Manel Akrimi"
     Profession="Web Developer" Bio= "Hello! Im FullStack JS,based on Sidi Bouzid.I had my Certification from GomyCode.I have found enjoyment and creativity during my period of Learning Developement. " HandleName={HandleName}>
     <img src={"/Manel.jpg"} width={220} height={210}></img>

    
</User>
</div>
</header>
</div>
 

  )
};

  User.propTypes={
    FullName:propTypes.string.isRequired,
    Bio:propTypes.string.isRequired,
    Profession:propTypes.string.isRequired,
  } ;




export default App;
