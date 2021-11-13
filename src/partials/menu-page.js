import menuTpl from './templates/template.hbs';
import menuArray from './json/menu.json';

const menu = document.querySelector('.js-menu');
const menuMarkup = menuTpl(menuArray);
const checkboxThemeSwitch = document.getElementById('theme-switch-toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

menu.insertAdjacentHTML('afterbegin', menuMarkup);

checkboxThemeSwitch.addEventListener('change', handleThemeSwitch);

function handleThemeSwitch(e) {
  e.preventDefault();
  document.body.classList.toggle(Theme.DARK);

  if (!checkboxThemeSwitch.checked) {
    document.body.classList.add(Theme.LIGHT);

    localStorage.setItem('theme', Theme.LIGHT);
  } else if (checkboxThemeSwitch.checked) {
    document.body.classList.remove(Theme.LIGHT);

    localStorage.setItem('theme', Theme.DARK);
  }
}
const currentTheme = localStorage.getItem('theme');

document.body.classList.add(currentTheme);

// if (currentTheme === Theme.DARK) {
//   return (checkboxThemeSwitch.checked = true);
// }
