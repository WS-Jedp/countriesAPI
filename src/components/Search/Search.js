import styles from './search.module.css';
import Event from '../../tools/Events';
import Countries from '../../states/Countries';
import CurrentCountries from '../../states/CurrentCountries';

const Search = async () => {
  
  const event = new Event();
  // const countries = new Countries();
  const countries = await CurrentCountries();

  const view = `
    <form id="form__countries" class="${styles.formCountries}">
      <input type="text" id="filterCountries" placeholder="Search for a country..."></input>
        <select>
          <div class="select__options">
            <option disabled selected >Filter by region</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Oceania">Oceania</option>
            <option value="Europa">Europe</option>
          </div>
        </select>
    </form>    
  `;

  event.on('change', '#filterCountries', (ev) => {
    ev.preventDefault();
    let value = ev.target.value;
    countries.filterData(value);
    console.log(countries.currentCountries);
  })

  return view;
  
}

export default Search;