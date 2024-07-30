import { useEffect, useState } from 'react';
import './App.css';

interface ProgressBarProps {
  value: number
}

export default function ProgressBar(props: ProgressBarProps): JSX.Element {
  const { value } = props;
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(0, value)));
  }, [value]);

  return (
    <div className='progress'>
      <p className='percent'>{percent.toFixed()}%</p>
      <div className='bar' style={{width: `${percent}%`}} >
      </div>
    </div>
  )
}
