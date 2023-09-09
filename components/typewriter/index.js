import React, { useEffect, useState } from 'react';

const TypewriterComponent = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      if (currentIndex < text.length && isTyping) {
        setDisplayedText((prevText) => prevText + text.charAt(currentIndex));
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setIsTyping(false);
      }
    }, 100); // Adjust the typing speed by changing the timeout duration

    return () => {
      clearTimeout(typingTimeout);
    };
  }, [text, currentIndex, isTyping]);

  // Function to toggle the cursor on and off
  const toggleCursor = () => {
    return isTyping ? '|' : '';
  };

  return (
    <div>
      <div>{displayedText + toggleCursor()}</div>
    </div>
  );
};

export default TypewriterComponent;
