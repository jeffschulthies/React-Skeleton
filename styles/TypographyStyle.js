import { StyleSheet } from 'aphrodite/no-important'

const TypographyStyle = StyleSheet.create({

    h1: {
      marginTop: '0',
      marginBottom: '2rem',
      fontWeight: '300',
      fontSize: '4.0rem', 
      fontFamily: 'Not-Roman',
      fontWeight: 'bold',
      lineHeight: '1.2',
      letterSpacing: '-.1rem',

      '@media (min-width: 550px)': {
        fontSize: '5.0rem'
      }
    },

    h2: {
      marginTop: '0',
      marginBottom: '2rem',
      fontWeight: '300',
      fontSize: '3.6rem', 
      fontFamily: 'Not-Roman',
      fontWeight: 'bold',
      lineHeight: '1.25',
      letterSpacing: '-.1rem',

      '@media (min-width: 550px)': {
        fontSize: '4.2rem'
      }
    },

    h3: {
      marginTop: '0',
      marginBottom: '2rem',
      fontWeight: '300',
      fontSize: '3.0rem', 
      fontFamily: 'Not-Roman',
      fontWeight: 'bold',
      lineHeight: '1.3',
      letterSpacing: '-.1rem',

      '@media (min-width: 550px)': {
        fontSize: '3.6rem'
      }
    },

    h4: {
      marginTop: '0',
      marginBottom: '2rem',
      fontWeight: '300',
      fontSize: '2.4rem',
      fontFamily: 'Not-Roman',
      fontWeight: 'bold',
      lineHeight: '1.35',
      letterSpacing: '-.08rem',

      '@media (min-width: 550px)': {
        fontSize: '3.0rem'
      }
    },

    h5: {
      marginTop: '0',
      marginBottom: '2rem',
      fontWeight: '300',
      fontSize: '1.8rem', 
      fontFamily: 'Not-Roman',
      fontWeight: '200',
      lineHeight: '1.5',
      letterSpacing: '-.0rem',

      '@media (min-width: 550px)': {
        fontSize: '2.4rem'
      }
    },

    h6: {
      marginTop: '0',
      marginBottom: '2rem',
      fontWeight: '300',
      fontSize: '1.5rem',
      fontFamily: 'Not-Roman',
      fontWeight: '200',
      lineHeight: '1.6',
      letterSpacing: '0rem',

      '@media (min-width: 550px)': {
        fontSize: '1.5rem'
      }

    },

    p: {
      marginTop: '0px'
    },

    Base: {
      fontFamily: 'Not-Roman',
      fontWeight: '200',
    }

});

export default TypographyStyle
