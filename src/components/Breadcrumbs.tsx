import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export type BreadcrumbItem = {
  label: string;
  screen?: string;
  params?: object;
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
    const navigation = useNavigation();
    const theme = useTheme();
  
    return (
      <View style={[styles.breadcrumbContainer, { backgroundColor: theme.colors.background }]}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <Text style={[styles.separator, { color: theme.colors.primary }]}>
                /
              </Text>
            )}
            {item.screen ? (
              <TouchableOpacity
                onPress={() => 
                  navigation.navigate(item.screen as never, item.params as never)
                }
              >
                <Text style={[styles.link, { color: theme.colors.primary }]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            ) : (
              <Text style={[styles.text, { color: theme.colors.onBackground }]}>
                {item.label}
              </Text>
            )}
          </React.Fragment>
        ))}
      </View>
    );
  };
const styles = StyleSheet.create({
    breadcrumbContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
      },
  separator: {
    marginHorizontal: 8,
  },
  link: {
    fontWeight: '500',
  },
  text: {
    color: '#666',
  },
});