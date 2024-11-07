// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, Text, View, TouchableOpacity } from 'react-native';

// Type definitions
type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Dashboard: undefined;
  ClassDrawer: { classId: string; className: string };
};

type ClassDrawerParamList = {
  ClassInfo: { classId: string; className: string };
  ClassAssignments: { classId: string; className: string };
};

// Create navigators
const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<ClassDrawerParamList>();

// Screen components
const LoginScreen = ({ navigation }: any) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Login Screen</Text>
    <Button
      title="Login"
      onPress={() => navigation.replace('Dashboard')}
    />
    <Button
      title="Go to Signup"
      onPress={() => navigation.navigate('Signup')}
    />
  </View>
);

const SignupScreen = ({ navigation }: any) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Signup Screen</Text>
    <Button
      title="Go to Login"
      onPress={() => navigation.navigate('Login')}
    />
  </View>
);

const DashboardScreen = ({ navigation }: any) => {
  const classes = [
    { id: '1', name: 'Mathematics' },
    { id: '2', name: 'Physics' },
    { id: '3', name: 'Chemistry' },
  ];

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Dashboard Screen</Text>
      {classes.map((classItem) => (
        <TouchableOpacity
          key={classItem.id}
          onPress={() =>
            navigation.navigate('ClassDrawer', {
              classId: classItem.id,
              className: classItem.name,
            })
          }
          style={{
            padding: 20,
            margin: 10,
            backgroundColor: '#e0e0e0',
            borderRadius: 5,
          }}
        >
          <Text>{classItem.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Drawer screens
const ClassInfoScreen = ({ route }: any) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Class Info Screen</Text>
    <Text>Class ID: {route.params.classId}</Text>
    <Text>Class Name: {route.params.className}</Text>
  </View>
);

const ClassAssignmentsScreen = ({ route }: any) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Class Assignments Screen</Text>
    <Text>Class ID: {route.params.classId}</Text>
    <Text>Class Name: {route.params.className}</Text>
  </View>
);

// Drawer navigator component
const ClassDrawerNavigator = ({ route }: any) => {
  const { classId, className } = route.params;

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 240,
        },
      }}
    >
      <Drawer.Screen
        name="ClassInfo"
        component={ClassInfoScreen}
        initialParams={{ classId, className }}
        options={{ title: 'Class Information' }}
      />
      <Drawer.Screen
        name="ClassAssignments"
        component={ClassAssignmentsScreen}
        initialParams={{ classId, className }}
        options={{ title: 'Assignments' }}
      />
    </Drawer.Navigator>
  );
};

// Main App component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen
          name="ClassDrawer"
          component={ClassDrawerNavigator}
          options={({ route }: any) => ({
            title: route.params.className,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;