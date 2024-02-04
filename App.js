import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pokedex, Party, Inventory } from "./screens";
import { Ionicons } from "@expo/vector-icons";

const ROUTE_TO_ICON_MAP = {
  Pokedex: "home",
  Party: "sparkles-outline",
  Inventory: "book-outline",
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = ROUTE_TO_ICON_MAP[route.name];
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: "tomato",
      })}
    >
      <Tab.Screen name="Pokedex" component={Pokedex} />
      <Tab.Screen name="Party" component={Party} />
      <Tab.Screen name="Inventory" component={Inventory} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </>
  );
}