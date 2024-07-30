import { useEffect, useState } from 'react';
import '../App.css';
import { MAX, MIN } from '../global/Constant';

interface ProgressBarProps {
  value: number,
  onStart?: () => void,
  onComplete?: () => void,
}

export default function ProgressBar(props: ProgressBarProps): JSX.Element {
  const { value = MIN, onStart = () => {}, onComplete = () => {} } = props;
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(0, value)));

    if (percent === MIN) {
      onStart();
    }

    if (percent === MAX) {
      onComplete();
    }
  }, [value, percent, onStart, onComplete]);

  return (
    <div className='progress'>
      <p className='percent'>{percent.toFixed()}%</p>
      <div className='bar' style={{width: `${percent}%`}} >
      </div>
    </div>
  )
}
