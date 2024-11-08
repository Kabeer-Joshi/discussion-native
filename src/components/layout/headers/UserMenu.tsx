import React from 'react';
import { Menu } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

interface UserMenuProps {
  visible: boolean;
  onDismiss: () => void;
  anchor: React.ReactNode;
}

export const UserMenu: React.FC<UserMenuProps> = ({ visible, onDismiss, anchor }) => {
  const navigation = useNavigation();
  const username = 'John Doe'; // Get from your auth context

  const handleLogout = () => {
    navigation.navigate('Login')
    onDismiss();
  };

  return (
    <Menu
      visible={visible}
      onDismiss={onDismiss}
      anchor={anchor}
    >
      <Menu.Item title={username} disabled />
      <Menu.Item 
        title="Profile" 
        onPress={() => {
          onDismiss();
          navigation.navigate('Profile');
        }} 
      />
      <Menu.Item 
        title="Logout" 
        onPress={handleLogout} 
      />
    </Menu>
  );
};