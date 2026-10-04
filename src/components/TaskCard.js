import React from "react";

// Reusable card for each task
function TaskCard({ task }) {
  return (
    <article className="task-card">

      <div className="card-top">
        <span className="task-number">TASK #{task.id}</span>
        <span className="status-dot"></span>
      </div>

      <div className="task-content">
        <h3>{task.title}</h3>

        <p className="category-label">
          {task.category}
        </p>
      </div>

      <div className="card-footer">
        <span>Campus Task</span>
        <span className="arrow">→</span>
      </div>

    </article>
  );
}

export default TaskCard;