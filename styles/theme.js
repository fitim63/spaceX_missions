import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    container: {
        padding: '0 2rem',
    },
    grid: {
        display: 'grid',
        justifyContent: 'center',
        gridTemplateColumns: 'repeat(3, 1fr)',
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
    },
    image: {
        width: '100%',
        height: 150,
    }
})

export const routesStyles = makeStyles({
    main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 100
    }
})