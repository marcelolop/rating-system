import React, { useState } from 'react';
import Star from './Star';
import Emote from './Emote';

function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  const starDescriptions = ["Horrible", "Bad", "Okay", "Good", "Excellent"];
  const descriptionColors = ["#FF0000", "#FF7F00", "#FFFF00", "#00a9d8", "#00FF00"];

  return (
    <div className="star-rating">
      <div className="stars">
        {[...Array(totalStars)].map((_, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i + 1)}
          />
        ))}
      </div>
      <h2 className="star-description" style={{color: descriptionColors[selectedStars - 1]}}>
        {starDescriptions[selectedStars - 1]}
      </h2>
      <Emote selectedStars={selectedStars} />
    </div>
  );
};

export default StarRating;