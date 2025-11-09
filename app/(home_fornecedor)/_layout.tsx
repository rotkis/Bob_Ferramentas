import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Cadastro from './cadastro';
import Home from './home';
import Relatorios from './relatorio';

const Tab = createBottomTabNavigator();

export default function Layout() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#555',
          tabBarStyle: { backgroundColor: '#FFD83A' },
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'home';
            if (route.name === 'Início') iconName = 'home';
            else if (route.name === 'Cadastrar') iconName = 'add-circle';
            else if (route.name === 'Relatórios') iconName = 'bar-chart';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Início" component={Home} />
        <Tab.Screen name="Cadastrar" component={Cadastro} />
        <Tab.Screen name="Relatórios" component={Relatorios} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
