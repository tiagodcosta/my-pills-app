import React from 'react'
import { Text, View } from 'react-native'
import { Container, Button, Content } from 'native-base'
import { Font, AppLoading } from 'expo'

import firebase from 'firebase'

import HeaderMain from './components/Header'
import Login from './components/Login'
import ListContainer from './components/ListContainer'
import Loader from './components/Loader'

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
    loggedIn: null,
    fontsAreLoaded: false
  };

  async componentWillMount() {
    firebase.initializeApp(config);

    await Font.loadAsync({
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true, fontsAreLoaded: true})
      } else {
        this.setState({loggedIn: false, fontsAreLoaded: true})
      }
    })
  }

  renderInitialView() {
    switch (this.state.loggedIn && this.state.fontsAreLoaded) {
      case true:
        return <ListContainer />
      case false:
        return <Login />
      default:
        return <Loader size="large" />
    }
  }

  render() {
    if (!this.state.fontsAreLoaded) {
      return <AppLoading />;
    }
    return (
      <Container>
        <HeaderMain />
        <Content padder>
        <View>
          {this.renderInitialView()}
        </View>
      </Content>
      </Container>
    );
  }
}
