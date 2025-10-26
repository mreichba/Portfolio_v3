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
        glow: '0 25px 60px -30px rgba(99, 102, 241, 0.55)',
      },
      backgroundImage: {
        'subtle-radial':
          'radial-gradient(circle at 20% 20%, rgba(79,70,229,0.12), transparent 40%), radial-gradient(circle at 80% 0%, rgba(34,211,238,0.12), transparent 45%)',
        'aurora-light':
          'radial-gradient(120% 120% at 0% 0%, rgba(99,102,241,0.16) 0%, transparent 48%), radial-gradient(90% 90% at 100% 0%, rgba(6,182,212,0.18) 0%, transparent 52%), linear-gradient(180deg, rgba(247,249,252,1) 0%, rgba(236,242,255,1) 42%, rgba(233,252,255,1) 100%)',
        'aurora-dark':
          'radial-gradient(120% 120% at 0% 0%, rgba(99,102,241,0.35) 0%, transparent 55%), radial-gradient(100% 100% at 100% 0%, rgba(6,182,212,0.32) 0%, transparent 58%), linear-gradient(180deg, rgba(7,12,28,1) 0%, rgba(9,16,35,1) 40%, rgba(14,23,51,1) 100%)',
        'aurora-card':
          'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.2), transparent 55%), radial-gradient(circle at 80% 0%, rgba(6,182,212,0.18), transparent 50%), linear-gradient(150deg, rgba(255,255,255,0.96), rgba(240,245,255,0.92))',
        'aurora-card-dark':
          'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.24), transparent 55%), radial-gradient(circle at 80% 0%, rgba(6,182,212,0.26), transparent 50%), linear-gradient(150deg, rgba(17,24,39,0.94), rgba(12,19,40,0.92))',
        'aurora-ribbons':
          'radial-gradient(120% 120% at 15% 18%, rgba(99,102,241,0.35) 0%, transparent 58%), radial-gradient(110% 110% at 85% 12%, rgba(56,189,248,0.28) 0%, transparent 60%), radial-gradient(160% 160% at 55% 85%, rgba(196,181,253,0.25) 0%, transparent 65%), radial-gradient(140% 140% at 20% 88%, rgba(45,212,191,0.22) 0%, transparent 68%)',
        'aurora-flares':
          'conic-gradient(from 90deg at 20% 20%, rgba(79,70,229,0.25), rgba(236,72,153,0.22), transparent 70%), conic-gradient(from -45deg at 80% 12%, rgba(14,165,233,0.25), rgba(59,130,246,0.2), transparent 65%)',
      },
    },
  },
  plugins: [],
};

export default config;
