import styles from "./NewTodo.module.css";
import React from "react";
import Section from "./Section";
import Button from "./Button";
import { useState } from "react";

/**
 * @author Jeeva Kalaiselvam
 * @param {Object} props Props containing the handler for lifting state up and passing newly created todo to parent component
 * @returns HTML section that provided user inteface for user to create new todo item.
 */
const NewTodo = (props) => {
    let newTodo = "";
    const [isValid, setIsValid] = useState(true);
    let inputElement = null;

    //Hook onto the submit even and prevent default behaviour. Also pass on the new todo data created by user to parent component via props method handler
    const submitButtonHandler = (event) => {
        event.preventDefault();

        if (newTodo.trim().length == 0) {
            setIsValid(false);
            return;
        } else {
            setIsValid(true);
            props.onNewTodo(newTodo);
            inputElement.value = "";
        }
    };

    //Hook onto the onchange event of user input and update the newtodo item data. This item will later be passed through prop method handler when user presses the submit button.
    const newToDoAdd = (event) => {
        inputElement = event.target;
        newTodo = event.target.value;
    };

    //Return the form element for user to enter todo items for storage
    return (
        <Section flex="row">
            {isValid ? (
                <Section flex="row" className={styles["error-container"]}>
                    <h6 className={styles["success"]}>Todo has been added !</h6>{" "}
                </Section>
            ) : (
                <Section flex="row" className={styles["error-container"]}>
                    <h6 className={styles["error"]}>
                        You need to enter something !
                    </h6>{" "}
                </Section>
            )}
            <form className={styles["new-todo"]}>
                <input
                    type="text"
                    placeholder="Enter new todo.."
                    onChange={newToDoAdd}
                />
                <Button onClick={submitButtonHandler}>Create Todo </Button>
            </form>
        </Section>
    );
};

export default NewTodo;
