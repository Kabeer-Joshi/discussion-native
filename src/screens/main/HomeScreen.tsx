// HomeScreen.tsx - Example usage
import React from 'react';
import { Button, Text, Card, ActivityIndicator, MD2Colors, Checkbox, Chip, DataTable, Portal, Dialog, Divider, FAB, Banner, List, ProgressBar, MD3Colors, TextInput } from 'react-native-paper';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

const HomeScreen = () => {

  const [text, setText] = React.useState('');

  return (

  <ScrollView style={styles.container}>

    <View style={{flexDirection:'column'}}>

      <BannerComponent/>

      <ListAccordionComponent/>

      <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
    />


    <Text>Hello</Text>
    <Button icon='camera'  mode='outlined'  onPress={()=>console.log("Button pressed")} > This is a button with icon </Button>

    <Divider/>
      <ActivityIndicator size='large' animating={true} color={MD2Colors.purple500} />

      <Checkbox status='checked'  />
      <Checkbox status='checked' disabled />

      <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>

      <Divider style={{width:'100%' , marginTop:20 , marginBottom:20}}/>

      <FAB
    icon="plus"
    onPress={() => console.log('Pressed')}
  />

    </View>
      <TableComponent/>

      <Divider/>

      <DialogComponent/>

      <Divider bold />

      <ProgressBar progress={0.5} color={MD3Colors.error50} />

      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    paddingBottom: 20,
  },
})

export default HomeScreen;

const TableComponent = () => {
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
    {
      key: 1,
      name: 'Cupcake',
      calories: 356,
      fat: 16,
    },
    {
      key: 2,
      name: 'Eclair',
      calories: 262,
      fat: 16,
    },
    {
      key: 3,
      name: 'Frozen yogurt',
      calories: 159,
      fat: 6,
    },
    {
      key: 4,
      name: 'Gingerbread',
      calories: 305,
      fat: 3.7,
    },
   ]);
 
   const from = page * itemsPerPage;
   const to = Math.min((page + 1) * itemsPerPage, items.length);
 
   React.useEffect(() => {
     setPage(0);
   }, [itemsPerPage]);
 
   return (
     <DataTable>
       <DataTable.Header>
         <DataTable.Title>Dessert</DataTable.Title>
         <DataTable.Title numeric>Calories</DataTable.Title>
         <DataTable.Title numeric>Fat</DataTable.Title>
       </DataTable.Header>
 
       {items.slice(from, to).map((item) => (
         <DataTable.Row key={item.key}>
           <DataTable.Cell>{item.name}</DataTable.Cell>
           <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
           <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
         </DataTable.Row>
       ))}
 
       <DataTable.Pagination
         page={page}
         numberOfPages={Math.ceil(items.length / itemsPerPage)}
         onPageChange={(page) => setPage(page)}
         label={`${from + 1}-${to} of ${items.length}`}
         numberOfItemsPerPageList={numberOfItemsPerPageList}
         numberOfItemsPerPage={itemsPerPage}
         onItemsPerPageChange={onItemsPerPageChange}
         showFastPaginationControls
         selectPageDropdownLabel={'Rows per page'}
       />
     </DataTable>
   );
}

const DialogComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
      <View>
        <Button onPress={showDialog}>Show Dialog</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">This is simple dialog</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
  );
}

const BannerComponent = () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: 'Fix it',
          onPress: () => setVisible(false),
        },
        {
          label: 'Learn more',
          onPress: () => setVisible(false),
        },
      ]}>
      There was a problem processing a transaction on your credit card.
    </Banner>
  );
}

const ListAccordionComponent = () => {
  return (<List.AccordionGroup>
  <List.Accordion title="Accordion 1" id="1">
    <List.Item title="Item 1" />
  </List.Accordion>
  <List.Accordion title="Accordion 2" id="2">
    <List.Item title="Item 2" />
  </List.Accordion>

    <List.Accordion title="Accordion 3" id="3">
      <List.Item title="Item 3" />
    </List.Accordion>
</List.AccordionGroup>)
}

