import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickReturn } = props;
  return (
    <div className="complete-area">
      <p>完了のToDO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickReturn(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
