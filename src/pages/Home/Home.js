// Styles
import styles from './styles.module.css';

// services
  import {getCountries} from '../../services/countries';

// Components
import Card from '../../components/Card/Card';
import Search from '../../components/Search/Search';
import Countries from '../../states/Countries';
import CurrentCountries from '../../states/CurrentCountries';

const Home = async () => {
  // const countries = await new Countries();
  // await countries.getData();
  // const data = await countries.getCurrentCountries();
  const countries = await CurrentCountries();
  const data = countries.currentCountries;

  const mapData = () => {
    // return data.map( data => {
    //   return Card(data.flag, data.name, data.population, data.region, data.capital);
    // }).join('')
    console.log('Hello');
  }

  const proxy = new Proxy(data, function(tar, som, oth){
    console.log(tar, som, oth)
  })
  
  const view = `
    <section class="${styles.home}">
      <nav class="${styles.home__nav}">
        ${await Search()}
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
