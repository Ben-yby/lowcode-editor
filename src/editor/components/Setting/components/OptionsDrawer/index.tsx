import { Option } from "@/editor/interface";
import { Button, Drawer, DrawerProps, Input, List, Popconfirm, Space } from "antd";
import React, { FC, useState } from "react";

interface OptionsDrawerProps extends DrawerProps {
  options: Option[];
  onChange: (options: Option[]) => void;
}

const OptionsDrawer: FC<OptionsDrawerProps> = ({
  options: originOptions = [],
  onChange,
  ...props
}) => {
  const [options, setOptions] = useState(originOptions);
  const [editStatus, setEditStatus] = useState(false);

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

    setOptions(newOptions);
  };

  const handleSubmit = () => {
    setEditStatus(false);
    onChange(options);
  };

  return (
    <Drawer
      title="Options Manage"
      {...props}
      width="35%"
      extra={
        <Space>
          {!editStatus ? (
            <Button type="primary" onClick={() => setEditStatus(true)}>
              Edit
            </Button>
          ) : (
            <Button type="primary" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </Space>
      }
    >
      <List
        footer={editStatus ? <Button>Add option</Button> : <></>}
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
            {editStatus ? (
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
            ) : (
              <div>
                {item.label} - {item.value}
              </div>
            )}
          </List.Item>
        )}
      />
    </Drawer>
  );
};

export default OptionsDrawer;
