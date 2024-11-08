import { DrawerActions, useNavigation } from '@react-navigation/native';
import { BaseHeaderProps } from './BaseHeader';
import { Appbar, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface DrawerHeaderProps extends BaseHeaderProps {
  showMenu?: boolean;
}

export const DrawerHeader: React.FC<DrawerHeaderProps> = ({
  title,
  showBack = true,
  showMenu = true,
  actions,
}) => {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Appbar.Header style={[styles.header, { backgroundColor: theme.colors.background }]}>
      {showMenu && (
        <Appbar.Action
          icon="menu"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      )}
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