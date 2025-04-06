import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
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
