import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { useGetItemImg } from "../hook/useGetItemImg";

const Item = ({ product, quantityAdded }) => {
  const navigate = useNavigate();
  const image = useGetItemImg(product.img)

  function handleNavigate() {
    navigate(`/item/${product.id}`);
  }
  if (!image) {
    return <Loading />
  }
  return (
    <div
      onClick={handleNavigate}
      className="flex flex-col w-[200px] h-[400px] bg-grey rounded p-4 shadow cursor-pointer transition-all hover:shadow-lg"
    >
      <div className="flex flex-col flex-1">
        <img
          src={image}
          className="w-full h-[100%] object-contain mb-3"
          alt="Product"
          style={{mixBlendMode:'multiply'}}
        />
        <span className="text-2xl font-bold">
          {product.name.length > 20 ? `${product.title} ...` : product.name}
        </span>
        <hr className="mb-2" />
        <p className="mb-2">
          {product.description.length > 30
            ? `${product.description} ...`
            : product.description}
        </p>
      </div>
      <div className="flex flex-col">
        <hr className="mb-2" />
        <div className="flex justify-between items-center">
          <span className="font-bold">${product.price}</span>
          <span className="text-xs">
            {quantityAdded ? "Agregados" : "En Stock"}:{" "}
            {quantityAdded || product.stock}
          </span>
        </div>
      </div>
    </div>
  );
};


export default Item;
