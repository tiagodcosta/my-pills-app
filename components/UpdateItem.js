import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon, Content, Container, Button, Form, Item, Input } from 'native-base'

import { connect } from 'react-redux'
import * as actions from '../actions'


class UpdateItem extends Component {
  static navigationOptions = {
      tabBarLabel: 'Add',
      tabBarIcon: ({ tintColor }) =>
        <Icon name="add-circle" />
  }
  onUpdatePress(){
    const { name, quantity, type, frequency, notes, uid } = this.props

    this.props.saveItem({name, quantity, type, frequency, notes, uid })

  }

  render(){
    return (
      <View showsVerticalScrollIndicator={false}>
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
           <Item>
             <Input placeholder="Notes" value={this.props.notes} onChangeText={value => this.props.formUpdate({prop: 'notes', value})} />
           </Item>
           <Button onPress={this.onUpdatePress.bind(this)}><Text>Update</Text></Button>
        </Form>
      </View>
    )
  }
}

const mapStateToProps = state => {
  const { name, quantity, type, frequency, notes, uid } = state

  return {
    name, quantity, type, frequency, notes, uid
  }
}

export default connect(mapStateToProps, actions)(UpdateItem)
