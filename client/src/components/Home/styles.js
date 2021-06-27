import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    mainContainer: {
        padding: '0px'
    },
    appBar: {
        backgroundColor: 'rgb(40,40,40)'
    },
    heading:{
        fontWeight: 'bold',
        flexGrow: '1'
    },
    postContainer: {
        marginTop: '1.5em'
    },
    createPostButton: {
        borderRadius : '2rem'
    }
}));