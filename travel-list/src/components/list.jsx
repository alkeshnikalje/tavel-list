import { useState } from "react";
import Item from "./item";

function List({ items, onAddItem, onUpdateItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedArray;
  if (sortBy === "input") sortedArray = items;
  if (sortBy === "description")
    sortedArray = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedArray = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  return (
    <div className="list">
      <ul>
        {sortedArray.map((item) => (
          <Item
            item={item}
            key={item.id}
            onAddItem={onAddItem}
            onUpdateItem={onUpdateItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed</option>
        </select>
        <button onClick={onClearList}>clear list</button>
      </div>
    </div>
  );
}

export default List;
