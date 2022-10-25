import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import { Home } from "./views/Home";
import { Carrito } from "./views/Carrito";
import { Description } from "./views/Description";
import { DataProvider, DataCarritoProvider } from './DataContext';

function App() {

  return (
    <div className="App">
        <DataProvider>
          <DataCarritoProvider>
            <BrowserRouter>
              <Navbar />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/desciption/:id" element={<Description />} />
              </Routes>
            </BrowserRouter>
          </DataCarritoProvider>
      </DataProvider>
    </div>
  );
}

export default App;
