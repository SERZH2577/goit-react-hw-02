import css from './Options.module.css';

export default function Options({ onAddsFeedback, onReset, isHidden }) {
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
