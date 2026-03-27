import { useContext, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoInput() {
  const { addNewItem } = useContext(TodoItemsContext);

  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    addNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="enter text here"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button "
            onClick={handleAddButtonClicked}
          >
            <MdAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;
