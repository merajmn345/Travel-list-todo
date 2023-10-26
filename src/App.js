import { useState } from "react";
import "./styles.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function addNewItem(item) {
    setItems((items) => [...items, item]);
  }

  function removeItems(id) {
    const remainingItem = items.filter((item) => item.id !== id);
    setItems(remainingItem);
    console.log(id);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClear() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items ?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form addNewItem={addNewItem} />
      <PackingList
        items={items}
        removeItems={removeItems}
        handleToggleItem={handleToggleItem}
        handleClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}
