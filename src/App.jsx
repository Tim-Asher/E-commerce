import { useState } from "react";
import "./App.css";
import MainMenu from "./components/MainMenu";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Header from "./components/Header";
import ItemsMenu from "./components/ItemsMenu";
import ItemsList from "./components/ItemsList";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <MainMenu />
      <div className="container row-gap-3 d-flex flex-column justify-content-center">
        <Header />
        <ItemsMenu />
        <ItemsList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
