import "./App.css";
import ItemList from "./components/item_list/ItemList";
import ItemForm from "./components/item_form/ItemForm";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: 1231, item: "강의 보기", completed: false },
    { id: 1233, item: "카페 가기", completed: false },
    { id: 1234, item: "청소 하기", completed: false },
  ]);

  const handleAdd = (item) => {
    setItems((prev) => [...prev, { id: Date.now(), item, completed: false }]);
  };

  return (
    <main className="main">
      <ItemList items={items} />
      <ItemForm onAddItem={handleAdd} />
    </main>
  );
}

export default App;
