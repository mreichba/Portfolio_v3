import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f1f2f8',
          100: '#e1e5f1',
          200: '#c2cade',
          300: '#9aa6c7',
          400: '#7383ae',
          500: '#556497',
          600: '#40507c',
          700: '#323e62',
          800: '#252d47',
          900: '#0b1020',
        },
        paper: '#f7f9fc',
        indigo: {
          50: '#eef2ff',
          400: '#6366f1',
          500: '#4f46e5',
          600: '#4338ca',
        },
        cyan: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
        screens: {
          '2xl': '1280px',
        },
      },
      boxShadow: {
        surface: '0 20px 40px -24px rgba(15, 23, 42, 0.45)',
      },
      backgroundImage: {
        'subtle-radial':
          'radial-gradient(circle at 20% 20%, rgba(79,70,229,0.12), transparent 40%), radial-gradient(circle at 80% 0%, rgba(34,211,238,0.12), transparent 45%)',
      },
    },
  },
  plugins: [],
};

export default config;

