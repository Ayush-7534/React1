import React from "react";

function Progress({ plan }) {

  const completed = plan.filter(p=>p.done).length;
  const total = plan.length;

  const percent =
    total === 0 ? 0 :
    Math.round((completed/total)*100);

  return (
    <div className="card">
      <h3>Progress</h3>

      <div className="bar">
        <div
          className="fill"
          style={{width: percent + "%"}}
        ></div>
      </div>

      <p>{percent}% Completed</p>

    </div>
  );
}

export default Progress;