import React from 'react';
import './FrameworkDisplay.css';

function FrameworkDisplay({ data }) {
  if (!data) {
    return <div className="no-data">No framework data available</div>;
  }

  return (
    <div className="framework-display">
      <h2>Disability Accommodation Framework</h2>
      <div className="categories">
        {data.map((category, index) => (
          <div key={index} className="category-card">
            <h3>{category.category}</h3>
            <ul>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrameworkDisplay;