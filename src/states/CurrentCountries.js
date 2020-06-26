import Countries from './Countries';

const CurrentCountries = async () => {
  const countries = await new Countries();
  await countries.getData();

  return countries;
}

export default CurrentCountries;