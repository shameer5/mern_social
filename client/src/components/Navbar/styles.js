import { makeStyles } from "@material-ui/core/styles";
import { grey } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    display: 'flex',
    maxWidth: 1000
  },
  appBar: {
    backgroundColor: "rgb(40,40,40)"
  },
  title: {
    fontWeight: "bold",
    flexGrow: 1
  },
  createPostButton: {
    borderRadius: "2rem",
  },
  logout: {
    borderRadius: '2rem'
  },
  profile: {
    display: 'flex',
    justify: 'space-between'
  },
  spaces:{
    margin: theme.spacing(1)
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly"
    }
  },
  list: {
    width: 350,
    
  },
  fullList: {
    width: "auto",
  },
  avatar:{
    backgroundColor: grey[700],
  }  
}));