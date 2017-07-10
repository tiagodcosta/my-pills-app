import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import { Container, Content, Form, Item, Button, Text, Input } from 'native-base'
import styled from 'styled-components'

import Loader from './Loader'

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    loading: false
  };

  onPressButton() {
    console.log('clicked button');
  }

  renderLoader() {
    if(this.state.loading) {
      return <Loader size="large" />
    }
      return <Button style={{marginTop: 30}} onPress={this.onPressButton.bind(this)} block info><Text>login</Text></Button>
  }

  render() {
    return(
      <Container>
         <Content>
           <Form>
             <Item>
               <Input placeholder="Username" value={this.state.email} onChangeText={email => this.setState({ email })} />
             </Item>
             <Item last>
               <Input placeholder="Password" value={this.state.password} onChangeText={password => this.setState({ password })} password={true} />
             </Item>
              {this.renderLoader()}
           </Form>
         </Content>
       </Container>
    )
  }
}
