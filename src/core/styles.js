import { makeStyles } from '@material-ui/core/styles';

const corestyles = makeStyles(() => ({
  sectionheading: {
    marginBottom: '90px',
    fontSize: '12rem',
    color: '#fff',
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'capitalize',
    letterSpacing: '0.5rem',
    textShadow: ' 0.3rem 0.3rem 0.3rem #000',
    '@media (max-width:1000px)': {
      fontSize: '9rem',
      margin: '0 5rem',
    },
    '@media (max-width:700px)': {
      fontSize: '7rem',
      margin: '0 10rem',
    },
  },
}));
export default corestyles;
