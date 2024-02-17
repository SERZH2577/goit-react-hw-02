import { useState } from 'react';
import { useEffect } from 'react';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import './App.css';

const getInitialClicks = () => {
  const storageClicks = localStorage.getItem('clicks');

  if (storageClicks) {
    return JSON.parse(storageClicks);
  }

  return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
};

export default function App() {
  const [clicks, setClicks] = useState(getInitialClicks);

  useEffect(() => {
    localStorage.setItem('clicks', JSON.stringify(clicks));
  }, [clicks]);

  const handleClick = key => {
    setClicks({ ...clicks, [key]: clicks[key] + 1 });
  };

  const handelReset = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        clicks={clicks}
        onAddsFeedback={handleClick}
        onReset={handelReset}
      />
      <Feedback value={clicks} />
    </>
  );
}
