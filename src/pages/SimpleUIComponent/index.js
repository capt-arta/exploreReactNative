import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios, {Axios} from 'axios';

const Item = ({onPress, name, email, bidang, onDelete}) => {
  return (
    <View style={styles.wrapperViewItem}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{
            uri: `https://i.pravatar.cc/150?u=${name}`,
          }}
          style={styles.imageItem}
        />
      </TouchableOpacity>
      <View style={styles.descItem}>
        <Text style={styles.descName}>{name}</Text>
        <Text>{email}</Text>
        <Text>{bidang}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const SimpleUIComponent = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [bidang, setBidang] = useState();
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Simpan');
  const [selectedUser, setSelectedUser] = useState({});

  const onchangeName = val => setName(val);
  const onchangeEmail = val => setEmail(val);
  const onchangeBidang = val => setBidang(val);

  const buttonSetting = () => {
    if (button === 'Simpan') {
      setButton('Update');
    }
    if (button === 'Update') {
      setButton('Simpan');
    }
    valueReset();
  };

  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };

    if (button === 'Simpan') {
      axios
        .post('http://172.17.1.229:3000/users/', data)
        .then(res => {
          //   console.log('res', res);
          valueReset();
        })
        .catch(e => console.log(e));
    } else if (button === 'Update') {
      axios
        .put(`http://172.17.1.229:3000/users/${selectedUser.id}`, data)
        .then(res => {
          console.log(res);
          valueReset();
        });
    }
  };

  const valueReset = () => {
    setName('');
    setEmail('');
    setBidang('');
    getData();
    setButton('Simpan');
  };

  const getData = () => {
    axios.get('http://172.17.1.229:3000/users/').then(res => {
      console.log(res.data);
      setUsers(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const selectItem = item => {
    console.log(item);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton('Update');
    setSelectedUser(item);
  };

  const deleteItem = item => {
    console.log(item);
    axios.delete(`http://172.17.1.229:3000/users/${item.id}`).then(res => {
      console.log(res);
      valueReset();
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRUD FROM LOCAL API (JSON SERVER)</Text>
      <View style={styles.wrapperView}>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={onchangeName}
          placeholder="Nama Lengkap"
        />
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={onchangeEmail}
          placeholder="Email"
        />
        <TextInput
          style={styles.textInput}
          value={bidang}
          onChangeText={onchangeBidang}
          placeholder="Bidang"
        />
        <Button
          disabled={name === '' && email === '' && bidang === ''}
          title={button}
          style={styles.textInput}
          onPress={submit}
        />
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => buttonSetting()}>
          <Text>
            ini {button}, klik{' '}
            {button === 'Simpan'
              ? 'avatar item di bawah untuk Update'
              : 'teks ini untuk membuat'}{' '}
            data
          </Text>
        </TouchableOpacity>
        <View
          style={{backgroundColor: 'grey', height: 2, marginVertical: 20}}
        />
        {users.map(it => {
          return (
            <Item
              key={it.id}
              name={it.name}
              email={it.email}
              bidang={it.bidang}
              onPress={() => selectItem(it)}
              onDelete={() =>
                Alert.alert(
                  'Peringatan!',
                  `Anda yakin ingin menghapus ${it.name}?`,
                  [
                    {text: 'Tidak', onPress: () => {}},
                    {text: 'Ya', onPress: () => deleteItem(it)},
                  ],
                )
              }
            />
          );
        })}
      </View>
    </View>
  );
};

export default SimpleUIComponent;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  wrapperView: {
    paddingHorizontal: 20,
  },
  wrapperViewItem: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#7f7f7f',
    borderRadius: 24,
    paddingHorizontal: 24,
    marginBottom: 14,
  },
  imageItem: {
    height: 72,
    width: 72,
    borderRadius: 72,
  },
  descItem: {
    flex: 1,
    marginLeft: 16,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  descName: {
    fontSize: 14,
    fontWeight: '600',
  },
  delete: {
    fontSize: 20,
    fontWeight: '700',
    color: 'red',
  },
});
