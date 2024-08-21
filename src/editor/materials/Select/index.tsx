import { Select as PolarisSelect } from "@shopify/polaris";
import { isEmpty } from "lodash-es";
import React from "react";
import { CommonComponentProps } from "../../interface";
import style from "./index.module.scss";

const Select = ({ id, label, value, options, styles }: CommonComponentProps) => {
  return (
    <div className={style.selectWrapper} data-component-id={id} style={styles}>
      <PolarisSelect
        label={label}
        labelHidden={isEmpty(label)}
        options={options}
        value={value}
        onChange={() => {}}
      />
    </div>
  );
};

export default Select;
