import React, {useState} from "react";

import "./NewGoal.css";

const NewGoal = props => {
    const [enteredText, setEnteredText] = useState("");
    const addGoalControl = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        };

        setEnteredText("");

        props.onAddGoal(newGoal);
    };

const textChangeHandler = event => {
    setEnteredText(event.target.value);
};

    return (
        <form className="new-goal" onSubmit={addGoalControl}>
            <input className="txt" type="text" value={enteredText} onChange={textChangeHandler} />
            <button className="btn" type="submit">Add Goal</button>
        </form>
    );
};

export default NewGoal;