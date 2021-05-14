import "./SingleTodo.css";
import React from "react";

const SingleTodo = (props) => {
    const todo = props.item;
    console.log(todo);

    return <h3 className="single-todo">{todo}</h3>;
};

export default SingleTodo;
