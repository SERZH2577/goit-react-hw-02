import css from './Feedback.module.css';

export default function Feedback({
  value: { good, neutral, bad },
  totalFeedback,
  percents,
}) {
  return (
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
          <p>Total: {totalFeedback}</p>
        </li>
        <li className={css.item}>
          <p>Positive: {percents}%</p>
        </li>
      </ul>
    </div>
  );
}
