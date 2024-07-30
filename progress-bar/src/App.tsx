import { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from './ProgressBar';

export default function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      if ([35, 47, 65, 71, 83, 92].includes(value)) {
        setTimeout(() => {
          setValue((prev) => prev + 1);
        }, 1000);
      } else {
        setValue((prev) => prev + 1);
      }
    }, 100);

    /* 
      we have to add clean up for this interval,
      but it eliminates the current interval before exiting so it makes long time to complete
    */
  }, [value])

  return (
    <div className='app'>
      <p>Progress</p>
      <ProgressBar value={value} />
    </div>
  )
}
