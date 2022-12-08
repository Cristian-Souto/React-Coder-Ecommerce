import './App.css';
import { Layout } from './components/Layout';
import ItemListContainer from './components/ItemListContainer';
import { CartContext } from './context/cartContext'


function App() {
  return (
    
      <Layout>
        <ItemListContainer />
      </Layout>
   
  );
}

export default App;
