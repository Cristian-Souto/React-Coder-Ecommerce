const ItemDetail = ({ item }) => {
  return (
    <div>
      <img src={item.img} alt="" />
      <p>{item.name}</p>
      <span>$ {item.price}</span>
    </div>
  )
}

export default ItemDetail;