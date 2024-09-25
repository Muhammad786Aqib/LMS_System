import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url("your-image-url")`, // replace with your background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    padding: theme.spacing(4),
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    width: '100%',
  },
}));

export default useStyles;
