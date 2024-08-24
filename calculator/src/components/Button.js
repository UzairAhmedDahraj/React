import propTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ label, onClick, type }) => {
  return (
    <button className={`Button ${type}`} onClick={() => {onClick(label)}}>
      {label}
    </button>
  )
}

Button.propTypes = {
  label: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  type: propTypes.oneOf(['number', 'operator', 'function']).isRequired,
};

export default Button;
