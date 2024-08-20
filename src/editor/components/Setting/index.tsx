import { Segmented } from "antd";
import { useState } from "react";
import { useComponetsStore } from "../../stores/components";
import { ComponentProperties } from "./ComponentProperties";
import { ComponentDesign } from "./ComponentDesign";
import React from "react";

export function Setting() {
  const { curComponentId } = useComponetsStore();

  const [key, setKey] = useState<string>("Properties");

  if (!curComponentId) return null;

  return (
    <div>
      <Segmented value={key} onChange={setKey} block options={["Properties", "Design"]} />
      <div className="pt-[20px]">
        {key === "Properties" && <ComponentProperties />}
        {key === "Design" && <ComponentDesign />}
      </div>
    </div>
  );
}
