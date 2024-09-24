import { waitFor } from "@/util/waitFor";
import React from "react";

interface Props {
  id: number;
}

export const TodoItem = async ({ id }: Props) => {
  await waitFor(1000);
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await res.json();
  return (
    <div>
      TodoItem {id}
      <div>{data.title}</div>
    </div>
  );
};
