import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LoginScreen from "./src/screens/auth/login-screen";
import SignupScreen from "./src/screens/auth/signup-screen";
import DashboardScreen from "./src/screens/main/dashboard";
import ClassDiscussionScreen from "./src/screens/main/class-discussion";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Create a drawer navigator for class content
const ClassContentDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: { width: '75%' },
        drawerType: 'front'
      }}
    >
      <Drawer.Screen 
        name="Discussion" 
        component={ClassDiscussionScreen}
        options={{
          drawerLabel: 'Class Discussion'
        }}
      />
    </Drawer.Navigator>
  );
};

// Root navigator with stack navigation
export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right'
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupScreen}
        />
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen}
        />
        <Stack.Screen 
          name="ClassContent" 
          component={ClassContentDrawer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};