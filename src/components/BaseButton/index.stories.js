import React from "react";
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import {
  Delete as DeleteIcon,
  ArrowDownward as ArrowDownwardIcon,
  CloudUpload as CloudUploadIcon,
  KeyboardVoice as KeyboardVoiceIcon,
  Save as SaveIcon,
  Send as SendIcon,
} from "@material-ui/icons";

import { BaseButton } from ".";

export default {
  title: "Components/Base Button",
  component: BaseButton,
};

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  button {
    margin: 0 10px 10px 0;
  }
`;

/**
 * component stories
 */
export const ContainedButtons = () => (
  <ButtonsWrapper>
    <BaseButton variant="contained">Default</BaseButton>
    <BaseButton variant="contained" color="primary">
      Primary
    </BaseButton>
    <BaseButton variant="contained" color="secondary">
      Secondary
    </BaseButton>
    <BaseButton variant="contained" disabled>
      Disabled
    </BaseButton>
    <BaseButton variant="contained" color="primary" href="#contained-buttons">
      Link
    </BaseButton>
  </ButtonsWrapper>
);

export const TextButtons = () => (
  <ButtonsWrapper>
    <BaseButton>Default</BaseButton>
    <BaseButton color="primary">Primary</BaseButton>
    <BaseButton color="secondary">Secondary</BaseButton>
    <BaseButton disabled>Disabled</BaseButton>
    <BaseButton href="#text-buttons" color="primary">
      Link
    </BaseButton>
  </ButtonsWrapper>
);

export const OutlinedButtons = () => (
  <ButtonsWrapper>
    <BaseButton variant="outlined">Default</BaseButton>
    <BaseButton variant="outlined" color="primary">
      Primary
    </BaseButton>
    <BaseButton variant="outlined" color="secondary">
      Secondary
    </BaseButton>
    <BaseButton variant="outlined" disabled>
      Disabled
    </BaseButton>
    <BaseButton variant="outlined" color="primary" href="#outlined-buttons">
      Link
    </BaseButton>
  </ButtonsWrapper>
);

export const ButtonSizes = () => (
  <>
    <ButtonsWrapper>
      <BaseButton size="small">Small</BaseButton>
      <BaseButton size="medium">Medium</BaseButton>
      <BaseButton size="large">Large</BaseButton>
    </ButtonsWrapper>
    <ButtonsWrapper>
      <BaseButton variant="outlined" size="small" color="primary">
        Small
      </BaseButton>
      <BaseButton variant="outlined" size="medium" color="primary">
        Medium
      </BaseButton>
      <BaseButton variant="outlined" size="large" color="primary">
        Large
      </BaseButton>
    </ButtonsWrapper>
    <ButtonsWrapper>
      <BaseButton variant="contained" size="small" color="primary">
        Small
      </BaseButton>
      <BaseButton variant="contained" size="medium" color="primary">
        Medium
      </BaseButton>
      <BaseButton variant="contained" size="large" color="primary">
        Large
      </BaseButton>
    </ButtonsWrapper>
    <ButtonsWrapper>
      <IconButton aria-label="delete" size="small">
        <ArrowDownwardIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="delete">
        <DeleteIcon fontSize="small" />
      </IconButton>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <DeleteIcon fontSize="large" />
      </IconButton>
    </ButtonsWrapper>
  </>
);

export const IconLabelButtons = () => (
  <ButtonsWrapper>
    <BaseButton
      variant="contained"
      color="secondary"
      startIcon={<DeleteIcon />}
    >
      Delete
    </BaseButton>
    <BaseButton variant="contained" color="primary" endIcon={<SendIcon />}>
      Send
    </BaseButton>
    <BaseButton
      variant="contained"
      color="default"
      startIcon={<CloudUploadIcon />}
    >
      Upload
    </BaseButton>
    <BaseButton
      variant="contained"
      disabled
      color="secondary"
      startIcon={<KeyboardVoiceIcon />}
    >
      Talk
    </BaseButton>
    <BaseButton
      variant="contained"
      color="primary"
      size="small"
      startIcon={<SaveIcon />}
    >
      Save
    </BaseButton>
    <BaseButton
      variant="contained"
      color="primary"
      size="large"
      startIcon={<SaveIcon />}
    >
      Save
    </BaseButton>
  </ButtonsWrapper>
);
