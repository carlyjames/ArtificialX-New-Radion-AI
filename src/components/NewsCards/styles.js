import { makeStyles } from '@material-ui/core/styles';


export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '45vh',
    padding: '10%',
    borderRadius: 10,
    color: 'white',
    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.25)',
    transition: 'all 0.2s',
    '&:hover': {
    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.4)',
    transform: 'scale(1)',
    },
    
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: '16px',
    zIndex : 2,
    color : 'white'
  },
  h1 : {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: '18px', 
    // borderBottom : '2px solid #BA0963',
    // border: '10px solid',
    borderImageSlice: 2,
    borderBottom: '3px solid',
    borderBottomWidth : '3px',
    borderImageSource: 'linear-gradient(to left,#0A62D0, #BA0950 )',
  },
  infoCard: {
    display: 'flex', 
    flexDirection: 'column', 
    textAlign: 'center',

  },
  container: {
    padding: '0 5%', 
    width: '100%', 
    margin: 0,
  },
});
