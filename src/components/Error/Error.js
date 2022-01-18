import React from "react";
import PropTypes from 'prop-types';
import './Error.css';

export function Error({ error }) {
  return (
    <p>
      {error}
    </p>
  )
}

Error.propTypes = {
  error: PropTypes.string
}