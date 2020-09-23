module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#ffffff',
        //blanc
        'accent-2': '#093d72',
        //bleu
        'accent-7': '#00ff59',
        //vert
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      fontFamily: {
        BigTitle: "'Montserrat Subrayada', 'sans- serif'",
        Title: "'Oswald', 'sans- serif'",
        Text: "'Montserrat', 'sans- serif'",
      },
    },
  },
}
