import React, { useState, useEffect } from 'react';
import './App.css';




function App() {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ['red', 'yellow', 'green'];
   useEffect(() => {
     const timer = setTimeout(() => { 
      setColorIndex((colorIndex + 1) % 3);
     }, 3000); 
      return () => clearTimeout(timer);
     }, [colorIndex]);

    const currentColor = colors[colorIndex];

   

  return (<>
  <div className='App'>
  <div className='div-container'>
    <div className= {currentColor=== 'red' ? 'color__rojo' : 'color__default'}></div>
    <div className= {currentColor=== 'yellow' ? 'color__amarillo' : 'color__default'}></div>
    <div className= {currentColor=== 'green' ? 'color__verde' : 'color__default'}></div>
    
   </div>
  </div>
    </>
  );
}

export default App;
