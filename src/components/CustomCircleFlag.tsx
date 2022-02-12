import React from "react";
import { CircleFlag, CircleFlagProps } from "react-circle-flags";

export function CustomCircleFlag({ countryCode, height }: CircleFlagProps) {
  return (
    <CircleFlag
      countryCode={countryCode}
      height={height}
    />
  )
}