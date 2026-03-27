import Svg, { Path } from "react-native-svg";
const EditIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#2FA2FE"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M.75 20.75h16"
    />
    <Path
      stroke="#2FA2FE"
      strokeWidth={1.5}
      d="m15.087 6.861.742-.74A3.145 3.145 0 0 0 12.401.99c-.382.158-.729.39-1.021.682l-.742.742s.093 1.576 1.483 2.966c1.39 1.39 2.966 1.483 2.966 1.483L8.27 13.68c-.462.462-.692.692-.947.891-.3.235-.624.435-.969.6-.291.138-.601.241-1.22.447l-2.626.876m8.13-14.08L3.821 9.23c-.462.462-.693.692-.891.947a5.2 5.2 0 0 0-.599.97c-.139.29-.242.6-.449 1.22l-.875 2.625m0 0-.213.641a.848.848 0 0 0 1.073 1.073l.641-.213m-1.501-1.5 1.501 1.5"
    />
  </Svg>
);
export default EditIcon;
