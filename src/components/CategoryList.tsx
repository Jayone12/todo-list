import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

interface IProps {
  category: string;
}

const Category = styled.div`
  max-width: 500px;
  border: 1px solid #c8c8c8;
  padding: 20px;
  margin-bottom: 20px;
`;

const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    margin: 0;
  }
`;

function CategoryList({ category }: IProps) {
  const toDos = useRecoilValue(toDoState);
  const setCategory = useSetRecoilState(categoryState);

  const handleDelete = () => {
    setCategory((categoryArr) => {
      const deleteCategory = categoryArr.filter((value) => value !== category);
      console.log(deleteCategory);
      return deleteCategory;
    });
  };

  return (
    <Category key={category}>
      <CategoryTitle>
        <h2>{category}</h2>
        <button onClick={handleDelete} className="btn__remove">
          ❌
        </button>
      </CategoryTitle>
      <hr />
      <CreateToDo category={category} />
      <ul>
        {toDos
          .filter((toDo) => toDo.category === category)
          .map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
      </ul>
    </Category>
  );
}
export default CategoryList;
