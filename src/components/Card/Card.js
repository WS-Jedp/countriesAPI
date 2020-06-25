import styles from './styles.module.css';

// Services
const Card = (flag, name, population, region, capital ) => {
  const view = `
  <article class="${styles.card}">
    <a href="#/country/${name}">
        <figure class="${styles.card__image}">
          <img src="${flag}" alt="${name}"></img>
        </figure>
        <div class="${styles.card__content}">
          <h2 class="${styles.card__title}">${name}</h2>
          <p>
            <strong>Population:</strong> ${population}
          </p>
          <p>
            <strong>Region:</strong> ${region}
          </p>
          <p>
            <strong>Capital:</strong> ${capital}
          </p>
        </div>
      </a>
    </article>
  `;

  return view;
}

export default Card;