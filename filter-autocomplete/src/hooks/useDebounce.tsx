import { useEffect, useState } from "react";

export default function useDebounce(input: string, delay: number) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setValue(input);
    }, delay);

    return () => clearTimeout(handler);
  })

  return value;
}
