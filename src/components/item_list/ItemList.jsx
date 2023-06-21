import React, { useState } from "react";
import Item from "../item/Item";

export default function ItemList() {
  const [items, setItems] = useState([
    { id: 1231, title: "강의 보기", completed: false },
    { id: 1233, title: "카페 가기", completed: false },
    { id: 1234, title: "청소 하기", completed: false },
  ]);

  return (
    <ul>
      {items.map((i) => (
        <Item key={i.id} title={i.title} />
      ))}
    </ul>
  );
}
