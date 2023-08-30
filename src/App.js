import React, {useState} from 'react';

import GoalList from './GoalList/GoalList';
import NewGoal from './NewGoal/NewGoal';
import "./App.css";

const App = () => {

  const [courseGoals, setCourseGoals] = useState([
    {id: "cg1", text: "First the Course"},
    {id: "cg2", text: "Get certificate"},
    {id: "cg3", text: "Get A Job"},
    {id: "cg2", text: "Earn Money"},
  ]);

  const addNewGoalControl = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals(prevCourseGoals => prevCourseGoals.concat(newGoal));
  };

  return (
    <div className='course-goal'>
      <h2 id='hed'>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalControl} />
      <GoalList goals={courseGoals}/>
    </div>
  );
};

export default App;
