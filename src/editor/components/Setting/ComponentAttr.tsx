import { renderFormElememt } from "@/editor/utils";
import { Form, Input } from "antd";
import React, { useEffect } from "react";
import { ComponentConfig, useComponentConfigStore } from "../../stores/component-config";
import { useComponetsStore } from "../../stores/components";

export function ComponentAttr() {
  const [form] = Form.useForm();

  const { curComponentId, curComponent, updateComponentProps } = useComponetsStore();
  const { componentConfig } = useComponentConfigStore();

  useEffect(() => {
    const data = form.getFieldsValue();
    form.setFieldsValue({ ...data, ...curComponent?.props });
  }, [curComponent]);

  if (!curComponentId || !curComponent) return null;

  function valueChange(changeValues: ComponentConfig) {
    if (curComponentId) {
      updateComponentProps(curComponentId, changeValues);
    }
  }

  return (
    <Form form={form} onValuesChange={valueChange} labelCol={{ span: 8 }} wrapperCol={{ span: 14 }}>
      <Form.Item label="Id">
        <Input value={curComponent.id} disabled />
      </Form.Item>
      <Form.Item label="Name">
        <Input value={curComponent.name} disabled />
      </Form.Item>
      {componentConfig[curComponent.name]?.setter?.map(setter => (
        <Form.Item key={setter.name} name={setter.name} label={setter.label}>
          {renderFormElememt(setter)}
        </Form.Item>
      ))}
    </Form>
  );
}
