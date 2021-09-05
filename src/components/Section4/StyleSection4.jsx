import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  section4: {
    width: '100%',
    height: '30vh',
    backgroundColor: '#222',
    padding: '3rem 0',
    position: 'relative',
    '@media (max-width:1000px)': {
      height: '30rem',
    },
    '@media (max-width:700px)': {
      height: '40rem',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  },
  section4text: {
    textTransform: 'uppercase',
    '@media (max-width:700px)': {
      marginBottom: '8rem',
    },
  },
  section4heading: {
    fontSize: '4rem',
    fontWeight: '900',
    color: '#a79a2d',
  },
  section4paragraph: {
    fontSize: '1.5rem',
    color: '#888',
  },
  signupforminput: {
    width: '35rem',
    height: '5rem',
    padding: '1rem',
    border: '0.2rem solid #a79a2d',
    fontSize: '1.6rem',
    fontWeight: '700',
    letterSpacing: '0.1rem',
    color: '#a79a2d',
    '&::placeholder': {
      color: '#a79a2d',
    },
  },
  signupformbtn: {
    position: 'relative',
    left: '-4.5rem',
    width: '4rem',
    height: '4rem',
    backgroundColor: '#333',
    color: '#a79a2d',
    border: 'none',
    fontSize: '1.8rem',
    cursor: 'pointer',
  },
  copyright: {
    position: 'absolute',
    bottom: '3rem',
    fontSize: '1.7rem',
    fontWeight: '200',
    color: '#eee',
    letterSpacing: '0.1rem',
    borderTop: '0.1rem solid #888',
    paddingTop: '6rem',
    width: '100%',
    textAlign: 'center',
  },
}

));

export default useStyles;
