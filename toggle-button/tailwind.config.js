/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        textColor: {
          DEFAULT: "var(--textColor)",
        },
        bgColor: {
          DEFAULT: "var(--bgColor)",
        },
        borderColor: {
          DEFAULT: "var(--borderColor)",
        },
      }
    },
  },
  plugins: [
    forms,
  ],
};
