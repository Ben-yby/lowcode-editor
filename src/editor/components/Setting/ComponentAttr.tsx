import {
  ComponentConfig,
  ComponentSetter,
  useComponentConfigStore,
} from "../../stores/component-config";
import { useComponetsStore } from "../../stores/components";
import { Form, Input, InputNumber, Select } from "antd";
import { useEffect } from "react";

export function ComponentAttr() {
  const [form] = Form.useForm();

  const { curComponentId, curComponent, updateComponentProps } =
    useComponetsStore();
  const { componentConfig } = useComponentConfigStore();

  useEffect(() => {
    const data = form.getFieldsValue();
    form.setFieldsValue({ ...data, ...curComponent?.props });
  }, [curComponent]);

  if (!curComponentId || !curComponent) return null;

  function renderFormElememt(setting: ComponentSetter) {
    const { type, options } = setting;

    switch (type) {
      case "select":
        return <Select options={options} />;
      case "input":
        return <Input />;
      case "inputNumber":
        return <InputNumber />;
      default:
        return <></>;
    }
  }

  function valueChange(changeValues: ComponentConfig) {
    if (curComponentId) {
      updateComponentProps(curComponentId, changeValues);
    }
  }

  return (
    <Form
      form={form}
      onValuesChange={valueChange}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 14 }}
    >
      <Form.Item label="组件id">
        <Input value={curComponent.id} disabled />
      </Form.Item>
      <Form.Item label="组件名称">
        <Input value={curComponent.name} disabled />
      </Form.Item>
      {componentConfig[curComponent.name]?.setter?.map((setter) => (
        <Form.Item key={setter.name} name={setter.name} label={setter.label}>
          {renderFormElememt(setter)}
        </Form.Item>
      ))}
    </Form>
  );
}
