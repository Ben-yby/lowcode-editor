import { Option } from "@/editor/interface";
import { renderFormElememt } from "@/editor/utils";
import { Button, Form } from "antd";
import React, { useEffect, useState } from "react";
import { ComponentConfig, useComponentConfigStore } from "../../stores/component-config";
import { useComponetsStore } from "../../stores/components";
import OptionsDrawer from "./components/OptionsDrawer";

export function ComponentProperties() {
  const [form] = Form.useForm();
  const [optionsDrawerVisible, updateOptionsDrawerVisible] = useState(false);

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

  const updateOptions = (options: Option[]) => {
    valueChange({
      ...curComponent?.props,
      options
    });
  };

  return (
    <>
      <Form
        form={form}
        onValuesChange={valueChange}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
      >
        {curComponent?.name === "Select" && (
          <div className="w-[100%] text-center">
            <Button className="w-[90%]" onClick={() => updateOptionsDrawerVisible(true)}>
              Manage Options
            </Button>
          </div>
        )}
        {componentConfig[curComponent.name]?.setter?.map(setter => (
          <Form.Item key={setter.name} name={setter.name} label={setter.label}>
            {renderFormElememt(setter)}
          </Form.Item>
        ))}
      </Form>

      <OptionsDrawer
        options={curComponent?.props?.options}
        onChange={updateOptions}
        open={optionsDrawerVisible}
        onClose={() => updateOptionsDrawerVisible(false)}
      />
    </>
  );
}
