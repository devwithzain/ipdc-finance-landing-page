import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './animation/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
      },
    },
    screens: {
      sm: { min: "200px", max: '768px' },
      md: { min: "768px", max: '1025px' },
      lg: '1026px'
    },
  },
  plugins: [],
};
export default config;
