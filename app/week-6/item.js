import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      name,
      quantity,
      category,
    };
    onAddItem(newItem);
    setName('');
    setQuantity('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default NewItem;
