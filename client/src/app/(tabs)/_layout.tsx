import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { View } from "react-native";

const Layout = () => {
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
          tabBarIcon: ({ color }) => (
            <View className="bg-green-100 w-16 h-9 flex items-center justify-center rounded-full ">
              <MaterialIcons size={23} name="chat" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="status"
        options={{
          title: "Status",
          tabBarIcon: ({ color }) => (
            <View className="bg-green-100 w-16 h-9 flex items-center justify-center rounded-full ">
              <MaterialIcons size={23} name="post-add" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="comunidade"
        options={{
          title: "Comunidade",
          tabBarIcon: ({ color }) => (
            <View className="bg-green-100 w-16 h-9 flex items-center justify-center rounded-full ">
              <MaterialIcons size={23} name="groups" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="chamadas"
        options={{
          title: "Chamadas",
          tabBarIcon: ({ color }) => (
            <View className="bg-green-100 w-16 h-9 flex items-center justify-center rounded-full ">
              <MaterialIcons size={23} name="phone" color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
