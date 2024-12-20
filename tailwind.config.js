/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss,sass}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 0 10px rgba(210, 0, 0, 1)',  //rgba(35, 0, 255, 0.9)
        '4xl': [ '0 0 5px rgba(35, 0, 255, 0.9)',
                 '0 0 10px rgba(0, 173, 255, 0.9)',
                 '0 0 15px rgba(0, 255, 98, 0.9)',],
        '5xl': '0 0 10px rgba(218, 0, 0, 0.8)',
      },

      // animation: {
      //   movin: 'scroll 20s linear infinite',
      // },
      // keyframes: {
      //   scroll: {
      //     '0%': { transaform: 'translateX(0)' },
      //     '100%': { transform: 'translateX(-100%)' },
      //   },
      // },

      animation: {
        cando: 'blink 15s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },


      fontFamily: {
        robo: ['Ballet', 'cursive'],
      },
      // colors: {
      //   customSlate: '#b0bec5', // Example custom color
      // },
    },

    screens: {
      'sm': '370px',
      'lg': '2560px',
    },

  },
  plugins: [],
};

