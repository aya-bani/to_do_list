import React from 'react';

function ProgressBar({ items }) {
  const total = items?.length || 0; // ✅ safe access
  const completed = items?.filter(item => item.completed).length || 0; // ✅ safe access
  const percentage = total === 0 ? 0 : (completed / total) * 100;

  return (
    <div>
      <div style={{ width: '100%', backgroundColor: '#ccc', height: '20px' }}>
        <div
          style={{
            width: `${percentage}%`,
            backgroundColor: '#4caf50',
            height: '100%',
          }}
        ></div>
      </div>
      <p>{completed} out of {total} tasks completed</p>
    </div>
  );
}

export default ProgressBar;
