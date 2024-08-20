import { renderFormElememt } from "@/editor/utils";
import { Form } from "antd";
import React, { CSSProperties, useEffect, useState } from "react";
import { useComponentConfigStore } from "../../stores/component-config";
import { useComponetsStore } from "../../stores/components";
import SpacingBox, { Spacings } from "./components/SpacingBox";
import { camelCase, debounce, isNil } from "lodash-es";

const SpacingKeys = Spacings.map(key => camelCase(key));

export function ComponentStyle() {
  const [form] = Form.useForm();
  const [spacing, updateSpacing] = useState<string[]>();

  const { curComponentId, curComponent, updateComponentStyles } = useComponetsStore();
  const { componentConfig } = useComponentConfigStore();

  useEffect(() => {
    form.resetFields();

    const data = form.getFieldsValue();
    form.setFieldsValue({ ...data, ...curComponent?.styles });
    // reset spacing
    updateSpacing(css2spacing(curComponent?.styles!));
  }, [curComponent]);

  function valueChange(changeValues: CSSProperties) {
    if (curComponentId) {
      updateComponentStyles(curComponentId, changeValues);
    }
  }

  function css2spacing(css: Record<string, any>) {
    const spacing = SpacingKeys.map(key => {
      let value = css?.[key];

      if (SpacingKeys.includes(key) && !isNil(value)) {
        value = value.toString().replace("px", "");
      }

      return value;
    });

    return spacing.filter(Boolean) as string[];
  }

  const handleSpacingChange = debounce((values: string[]) => {
    const spacing = SpacingKeys.reduce((acc, key, index) => {
      let value = values[index];

      if (!isNil(value) && !value?.toString()?.endsWith("px")) {
        value += "px";
      }

      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);

    updateSpacing(values);
    valueChange(spacing);
  }, 500);

  if (!curComponentId || !curComponent) return null;

  return (
    <Form form={form} onValuesChange={valueChange} labelCol={{ span: 8 }} wrapperCol={{ span: 14 }}>
      {componentConfig[curComponent.name]?.stylesSetter?.map(setter => {
        switch (setter.type) {
          case "spacingBox":
            return <SpacingBox key={setter.name} value={spacing} onChange={handleSpacingChange} />;
          default:
            return (
              <Form.Item key={setter.name} name={setter.name} label={setter.label}>
                {renderFormElememt(setter)}
              </Form.Item>
            );
        }
      })}
    </Form>
  );
}
