import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Container, Button, Content } from 'native-base'
import firebase from 'firebase'

import HeaderMain from './components/Header'
import ListHome from './components/ListHome'
import AddButton from './components/AddButton'

const config = {
    apiKey: "AIzaSyDq-SroilBDUM4dZbvz7UqXC-lK6z-95Zo",
    authDomain: "my-pills-app.firebaseapp.com",
    databaseURL: "https://my-pills-app.firebaseio.com",
    projectId: "my-pills-app",
    storageBucket: "my-pills-app.appspot.com",
    messagingSenderId: "606105974383"
}


export default class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Container>
        <HeaderMain />
        <Content padder>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.titleText}>My medications</Text>
        </View>
        <ListHome />
        <AddButton />
      </Content>
      </Container>
    );
  }
}

const styles  = StyleSheet.create({
  titleText: {
    fontSize: 20,
    marginTop: 20
  }
})
