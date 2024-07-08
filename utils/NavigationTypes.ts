import type { MaterialBottomTabScreenProps } from "react-native-paper";

export type TabNavigationList = {
  AddChoice: undefined;
  Choices: undefined;
  MyChoices: undefined;
};

export type TabNavigationProps<T extends keyof TabNavigationList> =
  MaterialBottomTabScreenProps<TabNavigationList, T>;

// export type HomeTabParamList = {
//   Popular: undefined;
//   Latest: undefined;
// };

// export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
//   CompositeScreenProps<
//     BottomTabScreenProps<HomeTabParamList, T>,
//     RootStackScreenProps<keyof RootStackParamList>
//   >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TabNavigationList {}
  }
}
