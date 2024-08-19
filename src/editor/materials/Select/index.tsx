import { Select as ShopifySelect } from "@shopify/polaris";
import { CommonComponentProps } from "../../interface";
import React from "react";
import style from "./index.module.scss";

const Select = ({ id, options, styles }: CommonComponentProps) => {
  return (
    <div className={style.selectWrapper} data-component-id={id} style={styles}>
      <ShopifySelect label="Date range" labelHidden options={options} />
    </div>
  );
};

export default Select;
