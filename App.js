import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Container, Button, Content } from 'native-base'
import { Font, AppLoading } from 'expo'
import firebase from 'firebase'

import HeaderMain from './components/Header'
import ListHome from './components/ListHome'
import AddButton from './components/AddButton'
import Login from './components/Login'

const config = {
    apiKey: "AIzaSyDq-SroilBDUM4dZbvz7UqXC-lK6z-95Zo",
    authDomain: "my-pills-app.firebaseapp.com",
    databaseURL: "https://my-pills-app.firebaseio.com",
    projectId: "my-pills-app",
    storageBucket: "my-pills-app.appspot.com",
    messagingSenderId: "606105974383"
}


export default class App extends React.Component {

  state = {
    fontsAreLoaded: false,
  };

  async componentWillMount() {
    await Font.loadAsync({
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
    });
    this.setState({ fontsAreLoaded: true});
  }

  render() {
    if (!this.state.fontsAreLoaded) {
      return <AppLoading />;
    }
    return (
      <Container>
        <HeaderMain />
        <Content padder>
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <Text style={styles.titleText}>Login or create account</Text>
        </View>
        {/* <ListHome />
        <AddButton /> */}
        <Login />
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
