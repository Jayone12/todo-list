import { createGlobalStyle } from "styled-components";
import ToDoList from "./components/ToDoList";

const GlobalStyle = createGlobalStyle`
  button{
    background-color: inherit;
    border: 0;
  }
  .btn__remove {
    font-size: 12px;
  }
  .btn__category {
    background-color: lightblue;
    padding: 2px 10px;
    border-radius: 100px;
    margin-right: 10px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
