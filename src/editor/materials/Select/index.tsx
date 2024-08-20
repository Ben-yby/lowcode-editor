import { Select as PolarisSelect } from "@shopify/polaris";
import { isEmpty } from "lodash-es";
import React from "react";
import { CommonComponentProps } from "../../interface";
import style from "./index.module.scss";

const Select = ({ id, lable, value, options, styles }: CommonComponentProps) => {
  return (
    <div className={style.selectWrapper} data-component-id={id} style={styles}>
      <PolarisSelect label={lable} labelHidden={isEmpty(lable)} options={options} value={value} />
    </div>
  );
};

export default Select;
