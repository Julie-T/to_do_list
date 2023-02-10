import React from "react";

const TodoListElement = (props) => {
    return (
        <div>
            <div>{props.text}</div>
            <button>{props.done}</button>
        </div>
    )
}

export default TodoListElement