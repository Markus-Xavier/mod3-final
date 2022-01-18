import React from "react";
import PropTypes from 'prop-types';
import './Error.css';

export function Error({ error }) {
  return (
    <div>
      {error}
    </div>
  )
}

Error.propTypes = {
  error: PropTypes.string
}