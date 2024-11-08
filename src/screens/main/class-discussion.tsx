// import React from 'react';
// import { View, StyleSheet, BackHandler } from 'react-native';
// import { Appbar, Surface, Text, List } from 'react-native-paper';
// import { CommonActions, useNavigation } from '@react-navigation/native';
// import { useFocusEffect } from '@react-navigation/native';

// const ClassDiscussionScreen = ({ route } : any) => {
//   const navigation = useNavigation();
//   const { classId, className } = route.params || {};

//   // Modified back button handling
//   useFocusEffect(
//     React.useCallback(() => {
//       const onBackPress = () => {
//         // Navigate to Dashboard using replace instead of navigate
//         navigation.dispatch(
//           CommonActions.reset({
//             index: 0,
//             routes: [{ name: 'Dashboard' }]
//           })
//         );
//         return true;
//       };

//       BackHandler.addEventListener('hardwareBackPress', onBackPress);

//       return () =>
//         BackHandler.removeEventListener('hardwareBackPress', onBackPress);
//     }, [navigation])
//   );

//   const handleBackPress = () => {
//     // Use the same reset action for the back button
//     navigation.dispatch(
//       CommonActions.reset({
//         index: 0,
//         routes: [{ name: 'Dashboard' }]
//       })
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Appbar.Header>
//         <Appbar.Action
//           icon="menu"
//           onPress={() => navigation.openDrawer()}
//         />
//         <Appbar.BackAction onPress={handleBackPress} />
//         <Appbar.Content title={className || 'Class Discussion'} />
//       </Appbar.Header>

//       <Surface style={styles.content}>
//         <List.Section>
//           <List.Subheader>Discussion Topics</List.Subheader>
//           <List.Item
//             title="Topic 1"
//             description="Description for topic 1"
//             left={props => <List.Icon {...props} icon="forum" />}
//           />
//           <List.Item
//             title="Topic 2"
//             description="Description for topic 2"
//             left={props => <List.Icon {...props} icon="forum" />}
//           />
//         </List.Section>
//       </Surface>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   content: {
//     flex: 1,
//     padding: 16,
//   },
// });

// export default ClassDiscussionScreen;
import React from 'react';
import { Appbar, List } from 'react-native-paper';
import { DrawerScreenWrapper } from '../../components/layout/wrappers/DrawerScreenWrapper';

const ClassDiscussionScreen = ({ navigation, route } : any) => {
  const { classId, className } = route.params || {};

  return (
    <DrawerScreenWrapper
    scrollable={true}
      title={className || 'Class Discussion'}
      breadcrumbs={[
        { label: 'Home', screen: 'Dashboard' },
        { label: 'Classes', screen: 'Dashboard', params: { tab: 'classes' } },
        { label: className || 'Class Discussion' }
      ]}
      headerActions={
        <Appbar.Action icon="plus" onPress={() => {console.log("Adding new topic")}} />
      }
    >
      <List.Section >
        <List.Subheader>Discussion Topics</List.Subheader>
        <List.Item
          title="Topic 1"
          description="Description for topic 1"
          left={props => <List.Icon {...props} icon="forum" />}
        />
        <List.Item
          title="Topic 2"
          description="Description for topic 2"
          left={props => <List.Icon {...props} icon="forum" />}
        />
      </List.Section>
    </DrawerScreenWrapper>
  );
};

export default ClassDiscussionScreen;