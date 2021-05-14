import "./NewTodo.css";
import React from "react";
import Section from "./Section";
import Button from "./Button";
import { useState } from "react";
import styled from "styled-components";

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

    const FormControl = styled.div`
        display: flex;

        & label {
            font-size: 1rem;
            font-family: inherit;
        }

        & input {
            font-family: inherit;
            padding: 0.75rem;
            width: 300px;
            background-color: #ffffff;
            color: black;
            border: none;
            margin-right: 1rem;
            border-radius: 2px;
        }

        & input:focus {
            outline: none;
        }

        .new-todo input::placeholder {
            color: black;
        }
    `;

    const Info = styled.div`
        .error-container {
            text-align: center;
        }

        .info {
            color: ${(props) => (props.isValid ? "green" : "red")};
            opacity: ${(props) => (props.isValid ? "0" : "1")};
            display: inline;
            text-align: center;
            font-weight: bold;
            font-size: 0.75rem;
        }
    `;

    //Return
    return (
        <Section flex="row">
            <form onSubmit={submitButtonHandler}>
                <Section flex="row" className="error-container">
                    <Info>
                        <h5 className="info">
                            {isValid ? "" : "Todo item cannot be empty"}
                        </h5>
                    </Info>
                </Section>
                <FormControl className="new-todo">
                    <input
                        type="text"
                        placeholder="Enter new todo.."
                        onChange={newToDoAdd}
                    />
                    <Button type="submit">Create Todo </Button>
                </FormControl>
            </form>
        </Section>
    );
};

export default NewTodo;
