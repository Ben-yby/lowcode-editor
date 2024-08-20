import Tippy from "@tippyjs/react";
import { InputNumber } from "antd";
import cx from "clsx";
import React, { FC, useState } from "react";
import styles from "./index.module.scss";

interface Props {
  name: string;
  value: string;
  onChange: (val: string | null) => void;
}

export const SpacingBoxInput: FC<Props> = ({ name, value, onChange }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(val => !val);
  };

  const handleChange = (val: string | null) => {
    onChange(val);
  };

  return (
    <Tippy
      key={name}
      arrow={false}
      theme="light"
      interactive
      placement="top"
      offset={[0, 0]}
      visible={visible}
      onClickOutside={() => setVisible(false)}
      content={
        <div className={styles.inputContainer}>
          <InputNumber value={value} onChange={handleChange} onClick={e => e.stopPropagation()} />
        </div>
      }
    >
      <div className={cx(styles.item, styles[name])} onClick={handleClick}>
        {value ? `${value}px` : "-"}
      </div>
    </Tippy>
  );
};
