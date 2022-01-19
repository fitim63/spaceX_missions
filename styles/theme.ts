import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    container: {
        padding: '0 2rem',
    },
    title:{
        textAlign: 'center',
        margin: 0,
        fontSize: '3rem',
        lineHeight: '1.5',
    },
    grid: {
        display: 'grid',
        justifyContent: 'center',
        gridTemplateColumns: 'repeat(3, 1fr)',
    },
    search: {
        width: 300,
        height: 40,
        fontSize: 20,
        marginLeft: theme.spacing(3),
    },
    card: {
        margin: '1rem',
        padding: '1.5rem',
        textAlign: 'left',
        textDecoration: 'none',
        border: '1px solid green',
        borderRadius: 10,
        maxWidth: 300,
        cursor: 'pointer',
        '&:hover': {
            color: '#1A237E',
            borderColor: '#1A237E'
        },
        "@media (max-width: 800px)": {
            width: 600,
            gridColumn: 1,
        }
    },
    image: {
        width: '100%',
        height: 150,
    }
}));

export const routesStyles = makeStyles({
    main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 100
    }
})