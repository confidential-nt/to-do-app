import "./App.css";
import ItemList from "./components/item_list/ItemList";
import ItemForm from "./components/item_form/ItemForm";
import Header, { Filter } from "./components/header/FilterHeader";
import NightModeProvider from "./context/NightMode";
import { useCallback, useEffect, useState } from "react";

const localStorage_key = "items";

function App() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState(Filter.ALL);

  useEffect(() => {
    const storedItems = localStorage.getItem(localStorage_key);
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  const handleAdd = useCallback((content) => {
    setItems((prev) => {
      const items = [...prev, { id: Date.now(), content, completed: false }];
      localStorage.setItem(localStorage_key, JSON.stringify(items));
      return items;
    });
  }, []);

  const handleDelete = (item) => {
    setItems((prev) => {
      const items = prev.filter((i) => i.id !== item.id);
      localStorage.setItem(localStorage_key, JSON.stringify(items));
      return items;
    });
  };

  const handleChangeItemState = (item) => {
    setItems((prev) => {
      const items = prev.map((i) => {
        if (i.id === item.id) {
          return { ...item, completed: !item.completed };
        }
        return i;
      });
      localStorage.setItem(localStorage_key, JSON.stringify(items));
      return items;
    });
  };

  const handleFilter = useCallback((filter) => {
    setFilter(filter);
  }, []);

  return (
    <main className="main">
      <div className="container">
        <NightModeProvider>
          <Header onFilter={handleFilter} filter={filter} />
          <ItemList
            filter={filter}
            items={items}
            onDeleteItem={handleDelete}
            onChangeItemState={handleChangeItemState}
          />
          <ItemForm onAddItem={handleAdd} />
        </NightModeProvider>
      </div>
    </main>
  );
}

export default App;
