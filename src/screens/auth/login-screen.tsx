// screens/auth/LoginScreen.js
import { CommonActions } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { 
  Button, 
  Text, 
  Surface, 
  TextInput,
  Appbar
} from 'react-native-paper';

const LoginScreen = ({ navigation } : any) => {

  const handleLogin = () => {
    // After successful login
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { 
            name: 'Dashboard',
          }
        ]
      })
    );
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Discussion Platform" />
      </Appbar.Header>

      <Surface style={styles.surface}>
        <Text variant="headlineMedium" style={styles.title}>
          Welcome Back
        </Text>

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
          placeholder="Enter your password"
        />

        <Button 
          mode="contained"
          style={styles.button}
          onPress={handleLogin}
        >
          Login
        </Button>

        <Text style={styles.orText}>Or</Text>

        <View style={styles.signupContainer}>
          <Button 
            mode="outlined"
            style={styles.signupButton}
            onPress={() => navigation.navigate('Signup', { role: 'student' })}
          >
            Student Signup
          </Button>

          <Button 
            mode="outlined"
            style={styles.signupButton}
            onPress={() => navigation.navigate('Signup', { role: 'professor' })}
          >
            Professor Signup
          </Button>
        </View>
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
    justifyContent: 'center',
  },
  title: {
    marginBottom: 30,
  },
  input: {
    width: '100%',
    marginBottom: 15,
  },
  button: {
    width: '100%',
    marginTop: 10,
  },
  orText: {
    marginVertical: 20,
  },
  signupContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signupButton: {
    width: '48%',
  },
});

export default LoginScreen;