import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { Card, FAB } from 'react-native-paper';

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('http://0dd138dd1c06.ngrok.io/')
      .then((res) => res.json())
      .then((results) => {
        setData(results);
        setLoading(false);
      });
  }, []);

  console.log('data', data);

  const renderList = (item) => {
    return (
      <View>
        <Card
          style={styles.mycard}
          onPress={() => navigation.navigate('Profile', { item })}
        >
          <View style={styles.cardView}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
              source={{
                uri:
                  item.picture ||
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
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
      {loading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <>
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return renderList(item);
            }}
            keyExtractor={(item) => item._id}
          />
          <FAB
            style={styles.fab}
            small
            icon="plus"
            theme={{ colors: { accent: 'red' } }}
            onPress={() => navigation.navigate('CreateEmployee')}
          />
        </>
      )}
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
