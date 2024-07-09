import type { MaterialBottomTabScreenProps } from "react-native-paper";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { Choice } from "../models/Choice";

export type TabNavigationList = {
  AddChoice: undefined;
  Choices: undefined;
  MyChoicesStack: NavigatorScreenParams<MyChoicesStackNavigationParamList>;
};

export type TabNavigationProps<T extends keyof TabNavigationList> =
  MaterialBottomTabScreenProps<TabNavigationList, T>;

export type MyChoicesStackNavigationParamList = {
  MyChoices: undefined;
  ChoiceDetails: {
    choice: Choice;
  };
};

export type MyChoicesStackNavigationProps<
  T extends keyof MyChoicesStackNavigationParamList
> = CompositeScreenProps<
  NativeStackScreenProps<MyChoicesStackNavigationParamList, T>,
  TabNavigationProps<keyof TabNavigationList>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TabNavigationList {}
  }
}
