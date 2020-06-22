const API = 'https://restcountries.eu/rest/v2/all';
const API_COUNTRY = (name) => `https://restcountries.eu/rest/v2/name/${name}?fullText=true`;

const getCountries = async () => {
  try{
    const data = await fetch(API).then(data => data.json());

    return data;
  }catch(err) {
    console.log(err, 'There is an error')
  }
}

const getCountry = async (name) => {
  try{
    const data = fetch(API_COUNTRY(name)).then(data => data.json());
    return data;
  } catch(err){
    console.log(err, 'There is an error')
  }

}

export {
  getCountries,
  getCountry
};