import { makeStyles } from "@material-ui/core";

export default makeStyles( (theme) => ({
    main:{
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    root: {
        '& .MuiTextField-root': {
          marginBottom: theme.spacing(1),
        },
    },
    paper:{
        padding: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: theme.spacing(60)
    },
    form: {
        justifyContent: 'center',
    },
    heading: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: theme.spacing(1.5),
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      }
}));