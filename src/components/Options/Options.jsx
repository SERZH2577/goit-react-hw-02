import css from './Options.module.css';

export default function Options({
  clicks: { good, neutral, bad },
  onAddsFeedback,
  onReset,
}) {
  const isHidden = good === 0 && neutral === 0 && bad === 0;

  return (
    <div className={css.container}>
      <button
        className={css.btn}
        onClick={() => {
          onAddsFeedback('good');
        }}
      >
        Good
      </button>

      <button
        className={css.btn}
        onClick={() => {
          onAddsFeedback('neutral');
        }}
      >
        Neutral
      </button>

      <button
        className={css.btn}
        onClick={() => {
          onAddsFeedback('bad');
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
