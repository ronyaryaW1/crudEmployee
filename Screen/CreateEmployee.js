import React, { useState } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Modal,
  FlatList,
  ScrollView,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { TextInput, Button } from 'react-native-paper';

const CreateEmployee = () => {
  const [Name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [picture, setPicture] = useState(
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QDQ0PEg0QEA8OEBANDQ4OEg8PDRAQFREXFhUSFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNyg5OisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALMBGQMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABAMBAgUH/8QAKxABAAIAAggGAwEBAAAAAAAAAAECBBEDEyExQVFScRQyYZGhsRKBwSLR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP2sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHm14jfOTG2LjhGfwChy0xG+cu6K+JtPHLsymc+PuC22JrHr2YXxU8Iy+WNazO6G1MNafTuDOdJOcTMzsfQic3zbRlMxyW4W2de2wGwAAAAAAAAAAAAAAAAAAAAAAJL4qeEe4K2d9NWOP63or6S075l4BVbF8o92V9PaePs5TQ2ndHvsa1wnOfYEz1TRzO6M11dDWOH7na0BHTCTxnLttbUw9Y4Z92wDkRk6AIcXXK2fPa9YO22Y5tMXX/ADnyS6O2Von1B9IcdAAAAAAAAAAAAAAAAAAAAAQYmuVp9dq9LjK7p/QM8PSLTMTyzhZTR1jdEIdBbK0T+n0AGWl08VnLKeezJqjxnmjsDTxccp+DxUcp+EtazO6M3rU26ZBR4qOU/B4qOU/CfU26ZNTbpkFHio5T8Hio5T8J9Tbpk1NumQbXxNZiYynbHolaam3TJqbdMg2pioiIiYnZs4PXio5T8JtTbpl3U26ZBR4qOU/D1TERMxGU7eyO1JjfEw94bzwC8AAAAAAAAAAAAAAAAABnpq51mGgD5b6OitnWJ5wh0tcrTHsowdtkxyBSjxnmjssR4zzR2AwW+e39WI8Fvnt/VgPNrxG+cnKaSs7pz+0eInO8+myHiszEwD6QAA82tEb5egAATY3dXvLHDeerbG7q95Y4bz1BeAAAAAAAAAAAAAAAAAAACTGV2xPPZLPDWyvHrsVYmudJ9NqGJ4g+mjxnmjsqpbOInnGaXGeaOwGC3z2/qxHgt89v6sBhp8P+U5xO3jnueNFhcpzmd3CFTze8RGcg9CHxFvy/L49HvT6fOIiOO/8A4DxiNL+U+kbm+F0mcZcY+kT1S2U5g+kPNLZxE83oE2N3V7yxw3nq2xu6veWOG89QXgAAAAAAAAAAAAAAAAAAA5MPm3jKZjlOT6aLF1ytnzgG2Ev/AJy5fTHFWibbJ4MAFGC3z2/qxHgt89v6sBy0xETM7oQabSzafThDfEUvacoiPxjdt3yy8NblHuDEbeGtyj3PDW5R7gxG3hrco9zw1uUe4O4bS5Tlwn4lah8NblHur0X5Zbd4Mcbur3ljhvPVtjd1e8scN56gvAAAAAAAAAAAAAAAAAAAAZafRflEcNrUBhTC1jfnPwwxVYi0ZRlsXI8Z5o7A5hbxEznOWxTr6dX2gAX6+nV9mvp1faABfr6dX2a+nV9oAF+vp1fZr6dX2gAX6+nV9ua+nV9oQG+K0kTEZTnteMN56s2mG88AvAAAAAAAAAAAAAAAAAAAAAAcdAcHQHB0BwdAcHQHB0BwdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z',
  );
  const [modal, setModal] = useState(false);

  const takeFoto = () => {
    ImagePicker.openCamera({
      cropping: true,
      compressImageMaxHeight: 300,
      compressImageQuality: 0.7,
      compressImageMaxHeight: 400,
    }).then((image) => {
      console.log(image);
      setPicture(image.path);
      let newFile = {
        path: image.path,
        type: `test/${image.path.split('.')[1]}`,
        name: `test.${image.path.split('.')[1]}`,
      };
      handleUpload(newFile);
    });
  };

  const pickGalery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setPicture(image.path);
    });
  };

  const handleUpload = (image) => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'employeeApp');
    data.append('cloud_name', 'dnmy5frr2');

    fetch('https://api.cloudinary.com/v1_1/dnmy5frr2/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

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
        icon="content-save"
        mode="contained"
        theme={theme}
        onPress={() => setModal(true)}
      >
        Upload Image
      </Button>
      <Button
        style={styles.inputStyle}
        icon="upload"
        mode="contained"
        theme={theme}
        onPress={() => console.log('saved')}
      >
        save
      </Button>
      <View
        style={{
          width: 250,
          height: 250,
          alignSelf: 'center',
          marginTop: 8,
        }}
      >
        <Image
          source={{ uri: picture }}
          style={{ width: '100%', height: '100%', borderRadius: 10 }}
        />
      </View>
      <Modal
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
              icon="camera"
              theme={theme}
              mode="contained"
              onPress={takeFoto}
            >
              camera
            </Button>
            <Button icon="google-photos" mode="contained" onPress={pickGalery}>
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
