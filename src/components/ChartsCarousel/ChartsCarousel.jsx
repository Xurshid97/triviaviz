import React, { useState } from 'react';
import './ChartsCarousel.css';

const ChartsCarousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = React.Children.count(children);

  const labels = ["By Category", "By Difficulty"];

  return (
    <div className="charts-carousel">

      {total > 1 && (
        <div className="carousel-buttons">
          {labels.map((label, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={currentIndex === index ? 'active' : ''}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          style={{
            display: index === currentIndex ? 'block' : 'none',
          }}
        >
          {child}
        </div>
      ))}

    </div>
  );
};

export default ChartsCarousel;
