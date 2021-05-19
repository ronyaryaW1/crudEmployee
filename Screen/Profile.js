import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, Linking, Platform } from 'react-native';
import { Title, Card, Button } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

const Profile = (props) => {
  const { _id, name, picture, phone, salary, email, position } =
    props.route.params.item;

  const openDial = () => {
    if (Platform.OS === 'android') {
      Linking.openURL(`tel: ${phone}`);
    } else {
      Linking.openURL(`telprompt: ${phone}`);
    }
  };
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={['#b51638', '#b98aeb']}
        style={styles.linearGradient}
      >
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{ width: 100, height: 100, borderRadius: 50, marginTop: 70 }}
            source={{ uri: picture }}
          />
        </View>
      </LinearGradient>
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Title>{name}</Title>
        <Text style={{ fontSize: 15 }}>{position}</Text>
      </View>
      <Card
        style={styles.mycard}
        onPress={() => {
          Linking.openURL('mailto:Ronyaryawijaya02@gmail.com');
        }}
      >
        <View style={styles.cardContent}>
          {/* <Image source={require('../../../assets/icon/gmail.png')} style={{ width: 25, height: 25, marginLeft: 8 }} /> */}
          <Text style={styles.mytext}>{email}</Text>
        </View>
      </Card>
      <Card style={styles.mycard} onPress={() => openDial()}>
        <View style={styles.cardContent}>
          {/* <Image source={require('../../../assets/icon/phone.png')} style={{ width: 25, height: 25, marginLeft: 8 }} /> */}
          <Text style={styles.mytext}>{phone}</Text>
        </View>
      </Card>
      <Card style={styles.mycard}>
        <View style={styles.cardContent}>
          {/* <Image source={require('../../../assets/icon/salary.png')} style={{ width: 25, height: 25, marginLeft: 8 }} /> */}
          <Text style={styles.mytext}>{salary}</Text>
        </View>
      </Card>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 8,
        }}
      >
        <Button
          // icon={require('../../../assets/icon/edit.png')}
          mode="contained"
          theme={theme}
          onPress={() => console.log('edit')}
        >
          edit
        </Button>
        <Button
          // icon={require('../../../assets/icon/delete.png')}
          mode="contained"
          theme={theme}
          onPress={() => console.log('Delete')}
        >
          Fire Employee
        </Button>
      </View>
    </View>
  );
};
const theme = {
  colors: {
    primary: 'red',
  },
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  linearGradient: {
    height: '20%',
  },
  mycard: {
    margin: 3,
    marginTop: 5,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 8,
  },
  mytext: {
    fontSize: 18,
    marginTop: 3,
    marginLeft: 10,
  },
});

export default Profile;
