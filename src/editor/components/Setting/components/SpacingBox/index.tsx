import React, { FC } from "react";
import styles from "./index.module.scss";
import { SpacingBoxInput } from "./SpacingBoxInput";

export const Spacings = [
  "margin-top",
  "margin-right",
  "margin-bottom",
  "margin-left",
  "padding-top",
  "padding-right",
  "padding-bottom",
  "padding-left"
];

interface SpacingBoxProps {
  value?: string[];
  onChange: (values: string[]) => void;
}

const SpacingBox: FC<SpacingBoxProps> = ({ value = [], onChange }) => {
  const handleSpacingChange = (index: number, val: string | null) => {
    const newValue = [...value];

    newValue[index] = val as string;
    onChange(newValue);
  };

  return (
    <div className={styles.container}>
      {Spacings.map((name, index) => (
        <SpacingBoxInput
          key={name}
          name={name}
          value={value[index]}
          onChange={val => handleSpacingChange(index, val)}
        />
      ))}
    </div>
  );
};

export default SpacingBox;
