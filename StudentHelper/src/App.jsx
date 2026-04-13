import React, { useState } from "react";
import Login from "./Components/Login";
import AddSubject from "./Components/AddSubject";
import Planner from "./Components/Planner";
import Progress from "./Components/Progress";
import { FaBook, FaChartPie, FaHome } from "react-icons/fa";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("dashboard");

  const [subjects, setSubjects] = useState([]);
  const [plan, setPlan] = useState([]);

  if (!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} />;
  }

  return (
    <div className="layout">

      <div className="sidebar">
        <h2>StudyAI</h2>

        <div className="menu">
          <p onClick={() => setPage("dashboard")}>
            <FaHome/> Dashboard
          </p>

          <p onClick={() => setPage("subjects")}>
            <FaBook/> Subjects
          </p>

          <p onClick={() => setPage("progress")}>
            <FaChartPie/> Progress
          </p>
        </div>
      </div>

      <div className="main">

        <div className="navbar">
          <h3>Smart Study Planner</h3>
          <div className="user">Student</div>
        </div>

        {page === "dashboard" && (
          <>
            <div className="stats">
              <div className="statCard">
                <h4>{subjects.length}</h4>
                <p>Subjects</p>
              </div>

              <div className="statCard">
                <h4>{plan.length}</h4>
                <p>Tasks</p>
              </div>

              <div className="statCard">
                <h4>{plan.filter(p=>p.done).length}</h4>
                <p>Completed</p>
              </div>
            </div>

            <div className="grid">
              <AddSubject 
                subjects={subjects} 
                setSubjects={setSubjects} 
              />

              <Planner 
                subjects={subjects} 
                plan={plan} 
                setPlan={setPlan} 
              />
            </div>
          </>
        )}

        {page === "subjects" && (
          <AddSubject 
            subjects={subjects} 
            setSubjects={setSubjects} 
          />
        )}

        {page === "progress" && (
          <Progress plan={plan} />
        )}

      </div>

    </div>
  );
}

export default App;

