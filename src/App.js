import './App.css';
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {

  return (
    <div className="App">
      <ItemListContainer greeting={"hola mundo"} />
      <Navbar />
    </div>
  );
}

export default App;
