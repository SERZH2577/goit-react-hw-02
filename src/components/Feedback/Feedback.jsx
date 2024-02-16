import css from './Feedback.module.css';

export default function Feedback({ value: { good, neutral, bad } }) {
  const total = good + neutral + bad;
  const percents = (good + neutral) / (total / 100);

  const initialMarkup = (
    <div className={css.container}>
      <p>No feedback yet</p>
    </div>
  );

  const feedbackMarkup = (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          <p>Good: {good}</p>
        </li>
        <li className={css.item}>
          <p>Neutral: {neutral}</p>
        </li>
        <li className={css.item}>
          <p>Bad: {bad}</p>
        </li>
        <li className={css.item}>
          <p>Total: {total}</p>
        </li>
        <li className={css.item}>
          <p>Positive: {Math.round(percents)}%</p>
        </li>
      </ul>
    </div>
  );

  return good || neutral || bad ? feedbackMarkup : initialMarkup;
}
