import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#102b27',
        pine: '#174d43',
        mint: '#dff1ec',
        meadow: '#eff8f4',
        honey: '#eec74d',
        sand: '#f7f3e9',
        cloud: '#f7faf9',
      },
      boxShadow: {
        soft: '0 24px 70px rgba(16, 43, 39, 0.10)',
        card: '0 18px 44px rgba(16, 43, 39, 0.09)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
