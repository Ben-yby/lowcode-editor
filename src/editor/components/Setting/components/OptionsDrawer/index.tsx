import { Option } from "@/editor/interface";
import { Button, Drawer, DrawerProps, Input, List, Popconfirm } from "antd";
import React, { FC } from "react";

interface OptionsDrawerProps extends DrawerProps {
  options: Option[];
  onChange: (options: Option[]) => void;
}

const OptionsDrawer: FC<OptionsDrawerProps> = ({ options = [], onChange, ...props }) => {
  const handleDelete = (option: Option) => {
    onChange(options.filter(item => item.value !== option.value));
  };

  const handleChangeOption = (option: Option, newValue: string, type: "label" | "value") => {
    const newOptions = options.map(item => {
      if (item.value === option.value) {
        return {
          ...item,
          [type]: newValue
        };
      }
      return item;
    });

    onChange(newOptions);
  };

  const handleAddOption = () => {
    onChange([
      ...options,
      {
        label: "test" + options.length,
        value: "test" + options.length
      }
    ]);
  };

  return (
    <Drawer title="Options Manage" {...props} width="35%">
      <List
        footer={<Button onClick={handleAddOption}>Add option</Button>}
        bordered
        dataSource={options}
        renderItem={item => (
          <List.Item
            actions={[
              <Popconfirm
                title="Confirm delete?"
                okText="confirm"
                cancelText="cancel"
                onConfirm={() => handleDelete(item)}
              >
                <Button type="link" key="delete" danger>
                  Delete
                </Button>
              </Popconfirm>
            ]}
          >
            <div className="flex gap-5">
              <Input
                value={item.label}
                onChange={e => handleChangeOption(item, e?.currentTarget?.value, "label")}
              />
              <Input
                value={item.value}
                onChange={e => handleChangeOption(item, e?.currentTarget?.value, "value")}
              />
            </div>
          </List.Item>
        )}
      />
    </Drawer>
  );
};

export default OptionsDrawer;
