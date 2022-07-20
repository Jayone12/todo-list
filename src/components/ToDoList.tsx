import { useRecoilValue } from "recoil";
import { categoryState } from "../atoms";
import CreateCategory from "../components/CreateCategory";
import CategoryList from "./CategoryList";

function ToDoList() {
  const categories = useRecoilValue(categoryState);

  return (
    <div>
      <CreateCategory />
      <ul>
        {categories.map((category) => (
          <CategoryList key={category} category={category} />
        ))}
      </ul>
    </div>
  );
}
export default ToDoList;
