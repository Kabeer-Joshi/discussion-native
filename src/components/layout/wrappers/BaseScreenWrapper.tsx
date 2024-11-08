import React from 'react';
import { 
  View, 
  ScrollView, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform,
  RefreshControl,
  ScrollViewProps,
  ViewStyle
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'react-native-paper';
import { Breadcrumbs , BreadcrumbItem } from '../../Breadcrumbs';

export interface BaseScreenWrapperProps {
  children: React.ReactNode;
  scrollable?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  headerContent: React.ReactNode;
  contentContainerStyle?: ViewStyle;
  refreshing?: boolean;
  onRefresh?: () => void;
  scrollViewProps?: Omit<ScrollViewProps, 'refreshControl'>;
  withPadding?: boolean;
}

export const BaseScreenWrapper: React.FC<BaseScreenWrapperProps> = ({
  children,
  scrollable = true,
  breadcrumbs = [],
  headerContent,
  contentContainerStyle,
  refreshing = false,
  onRefresh,
  scrollViewProps,
  withPadding = true,
}) => {
  const theme = useTheme();
  
  const getContentContainerStyle = () => ({
    ...(withPadding && styles.contentPadding),
    ...contentContainerStyle,
  });

  const renderContent = () => {
    if (scrollable) {
      return (
        <ScrollView
          style={styles.content}
          contentContainerStyle={getContentContainerStyle()}
          refreshControl={
            onRefresh ? (
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={[theme.colors.primary]}
                tintColor={theme.colors.primary}
              />
            ) : undefined
          }
          {...scrollViewProps}
        >
          {children}
        </ScrollView>
      );
    }

    return (
      <View style={[styles.content, getContentContainerStyle()]}>
        {children}
      </View>
    );
  };

  return (
    <SafeAreaView 
      style={[styles.container, { backgroundColor: theme.colors.background }]} 
      edges={['right', 'left']}
    >
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.fixedHeader}>
          {headerContent}
          {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        </View>
        {renderContent()}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  fixedHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  content: {
    flex: 1,
  },
  contentPadding: {
    padding: 4,
  },
});