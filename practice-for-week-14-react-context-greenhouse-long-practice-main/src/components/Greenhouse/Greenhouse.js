import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useTheme } from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {

  const {themeName, setThemeName} = useTheme();

  const dayOrNight = () => {
    if (themeName === 'day') {
      return dayImage;
    } else if (themeName === 'night') {
      return nightImage;
    };
  }

  return (
    <section>
      <img  className='greenhouse-img'
            src={dayOrNight()}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
    
  );
}

export default Greenhouse;