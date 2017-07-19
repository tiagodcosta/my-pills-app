import React, { Component } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { Container, Content, Form, Item, Button, Text, Input } from 'native-base'
import styled from 'styled-components'
import firebase from 'firebase'

import Loader from './Loader'


export default class Login extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onPressButton() {
    const { email, password } = this.state
    this.setState({error: '', loading: true})

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onAuthSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onAuthSuccess.bind(this))
          .catch(this.onAuthFailed.bind(this));
      });
  }

  onAuthSuccess(){
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    });
  }

  onAuthFailed() {
    this.setState({
      error: 'Authentication failed',
      loading: false
    });
  }

  renderLoader() {
    if(this.state.loading) {
      return <Loader size="large" />
    }
      return <Button style={{marginTop: 30, backgroundColor: '#44ad8e'}} onPress={this.onPressButton.bind(this)} block info><Text>login</Text></Button>
  }

  render() {
    return(
      <Container>
         <Content padder>
           <View style={{alignItems: 'center', marginTop: 30, marginBottom: 30}}>
             <Text style={{ fontSize: 20, marginTop: 20, color: '#44ad8e'}}>Login or create account</Text>
           </View>
           <Form>
            <Item>
               <Input placeholder="Username" value={this.state.email} onChangeText={email => this.setState({ email })} />
            </Item>
            <Item last>
               <Input placeholder="Password" value={this.state.password} onChangeText={password => this.setState({ password })} password={true} />
            </Item>
            <View style={{alignItems: 'center', marginTop: 10}}>
               <Text style={{color: '#e74c3c'}}>{this.state.error}</Text>
            </View>
              {this.renderLoader()}
           </Form>
         </Content>
       </Container>
    )
  }
}
