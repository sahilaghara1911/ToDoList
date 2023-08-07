import { useState } from "react";

function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: "", by: "" }); //Goal is name and ""is Value

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function SubmitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" });
  }

  return (
    <div>
      <h1>To Do Goals</h1>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          name="goal"
          placeholder="Goal"
          value={formData.goal}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="by"
          placeholder="By"
          value={formData.by}
          onChange={changeHandler}
        />
        <button>Submit Goal</button>
      </form>
    </div>
  );
}

function ListOfGoal(props) {
  return (
    <ol>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>
            My goal is to {g.goal}, by {g.by}
          </span>
        </li>
      ))}
    </ol>
  );
}

export default function TodoList() {
  const [allGoals, setAllgoal] = useState([]);

  function addGoal(goal) {
    setAllgoal([...allGoals, goal]);
  }

  return (
    <div>
      <GoalForm onAdd={addGoal} />
      <ListOfGoal allGoals={allGoals} />
    </div>
  );
}
