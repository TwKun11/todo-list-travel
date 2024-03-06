import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeletedItems,
  onToggleItem,
  handleClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeletedItems={onDeletedItems}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By input order</option>
          <option value="description">Sort By description</option>
          <option value="packed">Sort By Packed status</option>
        </select>
        <button onClick={handleClearItems}>CLear All Items</button>
      </div>
    </div>
  );
}
