import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { Publish as PublishIcon } from "@material-ui/icons";

export const UploadButton = ({ children, backgroundColor, ...restProps }) => (
  <Button endIcon={<PublishIcon />} style={{ backgroundColor }} {...restProps}>
    {children}
  </Button>
);

UploadButton.propTypes = {
  backgroundColor: PropTypes.string,
  variant: PropTypes.oneOf(["contained", "outlined"]),
  color: PropTypes.oneOf(["default", "primary", "secondary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

UploadButton.defaultProps = {
  backgroundColor: null,
  variant: "contained",
  color: "default",
  size: "medium",
  disabled: false,
  children: "Upload",
  onClick: () => alert("clicked!"),
};
