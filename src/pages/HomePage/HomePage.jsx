import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section className={css.hero}>
      <div className={css.content}>
        <h1 className={css.title}>Welcome to Phonebook</h1>

        <p className={css.text}>
          Store, organize and manage your contacts securely in one place.
        </p>

        <p className={css.subtext}>
          Create your personal contact collection and access it anytime.
        </p>
      </div>
    </section>
  );
}
