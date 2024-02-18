import { useState } from 'react';
import { useEffect } from 'react';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';
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

  const updateFeedback = feedbackType => {
    setClicks({ ...clicks, [feedbackType]: clicks[feedbackType] + 1 });
  };

  const handleReset = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const percents = Math.round(
    ((clicks.good + clicks.neutral) / totalFeedback) * 100,
  );
  const isHidden =
    clicks.good === 0 && clicks.neutral === 0 && clicks.bad === 0;

  const message = 'No feedback yet';
  const titleSection = 'Sip Happens Café';
  const description =
    'Please leave your feedback about our service by selecting one of the options below.';

  return (
    <>
      <Description description={description} titleSection={titleSection} />
      <Options
        clicks={clicks}
        onAddFeedback={updateFeedback}
        onReset={handleReset}
        isHidden={isHidden}
      />
      {!isHidden ? (
        <Feedback
          value={clicks}
          totalFeedback={totalFeedback}
          percents={totalFeedback !== 0 ? percents : 0}
        />
      ) : (
        <Notification message={message} />
      )}
    </>
  );
}
