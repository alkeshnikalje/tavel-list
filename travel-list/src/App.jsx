import Logo from "./components/logo";
import Form from "./components/form";
import List from "./components/list";
import Stats from "./components/stats";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleOnAddItem(item) {
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

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleOnAddItem} />
      <List
        items={items}
        onAddItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
