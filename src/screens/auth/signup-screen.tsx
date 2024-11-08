// screens/auth/SignupScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { 
  Button, 
  Text, 
  Surface, 
  TextInput,
  Appbar
} from 'react-native-paper';

const SignupScreen = ({ navigation, route } : any) => {
  const { role } = route.params;

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={`${role.charAt(0).toUpperCase() + role.slice(1)} Signup`} />
      </Appbar.Header>

      <Surface style={styles.surface}>
        <Text variant="headlineMedium" style={styles.title}>
          Create Account
        </Text>

        <Text variant="titleMedium" style={styles.subtitle}>
          Signing up as {role}
        </Text>

        <TextInput
          mode="outlined"
          label="Full Name"
          style={styles.input}
          placeholder="Enter your full name"
        />

        <TextInput
          mode="outlined"
          label="Email"
          style={styles.input}
          placeholder="Enter your email"
        />

        <TextInput
          mode="outlined"
          label="Password"
          secureTextEntry
          style={styles.input}
          placeholder="Create a password"
        />

        <TextInput
          mode="outlined"
          label="Confirm Password"
          secureTextEntry
          style={styles.input}
          placeholder="Confirm your password"
        />

        <Button 
          mode="contained"
          style={styles.button}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'MainApp' }],
            })
          }
        >
          Create Account
        </Button>

        <Button 
          mode="text"
          onPress={() => navigation.goBack()}
          style={styles.loginButton}
        >
          Already have an account? Login
        </Button>
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  surface: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
    marginBottom: 10,
  },
  subtitle: {
    marginBottom: 20,
    opacity: 0.7,
  },
  input: {
    width: '100%',
    marginBottom: 15,
  },
  button: {
    width: '100%',
    marginTop: 10,
  },
  loginButton: {
    marginTop: 20,
  },
});

export default SignupScreen;