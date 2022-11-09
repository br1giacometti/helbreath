
import './App.css';

import Boton from './componentes/Boton';
import Arma from './componentes/Arma';
import Pantalla from './componentes/Pantalla';
import ChanceArma from './componentes/chance';
import BotonClear from './componentes/BotonClear';
import NombreArma from './componentes/nombreArma';
import Logo from './componentes/Logo';
import React from "react";



//Hook
import {useState} from 'react';
import {evaluate, prodDependencies} from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('');
  const [count, setCount] = useState(1);
  const [chance, setChance] = useState('');
  const [textoo, setTextoo] = useState('');
  const [hayarma, setHayarma] = useState('false');
  const [resultado, setResultado] = useState('');
  const [xelimaCount, setXelima] = useState(0);






  
  //const agregarInput = val => {
    //setInput(input + val);
  //};

  //const calcularResultado = () => {
     //if(input){
      // setInput(evaluate(input));
    // }else{
     //  alert("Por favor ingrese valores para realizar los calculos");
    // }
  // };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  const arma = () => {
    
    setInput( <img
      src=
"https://www.helbreath.net/img/demonslayer.gif"
      style={{
        height: 100,
        width: 100,
      } }
    
    />);
    setInput2("Demon Slayer");
    setTextoo("Chance to upgrade: ")
    setChance(35);
    setHayarma('true');

    
    
  
  };




  const calcularResultado = () => {
    if(hayarma === 'false'){
      alert("Please select an items");
     }else{
      setXelima(xelimaCount + 1);
       if(getRandomInt(100) <= chance){
      setResultado("The Item was successfully upgraded");
      setInput(input);
      setCount(count + 1);
      setInput2("Demon Slayer" + " + " + count);
      if(count === 1)
        setChance(30);
        if(count === 2)
        setChance(25);
        if(count === 3)
        setChance(20);
        if(count === 4)
        setChance(15);
        if(count === 5)
        setChance(10);
        if(count === 6)
        setChance(9);
        if(count === 7)
        setChance(8);
        if(count === 8)
        setChance("MAX");
  
     } else { 
      
      if (count >= 3 )
      setCount(count - 1 )
      setResultado("fallo y bajo");
      if(count === 1)
        setChance(30);
        if(count === 2)
        setChance(25);
        if(count === 3)
        setChance(20);
        if(count === 4)
        setChance(15);
        if(count === 5)
        setChance(10);
        if(count === 6)
        setChance(9);
        if(count === 7)
        setChance(8);
        if(count === 8)
        setChance("MAX");
    }  
      setResultado("fallo y no bajo");
    
}
   };


   

    const arma2 = () => {
    
      setInput2("holaa");

    
    
  };

 const nombreArma2= () => {
    return "HOLA";
  };
    


  

  return (
    <div className="App">

<div className='mstone'>
<img
      src=
"https://www.helbreath.net/img/Xelimstone.gif"
      style={{
        height: 23,
        width: 15,
      } }
    
    />{xelimaCount}
          </div>
        <div className='contenedor-calculadora'>
        <div className='text'>
            
            Item Upgrade

          </div>

          <div className='arma'>
            
          <Arma manejarClic={arma}>Demon Slayer</Arma>
          
          </div>

          <Pantalla input={input}/>

          <div className='chances'>
          <NombreArma input2={input2}/> 
          </div>
         
    

          <div className='chances'>
            
          <div className='chances'>
          <ChanceArma chance={textoo + chance}> </ChanceArma>
          </div>

          <div className='resultado'>
          {resultado}
          </div>

          </div>
          <div className='fila'>
            <Boton manejarClic={calcularResultado}>Upgrade</Boton>
            
            <BotonClear manejarClear={() => setCount(1) + setInput('') +  setChance('') +  setTextoo('') +  setInput2('') + setHayarma('false') + setResultado('') + setXelima(0)}  >Cancel</BotonClear>
          </div>
          


        </div>

    </div>
  );

}

export default App;
