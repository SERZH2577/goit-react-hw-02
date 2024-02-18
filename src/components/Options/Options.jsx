import css from './Options.module.css';

const feedbackType = { good: 'good', neutral: 'neutral', bad: 'bad' };

export default function Options({ onAddFeedback, onReset, isHidden }) {
  return (
    <div className={css.container}>
      <button
        className={css.btn}
        onClick={() => {
          onAddFeedback(feedbackType.good);
        }}
      >
        Good
      </button>

      <button
        className={css.btn}
        onClick={() => {
          onAddFeedback(feedbackType.neutral);
        }}
      >
        Neutral
      </button>

      <button
        className={css.btn}
        onClick={() => {
          onAddFeedback(feedbackType.bad);
        }}
      >
        Bad
      </button>

      <button className={css.btn} hidden={isHidden} onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
