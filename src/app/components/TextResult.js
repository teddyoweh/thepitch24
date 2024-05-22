import {Text} from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';

const TextResult = ({text, delay}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);
  return (
    <Text w='500px' mt='1rem' fontFamily={'GT America'}>
      {currentText}
    </Text>
  );
};

export default TextResult;
