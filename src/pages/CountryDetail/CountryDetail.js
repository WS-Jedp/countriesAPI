import styles from './country.module.css';
import gethash from '../../routes/getHash';
import { getCountry } from '../../services/countries';

const CountryDetail = async () => {
  let name = location.hash.slice(1).toLocaleLowerCase().split('/')[2];
  const serviceCountry = await getCountry(name);
  console.log(serviceCountry);
  const countryData = serviceCountry[0];
  const view = `
    <section class="${styles.country}">
      <a class="${styles.country__back}" href="#/">
        Back
      </a>

      <article class="${styles.country__content}">
        <figure class="${styles.country__image}">
          <img src="${countryData.flag}" alt="${countryData.name}" />
        </figure>

        <div class="${styles.country__information}">
          <h2>${countryData.name}</h2>
          <div class="${styles.country__data}">
            <ul>
              <li>
                <p>
                  <strong>Native Name:</strong> ${countryData.nativeName} 
                </p>
              </li>
              <li>
                <p>
                  <strong>Population:</strong> ${countryData.population} 
                </p>
              </li>
              <li>
                <p>
                  <strong>Region:</strong> ${countryData.population} 
                </p>
              </li>
              <li>
                <p>
                  <strong>Sub Region:</strong> ${countryData.subregion} 
                </p>
              </li>
              <li>
                <p>
                  <strong>Capital:</strong> ${countryData.capital} 
                </p>
              </li>
            </ul>

            <ul>
             <li>
                <p>
                  <strong>Top Level Domain:</strong> ${countryData.topLevelDomain[0]} 
                </p>
              </li>
              <li>
                <p>
                  <strong>Currencies:</strong> ${countryData.currencies[0].code } 
                </p>
              </li>
              <li>
                <p>
                  <strong>Languages:</strong> ${countryData.languages[0].name} 
                </p>
              </li>
            </ul>
          </div>
          <p class="${styles.country__borders}">
            <strong>Border countries:</strong>
              ${countryData.borders.map(data => `<a>${data}</a>`).join('')}
          </p>
        </div>
      </article>
    </section>
  `;

  return view;
}

export default CountryDetail;