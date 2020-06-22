// Styles
import styles from './styles.module.css';

// services
import {getCountries} from '../../services/countries';

// Components
import Card from '../../components/Card/Card';
import Search from '../../components/Search/Search';

const Home = async () => {
  const data = await getCountries();

  const view = `
    <section class="${styles.home}">
      <nav class="${styles.home__nav}">
        ${Search()}
      </nav>
      
      <div class="${styles.home__cards}"> 
        ${data.map( data => {
          return Card(data.flag, data.name, data.population, data.region, data.capital);
        }).join('')}
      </div>
    </section>
  `;

  return view;
}  

export default Home;
