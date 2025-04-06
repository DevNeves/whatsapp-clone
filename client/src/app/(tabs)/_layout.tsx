import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View } from "react-native";

type TabBarIconProps = {
  color: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  focused: boolean;
};

const Layout = () => {
  const TabBarIcon = (props: TabBarIconProps) => {
    return (
      <View
        className={`w-16 h-9 flex items-center justify-center rounded-full transition delay-150 duration-300 ease-in-out  ${
          props.focused ? "bg-green-100" : "bg-transparent"
        }`}
      >
        <MaterialIcons size={23} name={props.icon} color={props.color} />
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#008069",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Conversas",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon color={color} icon={"chat"} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="status"
        options={{
          title: "Status",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon color={color} icon={"post-add"} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="comunidade"
        options={{
          title: "Comunidade",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon color={color} icon={"groups"} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="chamadas"
        options={{
          title: "Chamadas",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon color={color} icon={"phone"} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
