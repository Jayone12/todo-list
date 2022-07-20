import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, ITodo, toDoState } from "../atoms";

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
    <li>
      <span>{text}</span>
      {categories
        .filter((categoryValue) => category !== categoryValue)
        .map((category) => (
          <button onClick={() => onClick(category)} key={category}>
            {category}
          </button>
        ))}
      <button onClick={handleDelete}>❌</button>
    </li>
  );
}
export default ToDo;
