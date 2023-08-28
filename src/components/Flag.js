const Flag = (props) => {
  let flagName = props.flag;

  if (flagName === 'uk') flagName = 'gb';

  const flagUrl = `https://cdn.refinitiv.net/public/libs/elf/assets/elf-theme-halo/resources/flags/${flagName}.svg`;
  return <img src={flagUrl} alt={flagName} className='w-4'></img>;
};

export default Flag;
