import React from 'react';
import propTypes from 'prop-types';
import '../styles/Button.css'

const Button = ({ name, onClick }) => {
    return (
        <button className={`Button ${name}`} onClick={onClick}>
            {name}
        </button>
    )
};

Button.propTypes = {
    name: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
}

export default Button;