import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";
const TrashIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <G
      stroke="#252525"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#a)"
    >
      <Path d="M18.563 4.813H3.438M8.938 8.938v5.5M13.063 8.938v5.5M17.188 4.813v13.062a.687.687 0 0 1-.688.688h-11a.687.687 0 0 1-.688-.688V4.812" />
      <Path d="M14.438 4.813V3.438a1.375 1.375 0 0 0-1.376-1.376H8.939a1.375 1.375 0 0 0-1.376 1.376v1.374" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default TrashIcon;
