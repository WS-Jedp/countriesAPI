import styles from './search.module.css';

const Search = () => {
  
  const view = `
    <form id="form__countries" class="${styles.formCountries}">
      <input type="text" placeholder="Search for a country..." ></input>
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

  return view;
  
}

export default Search;