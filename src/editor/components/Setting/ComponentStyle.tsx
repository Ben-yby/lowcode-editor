import { Form, Input, InputNumber, Select } from "antd";
import React, { CSSProperties, useEffect } from "react";
import { ComponentSetter, useComponentConfigStore } from "../../stores/component-config";
import { useComponetsStore } from "../../stores/components";
import { Box } from "./components/Box";

export function ComponentStyle() {
  const [form] = Form.useForm();

  const { curComponentId, curComponent, updateComponentStyles } = useComponetsStore();
  const { componentConfig } = useComponentConfigStore();

  useEffect(() => {
    form.resetFields();

    const data = form.getFieldsValue();
    form.setFieldsValue({ ...data, ...curComponent?.styles });
  }, [curComponent]);

  if (!curComponentId || !curComponent) return null;

  function renderFormElememt(setting: ComponentSetter) {
    const { type, options, attributes } = setting;

    switch (type) {
      case "select":
        return <Select {...attributes} options={options} />;
      case "input":
        return <Input {...attributes} />;
      case "inputNumber":
        return <InputNumber {...attributes} />;
      default:
        return <></>;
    }
  }

  function valueChange(changeValues: CSSProperties) {
    if (curComponentId) {
      updateComponentStyles(curComponentId, changeValues);
    }
  }

  return (
    <Form form={form} onValuesChange={valueChange} labelCol={{ span: 8 }} wrapperCol={{ span: 14 }}>
      {componentConfig[curComponent.name]?.stylesSetter?.map(setter => (
        <Form.Item key={setter.name} name={setter.name} label={setter.label}>
          {renderFormElememt(setter)}
        </Form.Item>
      ))}
      <Box />
    </Form>
  );
}
