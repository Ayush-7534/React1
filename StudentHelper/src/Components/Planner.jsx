import React from "react";

function Planner({ subjects, plan, setPlan }) {

  const generatePlan = () => {

    let allTopics = [];

    subjects.forEach(sub => {
      sub.topics.forEach(topic => {
        allTopics.push({
          subject: sub.subject,
          topic,
          done: false
        });
      });
    });

    setPlan(allTopics);
  };

  const toggleDone = (index) => {
    const newPlan = [...plan];
    newPlan[index].done = !newPlan[index].done;
    setPlan(newPlan);
  };

  return (
    <div className="card">
      <h3>Today's Plan</h3>

      <button onClick={generatePlan}>
        Generate Plan
      </button>

      {plan.map((item,i)=>(
        <div key={i}>
          <input
            type="checkbox"
            checked={item.done}
            onChange={()=>toggleDone(i)}
          />

          {item.subject} — {item.topic}
        </div>
      ))}

    </div>
  );
}

export default Planner;