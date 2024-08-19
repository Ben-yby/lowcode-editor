import { Select as AntdSelect } from "antd";
import { CommonComponentProps } from "../../interface";

const Select = ({ id, options, styles }: CommonComponentProps) => {
  return <AntdSelect data-component-id={id} options={options} style={styles} />;
};

export default Select;
