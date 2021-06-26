import "./App.css";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import Cards from "../cards/Cards";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Cards />
    </div>
  );
}

export default App;
