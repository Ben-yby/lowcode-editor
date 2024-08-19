import { Button as PolarisButton } from "@shopify/polaris";
import { CommonComponentProps } from "../../interface";
import React from "react";

const Button = ({ id, text, primary, styles }: CommonComponentProps) => {
  return (
    <div data-component-id={id} style={styles}>
      <PolarisButton primary={primary}>{text}</PolarisButton>
    </div>
  );
};

export default Button;
