import { Feather, Foundation } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AddButton } from "components";
import React from "react";
import CreateScreen from "screens/CreateScreen";
import FeedScreen from "screens/FeedScreen";
import SearchScreen from "screens/SearchScreen";
import { useTheme } from "styles/theme";

const Tab = createBottomTabNavigator();

const tabIcons: any = {
  Feed: {
    icon: Foundation,
    name: "home",
  },
  Search: {
    icon: Feather,
    name: "search",
  },
};

export default function RootNavigation() {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: theme.background,
      }}
      screenOptions={({ route }) => ({
        unmountOnBlur: true,
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "Add") return <AddButton focused={focused} />;
          const { icon: Icon, name } = tabIcons[route.name];
          return <Icon color={color} size={size} name={name} />;
        },
      })}
      tabBarOptions={{
        style: {
          borderTopWidth: 0,
          backgroundColor: theme.background,
          height: 80,
          paddingHorizontal: 30,
        },
        activeTintColor: theme.primaryColor,
        inactiveTintColor: theme.disabledColor,
        showLabel: false,
      }}
    >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Add" component={CreateScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}
