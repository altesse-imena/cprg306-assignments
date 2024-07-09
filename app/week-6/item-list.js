import React from 'react';
import Item from './item';

const ItemList = ({ items }) => {
  const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ul>
      {sortedItems.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ItemList;
