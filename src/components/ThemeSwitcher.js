import Toggle from './Toggle';

const ThemeSwitcher = ({ theme }) => {
  const handleToggled = (event) => {
    const newTheme = event.detail.value ? 'dark' : 'light';
    sessionStorage.setItem('elf-theme', newTheme);
    window.location.reload();
  };

  return (
    <Toggle
      label='☀️'
      checkedLabel='🌙'
      checked={sessionStorage.getItem('elf-theme') === 'dark'}
      onChange={handleToggled}
    ></Toggle>
  );
};

export default ThemeSwitcher;
