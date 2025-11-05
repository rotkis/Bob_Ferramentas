import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#FACC15",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#1E293B",
          borderTopWidth: 0,
          height: 60,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";
          if (route.name === "home") iconName = "home";
          else if (route.name === "perfil") iconName = "person";
          else if (route.name === "configuracoes") iconName = "settings";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="perfil" options={{ title: "Perfil" }} />
      <Tabs.Screen name="configuracoes" options={{ title: "Configurações" }} />
    </Tabs>
  );
}
