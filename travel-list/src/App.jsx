import Logo from "./components/logo";
import Form from "./components/form";
import List from "./components/list";
import Stats from "./components/stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleOnAddItem(item) {
    if (!item.description) return;
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleOnAddItem} />
      <List
        items={items}
        onAddItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
