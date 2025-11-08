import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ClienteLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#1E293B",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#FACC15",
          borderTopWidth: 0,
          height: 60,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "log-in";
          if (route.name === "login") iconName = "log-in";
          else if (route.name === "cadastro") iconName = "person-add";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="login" options={{ title: "Login" }} />
      <Tabs.Screen name="cadastro" options={{ title: "Cadastro" }} />
    </Tabs>
  );
}
