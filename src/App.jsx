import React, { useEffect, useState } from "react";
import "./styles.css";
import { InputTodos } from "./components/inputComponents";
import { IncompleteTodos } from "./components/incompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export default function App() {
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]);
  const [completeTodos, setCompleteTodos] = useState(["ううう"]);
  const [todoText, setTodoText] = useState("");

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newImcompleteTodos = [...incompleteTodos];
    newImcompleteTodos.splice(index, 1);
    setIncompleteTodos(newImcompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  const onClickReturn = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newImcompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newImcompleteTodos);
  };

  return (
    <>
      <InputTodos
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disable={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && <p style={{ color: "red" }}>５個以上</p>}
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
        completeTodos={completeTodos}
        onClickReturn={onClickReturn}
      />
    </>
  );
}
