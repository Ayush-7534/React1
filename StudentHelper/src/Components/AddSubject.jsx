import React, { useState } from "react";

function AddSubject({ subjects, setSubjects }) {

  const [subject, setSubject] = useState("");
  const [topics, setTopics] = useState("");

  const addSubject = () => {

    const topicList = topics.split(",");

    setSubjects([
      ...subjects,
      { subject, topics: topicList }
    ]);

    setSubject("");
    setTopics("");
  };

  return (
    <div className="card">
      <h3>Add Subject</h3>

      <input
        placeholder="Subject"
        value={subject}
        onChange={(e)=>setSubject(e.target.value)}
      />

      <input
        placeholder="Topics (comma separated)"
        value={topics}
        onChange={(e)=>setTopics(e.target.value)}
      />

      <button onClick={addSubject}>
        Add
      </button>

    </div>
  );
}

export default AddSubject;