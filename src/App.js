import Cards from "./components/cards/Cards";
import Navbar from "./components/navbar/Navbar";
import Instructions from "./components/instructions/Instructions";
import { CardContextProvider } from "./context/cardContext";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <CardContextProvider>
      <div className="container">
        <div className="layout_container">
          <Navbar />
          <Cards />
          <Footer />
        </div>
        <Instructions />
      </div>
    </CardContextProvider>
  );
}

export default App;
