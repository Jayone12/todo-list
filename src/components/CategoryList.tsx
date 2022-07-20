import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

interface IProps {
  category: string;
}

function CategoryList({ category }: IProps) {
  const toDos = useRecoilValue(toDoState);

  return (
    <li key={category}>
      <h2>{category}</h2>
      <CreateToDo category={category} />
      <ul>
        {toDos
          .filter((toDo) => toDo.category === category)
          .map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
      </ul>
    </li>
  );
}
export default CategoryList;
