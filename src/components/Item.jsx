const Item = ({ product}) => {
  return (
    <div style={{ backgroundColor: '#f3f4', padding: '2rem' }}>
      <img src={product.img} alt="keyboard" style={{ width: '150px' }} />
      <li>{product.name}</li>
      <li>{product.description}</li>
    </div>
  )
}

export default Item;
