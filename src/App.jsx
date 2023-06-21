import "./App.css";
import ItemList from "./components/item_list/ItemList";
import ItemForm from "./components/item_form/ItemForm";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: 1231, content: "강의 보기", completed: false },
    { id: 1233, content: "카페 가기", completed: false },
    { id: 1234, content: "청소 하기", completed: false },
  ]);

  const handleAdd = (content) => {
    setItems((prev) => [
      ...prev,
      { id: Date.now(), content, completed: false },
    ]);
  };

  const handleDelete = (item) => {
    setItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  return (
    <main className="main">
      <ItemList items={items} onDeleteItem={handleDelete} />
      <ItemForm onAddItem={handleAdd} />
    </main>
  );
}

export default App;
