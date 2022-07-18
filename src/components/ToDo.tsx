import { IToDo } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  return <li>{text}</li>;
}
export default ToDo;
