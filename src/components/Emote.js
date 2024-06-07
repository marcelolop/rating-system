import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function Emote({ selectedStars }) {
  const container = useRef(null);
  const animation = useRef(null);

  useEffect(() => {
    const animations = [
        'https://lottie.host/2083fae6-b9f9-469c-898e-798c3cf5f758/0UJrdLY048.json',
        'https://lottie.host/3f341467-80fd-43a5-b8b8-a287ab3f4060/ZouoEsiy0b.json',
        'https://lottie.host/8553c46a-0d8a-4d27-8f64-c978c9dd76da/1UX6XZKbZA.json',
        'https://lottie.host/362daa7f-70bb-43df-be8a-775a004faaf3/EvqOQ1C44E.json',
        'https://lottie.host/e6e80aa0-ec1d-4dbb-b9cb-be4017f61ca0/wPxPOYtmSg.json'
    ];

    if (selectedStars > 0) {
      // Destroy the previous animation if it exists
      if (animation.current) {
        animation.current.destroy();
      }

      // Load the new animation
      animation.current = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animations[selectedStars - 1]
      });
    }
  }, [selectedStars]);

  return <div ref={container} className="emote-container" />;
}

export default Emote;
