import React from "react";
import { Button } from "@material-ui/core";

export const BaseButton = ({
  children,
  variant,
  color,
  size,
  disabled,
  startIcon,
  endIcon,
}) => (
  <Button
    variant={variant}
    color={color}
    size={size}
    disabled={disabled}
    startIcon={startIcon}
    endIcon={endIcon}
  >
    {children}
  </Button>
);
