import { createContext, useState , useEffect } from "react";

export const DataContext = createContext();

export const DataCarrito = createContext();

export const DataProvider = ({ children }) => {
  const [ pizzas, setPizzas ] = useState([]);
  const endpoint = "./pizzas.json";

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((pizzas) => setPizzas(pizzas));
  }, []);

  return (
    <DataContext.Provider value={{
      pizzas,
      setPizzas
    }}>
      { children }
    </DataContext.Provider>
  )
}

export const DataCarritoProvider = ({ children }) => {
  const [ carrito, setCarrito ] = useState([]);

  return (
    <DataCarrito.Provider value={{
      carrito,
      setCarrito
    }}>
      { children }
    </DataCarrito.Provider>
  )
}