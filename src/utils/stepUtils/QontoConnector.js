import { withStyles } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';

const QontoConnector = withStyles({
    alternativeLabel: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    active: {
        '& $line': {
            borderColor: '#84f938',
        },
    },
    completed: {
        '& $line': {
            borderColor: '#84f938',
        },
    },
    line: {
        borderColor: '#192440',
        borderTopWidth: 3,
        borderRadius: 1,
    },
})(StepConnector);


export default QontoConnector;