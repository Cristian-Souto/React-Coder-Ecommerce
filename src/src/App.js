import './App.css';
/* import ItemDetailContainer from './components/ItemDetailContainer'; */
import { Layout } from './components/Layout';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <Layout>
      <ItemListContainer />
    </Layout>
  );
}

export default App;
