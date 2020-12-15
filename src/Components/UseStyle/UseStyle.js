
import { makeStyles } from '@material-ui/core/styles';

const useStyles =  makeStyles({
    table: {
        minWidth: 650,
    },
    btn_delete: {
        background: 'linear-gradient(45deg, #ff4444 30%, #CC0000 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    btn_edit: {
        background: 'linear-gradient(45deg, #ffbb33 30%, #FF8800 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'uppercase',
    },
});

export default useStyles;