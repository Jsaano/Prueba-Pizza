import React, { useContext } from "react";

import "../assets/css/galeria.css";
import { DataCarrito } from '../DataContext';

export const Carrito = () => {
  const { carrito } = useContext(DataCarrito);
  let suma = 0;

  return (
    <div>
      <h1>Información Carrito</h1>
      <br/>
      <div className="row">
        <table className="table carrito">
          <thead>
            <tr>
              <th></th>
              <th>Producto</th>
              <th>Valor</th>
              <th></th>
            </tr>
          </thead>
        </table>
        <tbody>
          {carrito.map((element, index) => {
            suma = suma + element.price
            console.log(suma);
            return  <tr>
                      <td className="itemCarritoProducto"></td>
                      <td style={{textAlign: 'center'}}>Pizza {element.name}</td>
                      <td className="itemCarritoSpace"></td>
                      <td style={{textAlign: 'center'}}>${element.price}</td>
                      <td></td>
                    </tr>
          })}
        </tbody>
        <hr/>
        <tex>Total a Pagar ${suma}</tex>
      </div>
    </div>
  );
}
