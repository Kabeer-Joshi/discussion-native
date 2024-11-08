import { View, StyleSheet } from 'react-native';
import React from 'react';
import { 
  Appbar,
  Surface,
  Text,
  Card,
  Button
} from 'react-native-paper';
import { CommonActions } from '@react-navigation/native';

const DashboardScreen = ({ navigation } : any) => {
  const classes = [
    { id: 1, name: 'Mathematics 101', professor: 'Dr. Smith' },
    { id: 2, name: 'Physics 201', professor: 'Dr. Johnson' },
    { id: 3, name: 'Computer Science 301', professor: 'Dr. Williams' }
  ];

  const handleLogout = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }]
      })
    );
  };

  const openClassContent = (classData: any) => {
    navigation.navigate('ClassContent', {
      screen: 'Discussion',
      params: {
        classId: classData.id,
        className: classData.name
      }
    });
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Dashboard" />
        <Appbar.Action icon="logout" onPress={handleLogout} />
      </Appbar.Header>

      <Surface style={styles.content}>
        {classes.map(classItem => (
          <Card
            key={classItem.id}
            style={styles.classCard}
            onPress={() => openClassContent(classItem)}
          >
            <Card.Content>
              <Text variant="titleLarge">{classItem.name}</Text>
              <Text variant="bodyMedium">{classItem.professor}</Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => openClassContent(classItem)}>
                Enter Class
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </Surface>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  classCard: {
    marginBottom: 16,
  },
});

export default DashboardScreen;