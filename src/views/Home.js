import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "../assets/css/galeria.css";
import { DataContext, DataCarrito } from '../DataContext';

export const Home = () => {
  const { pizzas } = useContext(DataContext);
  const { carrito, setCarrito } = useContext(DataCarrito);

  const setValueCarrito = (name, price) => {
    carrito.push({name, price});
    setCarrito(carrito)
  }

  return ( 
    <div>
      <h1>Pizzas</h1>
      <div className="galeria grid-columns-4 p-3" id="Home">
          {pizzas.map((ingrediente, index) => {
            return <div key={index}>
              <br />
              {ingrediente.name}
              <img className="foto" src={ingrediente.img} alt={ingrediente.name} />
              <text>Ingredientes</text>
              {ingrediente.ingredients.map((materials, index) =>{
                return <li key={index} style={{textAlign: 'left'}}>{materials}</li>
              })}
              <br/>
              <text>Precio: ${ingrediente.price}</text>
              <br/>
              <button onClick={() => setValueCarrito(ingrediente.name, ingrediente.price)}>Agregar al Carrito</button>
              <button>
                <Link to={`/desciption/${ingrediente.id}`} >Ver Detalle</Link>
              </button>
            </div>
          })}
      </div>
    </div>
  );
}
