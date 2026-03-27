import AppName from "./component/AppName";
import TodoInput from "./component/TodoInput";
import "./App.css";
import TodoItems from "./component/TodoItems";
import WelcomeMessage from "./component/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  // const [todoItems, setTodoItem] = useState([]);

  return (
    <TodoItemsContextProvider>
      <center className=" todo-container">
        <AppName />
        <TodoInput />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}
export default App;
