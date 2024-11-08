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
      showBack={false}
      // headerActions={
      //   <Appbar.Action icon="plus" onPress={() => {console.log("Adding new topic")}} />
      // }
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