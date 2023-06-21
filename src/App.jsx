import "./App.css";
import ItemList from "./components/item_list/ItemList";
import ItemForm from "./components/item_form/ItemForm";
import Header, { Filter } from "./components/header/FilterHeader";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: 1231, content: "강의 보기", completed: false },
    { id: 1233, content: "카페 가기", completed: false },
    { id: 1234, content: "청소 하기", completed: false },
  ]);
  const [filter, setFilter] = useState(Filter.ALL);

  const handleAdd = (content) => {
    setItems((prev) => [
      ...prev,
      { id: Date.now(), content, completed: false },
    ]);
  };

  const handleDelete = (item) => {
    setItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  const handleChangeItemState = (item) => {
    setItems((prev) =>
      prev.map((i) => {
        if (i.id === item.id) {
          return { ...item, completed: !item.completed };
        }
        return i;
      })
    );
  };

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <main className="main">
      <Header onFilter={handleFilter} />
      <ItemList
        filter={filter}
        items={items}
        onDeleteItem={handleDelete}
        onChangeItemState={handleChangeItemState}
      />
      <ItemForm onAddItem={handleAdd} />
    </main>
  );
}

export default App;
