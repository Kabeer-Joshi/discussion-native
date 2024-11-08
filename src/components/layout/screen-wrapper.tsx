// src/components/layout/ScreenWrapper.tsx
import React, { ReactNode } from 'react';
import { StyleSheet, View, ViewStyle, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'react-native-paper';

interface ScreenWrapperProps {
  children: ReactNode;
  style?: ViewStyle;
  withScrollView?: boolean;
  withSafeArea?: boolean;
  backgroundColor?: string;
  barStyle?: 'light-content' | 'dark-content';
}

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  style,
  withScrollView = false,
  withSafeArea = true,
  backgroundColor,
  barStyle = 'dark-content',
}) => {
  const theme = useTheme();
  const Container = withSafeArea ? SafeAreaView : View;
  const bg = backgroundColor || theme.colors.background;

  return (
    <>
      <StatusBar barStyle={barStyle} backgroundColor={bg} />
      <Container style={[styles.container, { backgroundColor: bg }, style]}>
        {withScrollView ? (
          <ScrollView 
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
          >
            {children}
          </ScrollView>
        ) : (
          children
        )}
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});

