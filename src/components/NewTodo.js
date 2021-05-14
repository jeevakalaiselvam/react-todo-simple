import "./NewTodo.css";
import React from "react";
import Section from "./Section";

/**
 * @author Jeeva Kalaiselvam
 * @param {*} props Props containing the handler for lifting state up and passing newly created todo to parent component
 * @returns HTML section that provided user inteface for user to create new todo item.
 */
const NewTodo = (props) => {
    let newTodo = "";

    //Hook onto the submit even and prevent default behaviour. Also pass on the new todo data created by user to parent component via props method handler
    const submitButtonHandler = (event) => {
        event.preventDefault();
        props.onNewTodo(newTodo);
    };

    //Hook onto the onchange event of user input and update the newtodo item data. This item will later be passed through prop method handler when user presses the submit button.
    const newToDoAdd = (event) => {
        newTodo = event.target.value;
    };

    //Return
    return (
        <Section flex="row">
            <form className="new-todo" onSubmit={submitButtonHandler}>
                <input
                    type="text"
                    placeholder="Enter item.."
                    onChange={newToDoAdd}
                />
                <button type="submit">Create Todo</button>
            </form>
        </Section>
    );
};

export default NewTodo;
