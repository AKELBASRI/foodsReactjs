import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  section1: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#333',
  },
  section1icons: {
    '& svg': {
      fontSize: '35rem',
      color: '#a79a2d',
      position: 'absolute',
      transform: 'translate(-50%, -50%) scale(0)',
      textShadow: '0.2rem 0.2rem 0.2rem #000',
      transition: 'transform 0.3s',
      '&.change': {
        transform: 'translate(-50%, -50%) scale(1)',
        transition: 'transform 0.3s 0.3',
      },
      '@media (max-width:1000px)': {
        fontSize: '25rem',

      },
    },
  },
}));
export default useStyles;
