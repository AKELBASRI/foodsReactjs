import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  section3: {
    backgroundColor: '#333',
  },
  gallery: {
    marginTop: '10rem',

  },
  gallerylink: {
    position: 'relative',
    margin: '4rem 1rem',
    '&::before': {
      content: "''",
      position: 'absolute',
      top: '2vw',
      left: '80%',
      width: '0.2rem',
      height: '0',
      backgroundColor: '#fff',
      transition: 'height 0.5s',
      zIndex: '10',
    },
    '&:hover::before': {
      height: '80%',
    },
    '&::after': {
      content: "''",
      position: 'absolute',
      top: '30%',
      left: '2rem',
      width: '0',
      height: '0.2rem',
      backgroundColor: '#fff',
      transition: 'width 0.5s',
    },
    '&:hover::after': {
      width: '90%',
    },
    '&:hover img': {
      boxShadow: '1rem 1rem 0.1rem #e92929, 2rem 2rem 0.1rem #a2e946,3rem 3rem 0.1rem #297ce9, 4rem 4rem 0.1rem #e92999',
      filter: 'blur(0.5rem)',
      opacity: '0.5',
      transform: 'scale(1.1)',
    },
    '&:hover h3': {
      width: '100%',
      transition: 'width 1.5s 0.5s',

    },
    '&:hover p': {
      opacity: 1,
      visibility: 'visible',
      transition: 'opacity 1s 1s',
    },
    '@media (max-width:1400px)': {
      width: '40rem',
      height: '25rem',
      margin: '5rem',
    },
  },
  foodimg: {
    width: '24vw',
    height: '15vw',
    objectFit: 'cover',
    boxShadow: '0.3rem 0.3rem 0.1rem #e92929, 0.5rem 0.5rem 0.1rem #a2e946,0.7rem 0.7rem 0.1rem #297ce9, 0.9rem 0.9rem 0.1rem #e92999',
    transition: 'all 0.5s',
    '@media (max-width:1400px)': {
      width: '100%',
      height: '100%',
    },
  },
  foodname: {
    position: 'absolute',
    top: '3rem',
    left: '3rem',
    fontSize: '2rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.1rem',
    color: '#fff',
    width: '0',
    overflow: 'hidden',
    transition: 'width 0.3s',
  },
  description: {
    position: 'absolute',
    bottom: '3vw',
    left: '2rem',
    width: '70%',
    fontSize: '1.5rem',
    fontWeight: '300',
    letterSpacing: '0.1rem',
    textTransform: 'uppercase',
    color: '#fff',
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity 0.3s',
  },
}));
export default useStyles;
