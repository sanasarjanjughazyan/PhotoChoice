import { View } from "react-native";
import {
  SafeAreaViewProps,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Colors } from "../../constants/colors";

export default function SafeAreaOverlay({ children }: SafeAreaViewProps) {
  const insets = useSafeAreaInsets();

  const rootStyle = {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
    paddingTop: insets.top,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  return <View style={rootStyle}>{children}</View>;
}
