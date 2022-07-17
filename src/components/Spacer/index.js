import React from "react";
import PropTypes from "prop-types";

const Spacer = (props) => {
  const { width, height } = props;
  return <div style={{ width, height }} />;
};

Spacer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Spacer;
