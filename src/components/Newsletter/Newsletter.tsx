import { useState, type FormEvent } from "react";
import "./Newsletter.scss";

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__inner">
        <div className="newsletter__copy">
          <h2 id="newsletter-title">Inscreva-se na nossa newsletter</h2>
          <p>
            Assine nossa newsletter e receba as novidades e condições exclusivas
            da Econverse.
          </p>
        </div>
        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__fields">
            <label className="sr-only" htmlFor="newsletter-name">Digite seu nome</label>
            <input
              id="newsletter-name"
              type="text"
              placeholder="Digite seu nome"
              autoComplete="name"
              required
            />
            <label className="sr-only" htmlFor="newsletter-email">Digite seu e-mail</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Digite seu e-mail"
              autoComplete="email"
              required
            />
            <button type="submit">{subscribed ? "Inscrito!" : "Inscrever"}</button>
          </div>
          <label className="newsletter__terms">
            <input type="checkbox" required />
            <span>Aceito os termos e condições</span>
          </label>
          {subscribed && (
            <span className="newsletter__success" role="status">
              Obrigado por se inscrever!
            </span>
          )}
        </form>
      </div>
    </section>
  );
}
