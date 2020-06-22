import './assets/styles/main.module.css';
import Header from './components/Header/Header';

import router from './routes/routes';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);