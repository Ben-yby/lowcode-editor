import { Segmented } from "antd";
import { useState } from "react";
import { useComponetsStore } from "../../stores/components";
import { ComponentAttr } from "./ComponentAttr";
import { ComponentStyle } from "./ComponentStyle";

export function Setting() {
  const { curComponentId } = useComponetsStore();

  const [key, setKey] = useState<string>("Attrs");

  if (!curComponentId) return null;

  return (
    <div>
      <Segmented value={key} onChange={setKey} block options={["Attrs", "Styles"]} />
      <div className="pt-[20px]">
        {key === "Attrs" && <ComponentAttr />}
        {key === "Styles" && <ComponentStyle />}
      </div>
    </div>
  );
}
