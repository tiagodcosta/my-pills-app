import React from 'react'
import { TextInput, View } from 'react-native'
import { Container, Content, Form, Item, Button, Text } from 'native-base';



export default class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  onPressButton() {
    console.log('clicked button');
  }

  render() {
    return(
      <Container>
         <Content>
           <Form>
             <Item>
               <TextInput placeholder="Username" value={this.state.email} onChangeText={email => this.setState({ email })} />
             </Item>
             <Item last>
               <TextInput placeholder="Password" value={this.state.password} onChangeText={password => this.setState({ password })} password={true} />
             </Item>
             <Button onPress={this.onPressButton.bind(this)} info><Text>login</Text></Button>
           </Form>
         </Content>
       </Container>
    )
  }
}
