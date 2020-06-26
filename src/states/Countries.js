import { getCountries } from '../services/countries';

class Countries {
  constructor(){
    this.data;
    this.currentCountries;
  }

  async getData(){
    this.data = await getCountries();
    this.currentCountries = this.data
  }

  getCurrentCountries(){
    return this.currentCountries
  }
  
  filterData(value){
    const filteredCountries = this.data.filter(country => country.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
    this.currentCountries = filteredCountries;
    return filteredCountries;
  }
}
 
export default Countries;
