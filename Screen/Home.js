import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';

const Home = ({ navigation }) => {
  const data = [
    {
      id: '1',
      name: 'mukes',
      email: 'abc@gmail.com',
      salary: '5 lpa',
      phone: '12345',
      position: 'fe',
      picture:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '2',
      name: 'rukes',
      email: 'abc@gmail.com',
      salary: '5 lpa',
      phone: '12345',
      position: 'fe',
      picture:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '3',
      name: 'dukes',
      email: 'abc@gmail.com',
      salary: '5 lpa',
      phone: '12345',
      position: 'fe',
      picture:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '4',
      name: 'cukes',
      email: 'abc@gmail.com',
      salary: '5 lpa',
      phone: '12345',
      position: 'fe',
      picture:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '5',
      name: 'bukes',
      email: 'abc@gmail.com',
      salary: '5 lpa',
      phone: '12345',
      position: 'fe',
      picture:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '6',
      name: 'mukes',
      email: 'abc@gmail.com',
      salary: '5 lpa',
      phone: '12345',
      position: 'fe',
      picture:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '7',
      name: 'rukes',
      email: 'abc@gmail.com',
      salary: '5 lpa',
      phone: '12345',
      position: 'fe',
      picture:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '8',
      name: 'dukes',
      email: 'abc@gmail.com',
      salary: '5 lpa',
      phone: '12345',
      position: 'fe',
      picture:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '9',
      name: 'cukes',
      email: 'abc@gmail.com',
      salary: '5 lpa',
      phone: '12345',
      position: 'fe',
      picture:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '10',
      name: 'bukes',
      email: 'abc@gmail.com',
      salary: '5 lpa',
      phone: '12345',
      position: 'fe',
      picture:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '11',
      name: 'bukes',
      email: 'abc@gmail.com',
      salary: '5 lpa',
      phone: '12345',
      position: 'fe',
      picture:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: '12',
      name: 'bukes',
      email: 'abc@gmail.com',
      salary: '5 lpa',
      phone: '12345',
      position: 'fe',
      picture:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
  ];

  const renderList = (item) => {
    return (
      <View>
        <Card style={styles.mycard}>
          <View style={styles.cardView}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
              source={{
                uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
              }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.textName}>{item.name}</Text>
              <Text style={styles.textPosition}>{item.position} </Text>
            </View>
          </View>
        </Card>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderList(item);
        }}
        keyExtractor={(item) => item.id}
      />
      <FAB
        style={styles.fab}
        small
        icon="plus"
        theme={{ colors: { accent: 'red' } }}
        onPress={() => navigation.navigate('CreateEmployee')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mycard: {
    margin: 5,
  },
  cardView: {
    flexDirection: 'row',
    padding: 5,
  },
  textName: {
    fontSize: 20,
  },
  textPosition: {
    fontSize: 15,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Home;
