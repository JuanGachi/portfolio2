import { View } from "react-native";

export function Separator(props) {
  const { height = 0, backgroundColor = "transparent" } = props;

  return <View style={{ height: height, backgroundColor: backgroundColor }} />;
}
