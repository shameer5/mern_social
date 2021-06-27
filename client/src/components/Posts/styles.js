import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  myMasonryGrid :{
    display: 'flex',
    marginLeft: '-30px', /* gutter size offset */
    width: 'auto'
  },
  myMasonryGridColumn :{
    paddingLeft: '30px', /* gutter size */
    backgroundClip: 'padding-box',
  },
  
  /* Style your items */
  masonryDiv: {
    marginBottom: '30px',
  },
  loading :{
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    height: '85vh'
  }
}));
