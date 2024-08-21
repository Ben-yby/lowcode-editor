import { Input, InputNumber, Select } from "antd";
import React from "react";
import SpacingBox from "../components/Setting/components/SpacingBox";
import { ComponentSetter } from "../interface";

export function renderFormElememt(setting: ComponentSetter) {
  const { type, options, attributes } = setting;

  switch (type) {
    case "select":
      return <Select {...attributes} options={options} />;
    case "input":
      return <Input {...attributes} />;
    case "inputNumber":
      return <InputNumber {...attributes} />;
    case "spacingBox":
      return <SpacingBox {...attributes} />;
    default:
      return <></>;
  }
}
