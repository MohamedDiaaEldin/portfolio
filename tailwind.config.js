/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F172A',
          dark: '#020617',
          light: '#1E293B'
        },
        accent: {
          DEFAULT: '#06B6D4',
          light: '#22D3EE',
          dark: '#0891B2'
        },
        slate: {
          DEFAULT: '#334155',
          light: '#CBD5E1',
          lighter: '#F1F5F9'
        },
        // Semantic color tokens
        text: {
          primary: '#FFFFFF',
          secondary: '#CBD5E1',
          muted: '#94A3B8'
        },
        border: {
          divider: '#334155',
          accent: '#06B6D4',
          'accent-light': 'rgba(6, 182, 212, 0.2)'
        },
        surface: {
          DEFAULT: '#0F172A',
          elevated: '#1E293B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif']
      },
      fontSize: {
        // Typography scale - responsive headings
        'h1': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 36px
        'h1-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 48px
        'h1-lg': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 60px
        'h1-xl': ['4.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 72px
        'h2': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }], // 30px
        'h2-md': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }], // 36px
        'h2-lg': ['3rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }], // 48px
        'h3': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }], // 24px
        'h3-md': ['1.875rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }], // 30px
        'h3-lg': ['2.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }], // 36px
        // Body text
        'body': ['1rem', { lineHeight: '1.6' }], // 16px
        'body-lg': ['1.125rem', { lineHeight: '1.6' }], // 18px
        'body-xl': ['1.25rem', { lineHeight: '1.6' }], // 20px
        // Legacy hero sizes (will be replaced)
        'hero': ['4.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'hero-mobile': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      // Icon size tokens
      iconSize: {
        'sm': '1rem',    // 16px
        'md': '1.25rem', // 20px
        'lg': '1.5rem',  // 24px
        'xl': '2rem'     // 32px
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'gradient': 'gradient 3s ease infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(6, 182, 212, 0.4)',
        'glow-lg': '0 0 30px rgba(6, 182, 212, 0.5)'
      }
    },
  },
  plugins: [],
}


