import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

export const InputTodos = (props) => {
  const { todoText, onChange, onClick, disable } = props;
  return (
    <div style={style}>
      <input
        disabled={disable}
        placeholder="ToDoを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disable} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
