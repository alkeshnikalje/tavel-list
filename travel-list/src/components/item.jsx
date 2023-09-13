function Item({ item, onAddItem, onUpdateItem }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onUpdateItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onAddItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
