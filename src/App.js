import React, { useState, useEffect } from "react";
import "./App.css";
import TaskCard from "./components/TaskCard";

function App() {

  // Task list
  const [tasks, setTasks] = useState([
    {
      id: 101,
      title: "Complete React Assignment",
      category: "Web Development",
    },
    {
      id: 102,
      title: "Prepare DBMS Notes",
      category: "Database",
    },
    {
      id: 103,
      title: "Practice Flutter Widgets",
      category: "Mobile Development",
    },
  ]);

  // New task inputs
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("");

  // Runs whenever tasks change
  useEffect(() => {
    console.log("Task list updated!");
    console.log("Total tasks:", tasks.length);
  }, [tasks]);

  // Add new task
  const addTask = () => {

    if (newTitle.trim() === "" || newCategory.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: newTitle,
      category: newCategory,
    };

    setTasks([...tasks, newTask]);

    // Clear inputs
    setNewTitle("");
    setNewCategory("");
  };

  return (
    <main className="board-container">

      {/* Page Header */}
      <header className="board-header">

        <div>
          <p className="small-heading">STUDENT WORKSPACE</p>

          <h1>Campus Task Board</h1>

          <p className="intro-text">
            Keep your academic tasks organized in one place.
          </p>
        </div>

        {/* Total task count */}
        <div className="task-counter">
          <span>{tasks.length}</span>
          <small>Tasks</small>
        </div>

      </header>


      {/* Add New Task */}
      <section className="add-task-section">

        <div className="section-title">
          <h2>Add New Task</h2>
          <span>Create a task</span>
        </div>

        <div className="task-form">

          <input
            type="text"
            placeholder="Enter task title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />

          <button onClick={addTask}>
            + Add Task
          </button>

        </div>

      </section>


      {/* Task List */}
      <section className="task-area">

        <div className="section-title">
          <h2>My Campus Tasks</h2>
          <span>Current List</span>
        </div>

        <div className="task-grid">

          {/* Reusable TaskCard */}
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
            />
          ))}

        </div>

      </section>

    </main>
  );
}

export default App;