// import logo from './logo.svg';
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Products } from "./Components/Products";
import { Product } from "./Components/Product";

import { Navbar } from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products/*" element={<Products />}>
          <Route path=":id" element={<Product />} />
           {/* <Route path=":id/:name" element={<Product />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// Notes...
// install
// wrap App in browser Router
// create Router and Route
// Link and use Navigation in a rote :/key and read it useing usePrams
// Having Nested Rotes
//
