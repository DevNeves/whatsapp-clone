import { Stack } from "expo-router";

import "../../styles/global.css";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen
        name="verificacao"
        options={{
          title: "Insira o código",
          headerStyle: { backgroundColor: "#128C7E" },
          headerTintColor: "#f5f5f5",
        }}
      />
    </Stack>
  );
};

export default Layout;
