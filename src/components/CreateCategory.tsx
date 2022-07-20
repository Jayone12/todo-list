import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { categoryState } from "../atoms";

interface IForm {
  category: string;
}

function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [categories, setCategories] = useRecoilState(categoryState);
  const [err, setErr] = useState("");

  const createCategory = ({ category }: IForm) => {
    if (categories.find((prev) => prev === category)) {
      return setErr("동일한 값이 있습니다.");
    } else {
      setCategories((prev) => [category, ...prev]);
    }
    setValue("category", "");
  };

  return (
    <form onSubmit={handleSubmit(createCategory)}>
      <input
        {...register("category", { required: "카테고리를 입력하세요." })}
        placeholder="카테고리를 입력하세요."
      />
      <button>등록</button>
      <br />
      {err && <span>{err}</span>}
    </form>
  );
}
export default CreateCategory;
