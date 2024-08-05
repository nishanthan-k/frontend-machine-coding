import { useEffect, useRef, useState } from "react";
import "../App.css";

interface OtpFormProps {
  handleSubmit: (enteredOtp: string) => void,
  length?: number,
  type?: string,
  onlyNumbers?: boolean,
}

export default function OtpForm(props: OtpFormProps) {
  const { length=4, type='text', onlyNumbers=true, handleSubmit } = props;
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, [])

  const handleChange = (e: React.FormEvent<HTMLInputElement>, index: number) => {
    const value = e.currentTarget.value;
    const regex: RegExp = /^\d+$/;

    if (!value.match(regex) && onlyNumbers) return;
    
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp); 

    if (index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs?.current[index + 1]?.focus();
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && index > 0) {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);

      inputRefs?.current[index - 1]?.focus();
    }
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(otp.join(''));
  }

  return (
    <div>
      <form className="otp-form" onSubmit={submitHandler}>
        <div className="otp-input-container">
        {otp.map((value, index) => (
          <input
            className="otp-input"
            key={index}
            type={type}
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(ref) => inputRefs.current[index] = ref}
          />
        ))}
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  )
}
