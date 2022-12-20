import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const CallAPIVanilla = () => {
  const [dataUser, setDataUser] = useState([]);
  const [postDataUser, setPostDataUser] = useState({
    name: '',
    job: '',
  });
  useEffect(() => {}, []);

  const getDAta = () => {
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(json => {
        console.log([...json.data]);
        setDataUser([...json.data]);
      });
  };

  const postDATA = () => {
    const dataPOST = {
      name: 'morpheus',
      job: 'leader',
    };
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(dataPOST),
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setPostDataUser(json);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textTitle}>CallAPIVanilla</Text>
        <View style={{width: 120, marginBottom: 20}}>
          <Button
            title="reset all value"
            onPress={() => {
              setDataUser([]);
              setPostDataUser({
                name: '',
                job: '',
              });
            }}
          />
        </View>
        <View style={styles.section}>
          <Button title="GET Data" onPress={getDAta} />
          <Text>Response GET Data</Text>
          <ScrollView horizontal>
            <View style={{flexDirection: 'row', gap: 10}}>
              {dataUser?.map((it, idx) => {
                return (
                  <View key={idx} style={styles.profiles}>
                    <Image source={{uri: it.avatar}} style={styles.avatar} />
                    <Text
                      style={
                        styles.textName
                      }>{`${it.first_name} ${it.last_name}`}</Text>
                    <Text style={styles.textEmail}>{it.email}</Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
        <View style={styles.section}>
          <Button title="POST Data" onPress={postDATA} />
          <Text>Response POST Data</Text>
          <Text>
            {!postDataUser.name
              ? 'not created yet'
              : `${postDataUser.name} as ${postDataUser.job}`}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
    marginBottom: 16,
  },
  section: {
    marginBottom: 32,
  },
  profiles: {
    alignItems: 'center',
    width: 72,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  textEmail: {
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'center',
  },
  textName: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
});
