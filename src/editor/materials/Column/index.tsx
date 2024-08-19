import { useMaterailDrop } from "@/editor/hooks/useMaterialDrop";
import { CommonComponentProps } from "../../interface";
import React from "react";

const Column = ({ id, children, styles }: CommonComponentProps) => {
  const { canDrop, drop } = useMaterailDrop(["Button", "Select"], id);

  return (
    <div
      data-component-id={id}
      ref={drop}
      style={styles}
      className={`min-h-[100px] p-[20px] ${
        canDrop ? "border-[2px] border-[blue]" : "border-[1px] border-[#000]"
      }`}
    >
      {children}
    </div>
  );
};

export default Column;
