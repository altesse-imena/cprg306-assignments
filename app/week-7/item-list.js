import { useState } from "react";
import Item from "./item";

function ItemList({ items, onItemSelect }) {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} onSelect={onItemSelect} />
      ))}
    </ul>
  );
}

export default ItemList;
