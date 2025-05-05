// src/components/ScratchVisualizer.js
import React from 'react';

function ScratchVisualizer({ stars }) {
  const blockWidth = Math.min(stars / 10, 100); // Basic scaling for width

  return (
    <div className="scratch-visualizer">
      <div className="scratch-block" style={{ width: `${blockWidth}%` }}>
        Stars: {stars}
      </div>
      {/* You can add more sophisticated visual elements here based on other repo data */}
    </div>
  );
}

export default ScratchVisualizer;