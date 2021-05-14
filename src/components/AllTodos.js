import "./AllTodos.css";
import React from "react";
import SingleTodo from "./SingleTodo";
import Section from "./Section";
import { nanoid } from "nanoid";

/**
 * @author Jeeva Kalaiselvam
 * @param {*} props Props passed on from App component. It contains the list of already present Todos
 * @returns HTML containing section which maps through all the todos and generate a SingleTodo component
 */
const AllTodos = (props) => {
    const todos = props.items;

    //JSX to generate SingleTodo component for each todo item present passed in props.items from App component.
    return (
        <Section flex="column">
            {todos.map((todo) => {
                return <SingleTodo item={todo} key={nanoid()} />;
            })}
        </Section>
    );
};

export default AllTodos;
