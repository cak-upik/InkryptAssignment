import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"

const ArrowUpIcon = (props: SvgProps) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={40} height={40} fill="#0FF" rx={20} />
    <Path
      stroke="#181C32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15.5 24.5 9-9m0 0h-6m6 0v6"
    />
  </Svg>
)
export default ArrowUpIcon;
