import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
const todoItemsReducer = (currentTodoItem, action) => {
  let newTodoItems = currentTodoItem;
  if (action.type === "NEW_NAME") {
    newTodoItems = [
      ...currentTodoItem,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItem.filter(
      (item) => item.name !== action.payload.itemName,
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatch] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_NAME",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatch(newItemAction);

    //  const newTodoItems =[
    //   ...todoItems ,{name:itemName, dueDate:itemDueDate},
    //  ];
    // setTodoItem(newTodoItems);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatch(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
