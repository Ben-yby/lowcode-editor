import { useMaterailDrop } from "@/editor/hooks/useMaterialDrop";
import { CommonComponentProps } from "../../interface";
import React from "react";

const Column = ({ id, styles, children }: CommonComponentProps) => {
  const { canDrop, drop } = useMaterailDrop(["Button", "Select"], id);

  const hasChildren = React.Children.count(children) > 0;

  return (
    <div
      data-component-id={id}
      ref={drop}
      style={styles}
      className={`${canDrop ? "border-[2px] border-[#7bc0fc]" : ""}`}
    >
      {!hasChildren ? (
        <div className="bg-gray-50 w-[100%] h-[100px] leading-[100px] text-center text-[#b8babf]">
          CONTENT AREA
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default Column;
