import { useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
/* import {item} from "../mocks/item.mock"
import Item from "../components/Item"; */
import ItemListContainer from "../components/ItemListContainer";

const CategoryView = () => {
  const {category} = useParams();
  /* const categories = item.filter(producto => producto.category===category)  */
 
 return(
   <Layout>
     <ItemListContainer />
   </Layout>
  )
}

export default CategoryView;