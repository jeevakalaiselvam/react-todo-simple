import "./SingleTodo.css";
import React from "react";

/**
 * @author Jeeva Kalaiselvam
 * @param {*} props Props containing single todo item data. This data is then used to render a single h3 element representing a todo item
 * @returns HTML containing a h3 element for a single todo item data
 */
const SingleTodo = (props) => {
    const todo = props.item;

    //JSX returning a single h3 element representing single todo item data
    return <h3 className="single-todo">{todo}</h3>;
};

export default SingleTodo;
