import { makeStyles } from "@material-ui/core";

export default makeStyles( (theme) => ({
    main:{
        display: 'flex',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    root: {
        '& .MuiTextField-root': {
          marginTop: theme.spacing(1.5),
        },
    },
    paper:{
        padding: theme.spacing(2),
        maxWidth: theme.spacing(70),
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;'
    },
    formContainer: {
        justifyContent: 'center',
        
    },
    picture: {
        width: '97%',
        margin: '0.6rem 0',
      },
      submitButton: {
        marginBottom: '0.4rem',
      },
    heading:
    {
        textAlign: 'center',
        fontWeight: 'bold' 
    }
}));