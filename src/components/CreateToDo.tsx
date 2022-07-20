import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IProps {
  category: string;
}

interface IForm {
  toDo: string;
}

function CreateToDo({ category }: IProps) {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);

  const createToDo = ({ toDo }: IForm) => {
    setToDos((prev) => [{ text: toDo, id: Date.now(), category }, ...prev]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(createToDo)}>
      <input
        {...register("toDo", { required: "할일을 입력하세요." })}
        placeholder="할일을 입력하세요."
      />
      <button>등록</button>
    </form>
  );
}
export default CreateToDo;
