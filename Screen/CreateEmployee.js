import React, { useState } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Modal,
  FlatList,
  ScrollView,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const CreateEmployee = () => {
  const [Name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [picture, setPicture] = useState('');
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.root}>
      <TextInput
        label="Name"
        style={styles.inputStyle}
        value={Name}
        theme={theme}
        onChangeText={(text) => setName(text)}
        mode="outlined"
      />
      <TextInput
        label="Email"
        style={styles.inputStyle}
        value={email}
        theme={theme}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        mode="outlined"
      />
      <TextInput
        label="phone"
        style={styles.inputStyle}
        value={phone}
        theme={theme}
        keyboardType="number-pad"
        onChangeText={(text) => setPhone(text)}
        mode="outlined"
      />
      <TextInput
        label="salary"
        style={styles.inputStyle}
        value={salary}
        theme={theme}
        keyboardType="number-pad"
        onChangeText={(text) => setSalary(text)}
        mode="outlined"
      />
      <Button
        style={styles.inputStyle}
        //icon={require('../../../assets/icon/upload.png')}
        icon="content-save"
        mode="contained"
        theme={theme}
        onPress={() => setModal(true)}
      >
        Upload Image
      </Button>
      <Button
        style={styles.inputStyle}
        //icon={require('../../../assets/icon/save.png')}
        icon="upload"
        mode="contained"
        theme={theme}
        onPress={() => console.log('saved')}
      >
        save
      </Button>
      <Modal
        // animationType="slide"
        animationType="fade"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(false);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalButtonView}>
            <Button
              //icon={require('../../../assets/icon/camera.png')}
              icon="camera"
              theme={theme}
              mode="contained"
              onPress={() => console.log('presses')}
            >
              camera
            </Button>
            <Button
              //icon={require('../../../assets/icon/gallery.png')}
              icon="google-photos"
              mode="contained"
              onPress={() => console.log('presses')}
            >
              gallery
            </Button>
          </View>
          <Button theme={theme} onPress={() => setModal(false)}>
            cancel
          </Button>
        </View>
      </Modal>
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
  inputStyle: {
    margin: 5,
  },
  modalView: {
    position: 'absolute',
    bottom: 2,
    width: '100%',
    backgroundColor: '#b8e6ff',
  },
  modalButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default CreateEmployee;
