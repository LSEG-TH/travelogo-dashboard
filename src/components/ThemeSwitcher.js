import React from 'react';
import Toggle from './Toggle';

const ThemeSwitcher = ({ theme }) => {
  const handleToggled = (event) => {
    const newTheme = event.detail.value ? 'dark' : 'light';
    sessionStorage.setItem('elf-theme', newTheme);
    window.location.reload();
  };

  return (
    <div className='button-group'>
      Theme:
      <Toggle
        className='theme-switcher'
        label='light'
        checkedLabel='dark'
        checked={theme === 'dark'}
        onChange={handleToggled}
      ></Toggle>
    </div>
  );
};

export default ThemeSwitcher;
