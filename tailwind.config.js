module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true ,
      padding: '16px',
    colors: {
      orange: '#ea580c',
    }
    },
    extend: {
      colors: {
        timeline: '#64748b' ,
        primary: '#14b8a6' ,
        second: '#64748b' ,
        dark: '#1e293b' ,
        riwayat: '#334155' ,

      },
      screens: {
        '2xl' : '1320px',
      },
      FontFace:{
        worksans:['Work Sans'],
        jakartasans:['Plus Jakarta Sans'],
        roboto:['Roboto']

      }
    },
  },
  plugins: [],
}
