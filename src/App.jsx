import React from "react";
import "./styles/App.scss";
import "./styles/home.scss";
import "./styles/collection.scss";
import "./styles/sections.scss";
import "./styles/footer.scss";
import Home from "./components/home/home";
import Collection from "./components/collection/collection";
import Feature from "./components/feature/Feature";
import NftCreators from "./components/nftCreators/NftCreators";
import DropDownList from "./components/dropDown/DropDownList";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <Collection />
      <Feature />
      <NftCreators />
      <DropDownList />
      <Footer />
    </div>
  );
}

export default App;
