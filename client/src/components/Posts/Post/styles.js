import { makeStyles, } from "@material-ui/core";
import { grey } from '@material-ui/core/colors';
export default makeStyles( (theme) =>({
    card: {
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
        backgroundColor: 'rgb(40,40,40)',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset'
        
    },
    picture: {
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
    },
    content: {
        color: 'white',
        '&$subheader':{
            color: 'white'
        }
    },
    subContent:{
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
    },
    tags: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px', 
        color: 'white',
    },
    title: {
        padding: '0 16px',
        color: 'white',
    },
    interact:{
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    colourIcon: {
        color:'white'
    },
    likeCount: {
        color: 'white',
        marginLeft: '0.5rem'
    },
    subheader:{
        color: 'white'
    },
    avatar:{
        backgroundColor: grey[700]
    },
    smallAvatar:{
        width: theme.spacing(3),
        height: theme.spacing(3),
        marginRight: '16px',
        backgroundColor: grey[700],
        fontSize: "medium"
    },
    commentContainer:{
        display: 'flex',
        alignItems: 'center',
        padding: "0px 16px 8px" 
    },
    comment:{
        color: 'white'
    },
    commentButton:{
        paddingLeft: "16px",
        color: "rgb(126 126 126)",
        fontSize: "1rem",
        fontWeight: "700"
    },
    viewComments:{
        color: "rgb(156 156 156)",
        fontSize: "1.1rem",
        fontWeight: "550"
    },
    viewCommentsContainer:{
        padding: "0px 15px 8px"
    },
    viewCommentsContainer_1 :{
        padding: "0px 16px"
    }
}))