import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, ITodo, toDoState } from "../atoms";

const ToDoList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  h3 {
    margin: 0;
  }
`;

const Buttons = styled.div`
  background-color: lightskyblue;
  border-radius: 100px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  .btn__remove {
    background-color: lightblue;
    border-radius: 10px;
    font-size: 8px;
  }
`;

function ToDo({ text, id, category }: ITodo) {
  const categories = useRecoilValue(categoryState);
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (category: string) => {
    setToDos((oldToDos) => {
      return oldToDos.map((toDo) =>
        toDo.id === id ? { text, id, category } : toDo
      );
    });
  };

  const handleDelete = () => {
    setToDos((oldToDos) => {
      const deleteTodo = oldToDos.filter((todo) => todo.id !== id);
      return deleteTodo;
    });
  };

  return (
    <ToDoList>
      <h3>{text}</h3>
      <Buttons>
        {categories
          .filter((categoryValue) => category !== categoryValue)
          .map((category) => (
            <button
              className="btn__category"
              onClick={() => onClick(category)}
              key={category}
            >
              {category}
            </button>
          ))}
        <button className="btn__remove" onClick={handleDelete}>
          ❌
        </button>
      </Buttons>
    </ToDoList>
  );
}
export default ToDo;
