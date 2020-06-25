import getHash from './getHash';
import resolveRoute from './resolveRoute'
import '../assets/styles/main.module.css';

// Views
import Header from '../components/Header/Header';
import Home from '../pages/Home/Home';
import CountryDetail from '../pages/CountryDetail/CountryDetail';


const routes = {
  '/': Home,
  '/:id': CountryDetail,
}

const router = async () => {
  const header = document.getElementById('header');
  const app = document.getElementById('app');

  header.innerHTML = await Header();
  
  const currentRoute = getHash();
  const route = await resolveRoute(currentRoute);
  let render = routes[route] ? routes[route] : 'Error';

  app.innerHTML = await render();
}

export default router;
