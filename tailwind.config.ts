import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '0',
      },
    },
    extend: {
      colors: {
        black: '#272D39',
        white: '#FFFCFA',
        orange: '#FF5F2E',
      },
    },
  },
  plugins: [],
};

export default config;
