
const ItemDetail = ({ item }) => {
  return (
    <div>
      <p>{item.name}</p>
      <img src={item.image} alt="graphics card" />
    </div>
  )
}

export default ItemDetail;