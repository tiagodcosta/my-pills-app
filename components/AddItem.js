import React, { Component } from 'react'
import { Icon, Content, Container, Button, Form, Item, Input, Text } from 'native-base'

import { connect } from 'react-redux'
import * as actions from '../actions'


class AddItem extends Component {
  static navigationOptions = {
      tabBarLabel: 'Add',
      tabBarIcon: ({ tintColor }) =>
        <Icon name="ios-add-circle" />
  }
  onAddPress(){
    const { name, quantity, type, frequency, notes } = this.props

    this.props.createNewItem({name, quantity, type, frequency, notes})

    this.props.navigation.navigate('Prescriptions')
  }

  render(){
    return (
      <Container padder showsVerticalScrollIndicator={false}>
        <Content>
        <Form>
           <Item>
             <Input placeholder="Name" value={this.props.name} onChangeText={value => this.props.formUpdate({prop: 'name', value})}/>
           </Item>
           <Item>
             <Input placeholder="Quantity" value={this.props.quantity} onChangeText={value => this.props.formUpdate({prop: 'quantity', value})} />
           </Item>
           <Item>
             <Input placeholder="Type" value={this.props.type} onChangeText={value => this.props.formUpdate({prop: 'type', value})}/>
           </Item>
           <Item>
             <Input placeholder="Frequency" value={this.props.frequency}  onChangeText={value => this.props.formUpdate({prop: 'frequency', value})}/>
           </Item>
           <Item last>
             <Input placeholder="Notes" value={this.props.notes} onChangeText={value => this.props.formUpdate({prop: 'notes', value})} />
           </Item>
           <Button onPress={this.onAddPress.bind(this)}><Text>Add prescription</Text></Button>
        </Form>
      </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  const { name, quantity, type, frequency, notes } = state

  return {
    name, quantity, type, frequency, notes
  }
}

export default connect(mapStateToProps, actions)(AddItem)
