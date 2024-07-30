import { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from './ProgressBar';

export default function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((prev) => prev + 1);
    }, 100)
  })

  return (
    <div className='app'>
      <p>Progress</p>
      <ProgressBar value={value} />
    </div>
  )
}
