import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Check from '@material-ui/icons/Check';

const useQontoStepIconStyles = makeStyles({
    root: {
        color: '#192440',
        display: 'flex',
        height: 22,
        alignItems: 'center',
    },
    active: {
        color: '#84f938',
    },
    circle: {
        width: 16,
        height: 16,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    completed: {
        color: '#84f938',
        zIndex: 1,
        fontSize: 18,
    },
});

function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
            })}
        >
            {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
        </div>
    );
}

QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
};

export default QontoStepIcon;