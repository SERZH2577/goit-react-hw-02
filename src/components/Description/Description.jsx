import css from './Description.module.css';

export default function Description({ titleSection, description }) {
  return (
    <div className={css.container}>
      <h1 className={css.title}>{titleSection}</h1>
      <p className={css.description}>{description}</p>
    </div>
  );
}
