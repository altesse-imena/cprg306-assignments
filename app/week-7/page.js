import React, { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (item) => {
    const cleanedName = item.name.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    setSelectedItemName(cleanedName);
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <NewItem onNewItem={(item) => setItems([...items, item])} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <MealIdeas ingredient={selectedItemName} />
    </div>
  );
}

export default Page;
