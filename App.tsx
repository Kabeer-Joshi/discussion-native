// App.tsx
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider, MD3LightTheme } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/main/HomeScreen';
import { AppNavigator } from './AppNavigator';

// Custom theme extending MD3LightTheme
const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6200ee',
    secondary: '#9B51E0',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    text: '#000000',
    onBackground: '#000000',
    onSurface: '#000000',
  },
};

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
      {/* <PaperProvider> */}
        <View style={styles.container}>
        <AppNavigator/>
        </View>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default App;

