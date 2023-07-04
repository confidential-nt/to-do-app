import "./App.css";
import ItemList from "./components/item_list/ItemList";
import ItemForm from "./components/item_form/ItemForm";
import Header, { Filter } from "./components/header/FilterHeader";
import NightModeProvider from "./context/NightMode";
import { DragDropContext } from "react-beautiful-dnd";
import { useCallback, useReducer, useState } from "react";
import itemReducer from "./reducer/item-reducer";

const localStorage_key = "items";
const storedItems = localStorage.getItem(localStorage_key) || "[]";

function App() {
  const [items, dispatch] = useReducer(itemReducer, JSON.parse(storedItems));
  const [filter, setFilter] = useState(Filter.ALL);

  const handleAdd = useCallback((content) => {
    dispatch({ type: "add", content });
  }, []);

  const handleDelete = (item) => {
    dispatch({ type: "delete", item });
  };

  const handleChangeItemState = (item) => {
    dispatch({ type: "changeState", item });
  };

  const handleFilter = useCallback((filter) => {
    setFilter(filter);
  }, []);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    dispatch({ type: "drag", destination, source, draggableId });
  };

  return (
    <main className="main">
      <div className="container">
        <NightModeProvider>
          <Header onFilter={handleFilter} filter={filter} />
          <DragDropContext onDragEnd={onDragEnd}>
            <ItemList
              filter={filter}
              items={items}
              onDeleteItem={handleDelete}
              onChangeItemState={handleChangeItemState}
            />
          </DragDropContext>
          <ItemForm onAddItem={handleAdd} />
        </NightModeProvider>
      </div>
    </main>
  );
}

export default App;
