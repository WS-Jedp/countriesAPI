// Components
import ThemeButton from '../ThemeMode/ThemeMode';

// Styles
import styles from './style.module.css';

const Header = () => {
  const view = `
  <div class='${styles.myHeader}'>
    <h1 class='${styles.title}'>
      Where in the World?
    </h1>
    <div>
      ${ThemeButton()}
    </div>
  </div>
  `;

  return view;
}

export default Header;