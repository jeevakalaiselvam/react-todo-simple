//All necessary imports for functionalities
import "./App.css";
import NewTodo from "./components/NewTodo";
import AllTodos from "./components/AllTodos";
import { useState } from "react";
import Section from "./components/Section";

/**
 * @author Jeeva Kalaiselvam
 * @returns Section containing functionality to add new Todo and list all existing Todos
 */
function App() {
    //Maintain a state containing array of todo items
    const [todos, setTodos] = useState(["Get some Milk"]);

    //Handler for receiving the state lifted from NewTodo component, It passed the new Todo item as argument for adding to current state
    const newTodoHandler = (todo) => {
        console.log("NewTodo", todos);

        //Merge new Todo received from NewTodo component and use spread operator to merge both items into single array
        setTodos((oldTodos) => {
            return [todo, ...oldTodos];
        });
    };

    //JSX that contains section allowing users to add new Todo items and also displays list of todo items.
    return (
        <div className="App">
            <Section flex="column">
                <NewTodo onNewTodo={newTodoHandler} />
                <AllTodos items={todos} />
            </Section>
        </div>
    );
}

export default App;
