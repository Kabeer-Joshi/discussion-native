import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

interface BaseHeaderProps {
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

  return (
    <Appbar.Header style={[styles.header, { backgroundColor: theme.colors.background }]}>
      {showBack && (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      )}
      <Appbar.Content title={title} />
      {actions}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
    header: {
      elevation: 0,
    },
});