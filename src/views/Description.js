import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import "../assets/css/galeria.css";
import { DataContext } from '../DataContext';

export const Description = () => {
  const { id } = useParams();
  const { pizzas } = useContext(DataContext);

  return ( 
    <div>
      <h1>Descripción</h1>
      <br/>
      {pizzas.map((element, index) => {
        if (element.id === id) {
          return  <div className="row">
                    <h3>Pizza {element.name}</h3>
                    <img className="foto1" src={element.img} alt={element.name} />
                    <br/>
                    <text>{element.desc}</text>
                    <text>Ingredientes</text>
                    {element.ingredients.map((materials, index) =>{
                      return <li key={index} style={{textAlign: 'left'}}>{materials}</li>
                    })}
                    <br/>
                    <text>Precio: ${element.price} c/u</text>
                  </div>
        }
      })}
    </div>
  );
}
