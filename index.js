import React from 'react';
import ReactDOM from 'react-dom/client';

const myStyle = {
    borderStyle:"solid",
    width: "350px",
    textAlign: "center",
    fontFamily:"Helvetica",

    backgroundColor:"tomato",
    boxShadow:"5px 10px 5px grey"
  };
const divCenter={margin: "auto",
  width: "30%",
  padding: "10px"}

const myElement = <div style={divCenter}>
<a href="https://www.adidas.co.in/" target="_blank"> <h1 style={myStyle} >Adidas </h1></a>
<a href="https://www.adidas.co.in/" target="_blank"><h2 style={myStyle}>shoes,shirts,caps,watches </h2></a>

</div>



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
