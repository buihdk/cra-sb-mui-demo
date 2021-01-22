import React from "react";
import styled from "styled-components";

import { UploadButton } from ".";

export default {
  title: "Components/Upload Button",
  component: UploadButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
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
const Template = (args) => <UploadButton {...args} />;

export const Controlled = Template.bind({});
Controlled.args = {
  children: "Upload",
  variant: "contained",
  size: "medium",
};

export const Examples = () => (
  <ButtonsWrapper>
    <UploadButton variant="contained">Default</UploadButton>
    <UploadButton variant="contained" color="primary">
      Primary
    </UploadButton>
    <UploadButton variant="contained" color="secondary">
      Secondary
    </UploadButton>
    <UploadButton variant="contained" disabled>
      Disabled
    </UploadButton>
    <UploadButton variant="contained" color="primary" href="#contained-buttons">
      Link
    </UploadButton>
  </ButtonsWrapper>
);
