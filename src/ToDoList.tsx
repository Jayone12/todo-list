import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

const toDoState = atom({
  key: "toDoList",
  default: [],
});

interface IForm {
  toDo: string;
}

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = (data: IForm) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };

  return (
    <div>
      <h1>To Dos</h1>
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please write a To Do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
export default ToDoList;
