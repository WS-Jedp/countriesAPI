import styles from './theme.module.css';

const ThemeMode =  () => {
  
  const view = `
    <a id="${styles.btn__theme}}" class="${styles.button__theme}">
      <h3>Dark Mode</h3> 
    </a>
  `;
  return view;
}

export default ThemeMode;