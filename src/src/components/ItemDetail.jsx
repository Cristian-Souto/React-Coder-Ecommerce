const ItemDetail = ({ item }) => {
  return (
    <div>
      <p>{item.name}</p>
      <img src={item.img} alt="" />
    </div>
  )
}

export default ItemDetail;