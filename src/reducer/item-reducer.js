const localStorage_key = "items";

export default function itemReducer(items, action) {
  switch (action.type) {
    case "add":
      const { content } = action;
      const addedItems = [
        ...items,
        { id: Date.now(), content, completed: false },
      ];
      localStorage.setItem(localStorage_key, JSON.stringify(addedItems));
      return addedItems;
    case "delete":
      const deletedItems = items.filter((i) => i.id !== action.item.id);
      localStorage.setItem(localStorage_key, JSON.stringify(deletedItems));
      return deletedItems;
    case "changeState":
      const changeditems = items.map((i) => {
        if (i.id === action.item.id) {
          return { ...action.item, completed: !action.item.completed };
        }
        return i;
      });
      localStorage.setItem(localStorage_key, JSON.stringify(changeditems));
      return changeditems;
    default:
      throw Error(`unknown action type: ${action.type}`);
  }
}
