import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const ChevronLeftIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15 18-6-6 6-6"
    />
  </Svg>
)
export default ChevronLeftIcon;
