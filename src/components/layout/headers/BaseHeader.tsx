import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { UserMenu } from './UserMenu';

export interface BaseHeaderProps {
  title: string;
  showBack?: boolean;
  actions?: React.ReactNode;
}

export const BaseHeader: React.FC<BaseHeaderProps> = ({
  title,
  showBack = true,
  actions,
}) => {
  const navigation = useNavigation();
  const theme = useTheme();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Appbar.Header style={[styles.header, { backgroundColor: theme.colors.background }]}>
      {showBack && (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      )}
      <Appbar.Content title={title} />
      {actions}
      <UserMenu
        visible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        anchor={
          <Appbar.Action
            icon="account"
            onPress={() => setMenuVisible(true)}
          />
        }
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
    header: {
      elevation: 0,
    },
});