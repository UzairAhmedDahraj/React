import propTypes from 'prop-types';
import '../styles/Display.css';

const Display = ({ value }) => {
    const digitCount = value.length > 5 ? 5 : value.length; // Cap the reduction after 10 digits
    const customStyle = {
        '--digit-count': digitCount
    };

    return (
        <div className="display" style={customStyle}>
            {value}
        </div>
    );
}

Display.propTypes = {
    value: propTypes.string.isRequired,
};

export default Display;
